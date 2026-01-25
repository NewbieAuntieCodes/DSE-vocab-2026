#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const ROOT_DIR = path.resolve(__dirname, '..');

const STORE_DIR = path.join(ROOT_DIR, 'lexicon', 'store');
const INBOX_PATH = path.join(ROOT_DIR, 'lexicon', 'inbox.ndjson');

const main = () => {
  const args = process.argv.slice(2);
  const fromIndex = args.indexOf('--from');
  const from = fromIndex >= 0 ? args[fromIndex + 1] : null;
  if (!from) {
    console.error('Usage: node scripts/lexicon-migrate-from-ts.cjs --from path/to/legacy-lexicon.ts');
    process.exit(1);
  }

  const LEGACY_LEXICON_PATH = path.resolve(ROOT_DIR, from);
  if (!fs.existsSync(LEGACY_LEXICON_PATH)) {
    console.error(`Legacy lexicon not found: ${path.relative(ROOT_DIR, LEGACY_LEXICON_PATH)}`);
    process.exit(1);
  }

  const sourceText = fs.readFileSync(LEGACY_LEXICON_PATH, 'utf8');
  const sourceFile = ts.createSourceFile(
    LEGACY_LEXICON_PATH,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );

  const objectsByName = new Map();
  const aliasByName = new Map();
  const directWordExports = new Map();

  const isExported = (node) =>
    Array.isArray(node.modifiers) && node.modifiers.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);

  const parseObjectLiteral = (obj) => {
    const out = {};
    for (const prop of obj.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;

      const key = ts.isIdentifier(prop.name)
        ? prop.name.text
        : ts.isStringLiteral(prop.name)
          ? prop.name.text
          : null;
      if (!key) continue;

      const v = prop.initializer;
      if (ts.isStringLiteral(v) || ts.isNoSubstitutionTemplateLiteral(v)) {
        out[key] = v.text;
      }
    }
    return out;
  };

  const visit = (node) => {
    if (ts.isVariableStatement(node) && isExported(node)) {
      for (const decl of node.declarationList.declarations) {
        if (!ts.isIdentifier(decl.name)) continue;
        const name = decl.name.text;
        const init = decl.initializer;
        if (!init) continue;

        if (ts.isObjectLiteralExpression(init)) {
          const obj = parseObjectLiteral(init);
          if (name.startsWith('W_')) {
            objectsByName.set(name, obj);
          } else if (name.startsWith('word_')) {
            directWordExports.set(name, obj);
          }
        } else if (ts.isIdentifier(init)) {
          if (name.startsWith('word_')) {
            aliasByName.set(name, init.text);
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);

  const entries = [];

  for (const [exportName, obj] of directWordExports) {
    entries.push(toEntry(exportName, obj));
  }

  for (const [exportName, refName] of aliasByName) {
    const obj = objectsByName.get(refName);
    if (!obj) {
      throw new Error(`Alias ${exportName} references missing const ${refName}`);
    }
    entries.push(toEntry(exportName, obj));
  }

  // Sort and de-dupe by export id (last wins, though we shouldn't have duplicates).
  const byId = new Map();
  for (const e of entries) byId.set(e.id, e);
  const merged = [...byId.values()].sort((a, b) => a.word.localeCompare(b.word));

  if (merged.length === 0) {
    throw new Error(
      `No entries found in ${path.relative(ROOT_DIR, LEGACY_LEXICON_PATH)} (refusing to overwrite store).`
    );
  }

  fs.mkdirSync(STORE_DIR, { recursive: true });
  writeStore(merged);

  // Create/overwrite inbox template
  fs.mkdirSync(path.dirname(INBOX_PATH), { recursive: true });
  const inboxTemplate = [
    '// Add new/updated words here (one JSON per line).',
    '// Run: npm run lexicon',
    '',
  ].join('\n');
  fs.writeFileSync(INBOX_PATH, inboxTemplate, 'utf8');

  console.log(`Migrated ${merged.length} entries -> ${path.relative(ROOT_DIR, STORE_DIR)}`);
};

const toEntry = (exportName, obj) => {
  const required = ['word', 'phonetic', 'definition', 'example'];
  for (const key of required) {
    if (typeof obj[key] !== 'string' || obj[key].trim() === '') {
      throw new Error(`Missing ${key} for ${exportName}`);
    }
  }

  const entry = {
    id: exportName,
    word: obj.word,
    phonetic: obj.phonetic,
    definition: obj.definition,
    example: obj.example,
  };

  if (typeof obj.emoji === 'string' && obj.emoji.trim() !== '') entry.emoji = obj.emoji;
  if (typeof obj.category === 'string' && obj.category.trim() !== '') entry.category = obj.category;
  if (typeof obj.group === 'string' && obj.group.trim() !== '') entry.group = obj.group;

  return entry;
};

const bucketKey = (word) => {
  const trimmed = String(word ?? '').trim();
  const match = trimmed.match(/[A-Za-z]/);
  if (!match) return '_';
  return match[0].toUpperCase();
};

const writeStore = (entries) => {
  // One entry per line, bucketed by first letter of the displayed word.
  const buckets = new Map();
  for (const entry of entries) {
    const bucket = bucketKey(entry.word);
    const list = buckets.get(bucket) ?? [];
    list.push(entry);
    buckets.set(bucket, list);
  }

  // Clean old ndjson files
  for (const file of fs.readdirSync(STORE_DIR)) {
    if (file.endsWith('.ndjson')) fs.unlinkSync(path.join(STORE_DIR, file));
  }

  for (const [bucket, list] of [...buckets.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    const content = list.map((e) => JSON.stringify(e, null, 0)).join('\n') + '\n';
    fs.writeFileSync(path.join(STORE_DIR, `${bucket}.ndjson`), content, 'utf8');
  }
};

main();
