#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('node:fs');
const path = require('node:path');

const ROOT_DIR = path.resolve(__dirname, '..');

const STORE_DIR = path.join(ROOT_DIR, 'lexicon', 'store');
const INBOX_PATH = path.join(ROOT_DIR, 'lexicon', 'inbox.ndjson');

const OUT_DIR = path.join(ROOT_DIR, 'src', 'data', 'generated', 'lexicon');
const OUT_INDEX_PATH = path.join(OUT_DIR, 'index.ts');

const MAX_LINES_PER_FILE = 950;

const main = async () => {
  const [command = 'build', ...args] = process.argv.slice(2);
  const flags = new Set(args);

  switch (command) {
    case 'build':
      build({ apply: true, clearInbox: true });
      return;
    case 'generate':
      build({ apply: false, clearInbox: false });
      return;
    case 'apply':
      applyInboxToStore({ clearInbox: !flags.has('--keep-inbox') });
      return;
    case 'help':
    case '--help':
    case '-h':
      printHelp();
      return;
    default:
      console.error(`Unknown command: ${command}`);
      printHelp();
      process.exit(1);
  }
};

const printHelp = () => {
  console.log(
    [
      'Usage:',
      '  node scripts/lexicon.cjs build        # apply inbox -> store, clear inbox, generate TS',
      '  node scripts/lexicon.cjs generate     # generate TS from store (+ inbox), no writes',
      '  node scripts/lexicon.cjs apply        # apply inbox -> store (no TS generation)',
      '',
      'Files:',
      `  inbox: ${path.relative(ROOT_DIR, INBOX_PATH)}`,
      `  store: ${path.relative(ROOT_DIR, STORE_DIR)}`,
      `  out:   ${path.relative(ROOT_DIR, OUT_DIR)}`,
    ].join('\n')
  );
};

const build = ({ apply, clearInbox }) => {
  ensureDir(path.join(ROOT_DIR, 'lexicon'));
  ensureDir(STORE_DIR);
  ensureDir(OUT_DIR);

  const { storeEntries, inboxEntries } = readAllEntries();
  const mergedById = mergeEntries(storeEntries, inboxEntries);

  if (apply) {
    writeStoreFromEntries(mergedById);
    if (clearInbox) resetInbox();
  }

  writeGeneratedTs(mergedById);
};

const applyInboxToStore = ({ clearInbox }) => {
  ensureDir(path.join(ROOT_DIR, 'lexicon'));
  ensureDir(STORE_DIR);

  const { storeEntries, inboxEntries } = readAllEntries();
  const mergedById = mergeEntries(storeEntries, inboxEntries);
  writeStoreFromEntries(mergedById);
  if (clearInbox) resetInbox();
};

const readAllEntries = () => {
  const storeFiles = listNdjsonFiles(STORE_DIR);
  const storeEntries = storeFiles.flatMap(readNdjsonFile);
  const inboxEntries = fs.existsSync(INBOX_PATH) ? readNdjsonFile(INBOX_PATH) : [];
  return { storeEntries, inboxEntries };
};

const mergeEntries = (storeEntries, inboxEntries) => {
  const byId = new Map();

  for (const entry of storeEntries) {
    if (byId.has(entry.id)) {
      throw new Error(`Duplicate id in store: ${entry.id}`);
    }
    byId.set(entry.id, entry);
  }

  for (const entry of inboxEntries) {
    byId.set(entry.id, entry);
  }

  return byId;
};

const writeStoreFromEntries = (entriesById) => {
  const entries = [...entriesById.values()].sort(sortByWordThenId);
  const buckets = bucketEntries(entries);

  const targetFiles = [];
  for (const [bucket, bucketEntries] of buckets) {
    const chunks = chunkArray(bucketEntries, MAX_LINES_PER_FILE);
    chunks.forEach((chunk, chunkIndex) => {
      const suffix = chunks.length === 1 ? '' : `_${chunkIndex + 1}`;
      const filename = `${bucket}${suffix}.ndjson`;
      const filePath = path.join(STORE_DIR, filename);
      targetFiles.push(filePath);

      const content =
        chunk.map((e) => JSON.stringify(e, null, 0)).join('\n') + (chunk.length ? '\n' : '');
      fs.writeFileSync(filePath, content, 'utf8');
    });
  }

  // Remove old ndjson files that are no longer part of the current bucket set.
  const existing = listNdjsonFiles(STORE_DIR);
  const targetSet = new Set(targetFiles.map((p) => path.resolve(p)));
  for (const file of existing) {
    if (!targetSet.has(path.resolve(file))) {
      fs.unlinkSync(file);
    }
  }
};

const resetInbox = () => {
  const template = [
    '// Add new/updated words here (one JSON per line).',
    '// Run: npm run lexicon',
    '',
  ].join('\n');

  fs.writeFileSync(INBOX_PATH, template, 'utf8');
};

const writeGeneratedTs = (entriesById) => {
  const entries = [...entriesById.values()].sort(sortByWordThenId);
  const buckets = bucketEntries(entries);

  const exports = [];

  for (const [bucket, bucketEntries] of buckets) {
    const chunks = chunkArray(bucketEntries, MAX_LINES_PER_FILE - 5);
    chunks.forEach((chunk, chunkIndex) => {
      const suffix = chunks.length === 1 ? '' : `_${chunkIndex + 1}`;
      const basename = `${bucket}${suffix}`;
      const filePath = path.join(OUT_DIR, `${basename}.ts`);

      exports.push(`export * from './${basename}';`);

      const lines = [];
      lines.push("import type { Word } from '../../../types';");
      lines.push('');

      for (const entry of chunk) {
        lines.push(`export const ${entry.id}: Word = ${tsObjectLiteral(entry)};`);
      }

      lines.push('');
      fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    });
  }

  exports.sort();
  const indexContent = exports.join('\n') + '\n';
  fs.writeFileSync(OUT_INDEX_PATH, indexContent, 'utf8');
};

const tsObjectLiteral = (entry) => {
  const props = [];
  props.push(`word: ${JSON.stringify(entry.word)}`);
  if (entry.emoji) props.push(`emoji: ${JSON.stringify(entry.emoji)}`);
  props.push(`phonetic: ${JSON.stringify(entry.phonetic)}`);
  props.push(`definition: ${JSON.stringify(entry.definition)}`);
  props.push(`example: ${JSON.stringify(entry.example)}`);
  if (entry.category) props.push(`category: ${JSON.stringify(entry.category)}`);
  if (entry.group) props.push(`group: ${JSON.stringify(entry.group)}`);
  return `{ ${props.join(', ')} }`;
};

const bucketEntries = (entries) => {
  const buckets = new Map();
  for (const entry of entries) {
    validateEntry(entry);

    const bucket = bucketKey(entry.word);
    const list = buckets.get(bucket) ?? [];
    list.push(entry);
    buckets.set(bucket, list);
  }

  // Sort within each bucket for stable diffs.
  for (const [bucket, list] of buckets) {
    buckets.set(bucket, [...list].sort(sortByWordThenId));
  }

  return new Map([...buckets.entries()].sort(([a], [b]) => a.localeCompare(b)));
};

const bucketKey = (word) => {
  const trimmed = String(word ?? '').trim();
  const match = trimmed.match(/[A-Za-z]/);
  if (!match) return '_';
  return match[0].toUpperCase();
};

const validateEntry = (entry) => {
  if (!entry || typeof entry !== 'object') throw new Error('Entry must be an object');

  if (!isValidIdentifier(entry.id)) {
    throw new Error(`Invalid or missing id: ${JSON.stringify(entry.id)}`);
  }
  if (!entry.id.startsWith('word_')) {
    throw new Error(`id must start with "word_": ${entry.id}`);
  }

  for (const key of ['word', 'phonetic', 'definition', 'example']) {
    if (typeof entry[key] !== 'string' || entry[key].trim() === '') {
      throw new Error(`Entry ${entry.id} is missing required string field: ${key}`);
    }
  }

  if (entry.category && entry.category !== 'basic' && entry.category !== 'advanced') {
    throw new Error(`Entry ${entry.id} has invalid category: ${entry.category}`);
  }
};

const isValidIdentifier = (text) => typeof text === 'string' && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(text);

const listNdjsonFiles = (dir) => {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith('.ndjson'))
    .map((d) => path.join(dir, d.name))
    .sort((a, b) => a.localeCompare(b));
};

const readNdjsonFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const entries = [];

  for (let index = 0; index < lines.length; index++) {
    const raw = lines[index];
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('//') || line.startsWith('#')) continue;

    let parsed;
    try {
      parsed = JSON.parse(line);
    } catch (error) {
      const rel = path.relative(ROOT_DIR, filePath);
      throw new Error(`Invalid JSON in ${rel}:${index + 1}\n${raw}`);
    }

    entries.push(parsed);
  }

  return entries;
};

const ensureDir = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};

const chunkArray = (items, chunkSize) => {
  if (items.length <= chunkSize) return [items];
  const chunks = [];
  for (let i = 0; i < items.length; i += chunkSize) {
    chunks.push(items.slice(i, i + chunkSize));
  }
  return chunks;
};

const sortByWordThenId = (a, b) => {
  const aw = String(a.word).toLowerCase();
  const bw = String(b.word).toLowerCase();
  if (aw !== bw) return aw.localeCompare(bw);
  return String(a.id).localeCompare(String(b.id));
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

