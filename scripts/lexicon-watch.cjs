#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const LEXICON_DIR = path.join(ROOT_DIR, 'lexicon');
const INBOX_PATH = path.join(LEXICON_DIR, 'inbox.ndjson');

const TEMPLATE = [
  '// Add new/updated words here (one JSON per line).',
  '// Run: npm run lexicon',
  '',
].join('\n');

const DEBOUNCE_MS = 200;

let debounceTimer = null;
let isRunning = false;
let runQueued = false;

const ensureInboxExists = () => {
  fs.mkdirSync(LEXICON_DIR, { recursive: true });
  if (!fs.existsSync(INBOX_PATH)) {
    fs.writeFileSync(INBOX_PATH, TEMPLATE, 'utf8');
  }
};

const inboxHasEntries = () => {
  if (!fs.existsSync(INBOX_PATH)) return false;
  const content = fs.readFileSync(INBOX_PATH, 'utf8');
  const lines = content.split(/\r?\n/);
  return lines.some((raw) => {
    const line = raw.trim();
    if (!line) return false;
    if (line.startsWith('//') || line.startsWith('#')) return false;
    return true;
  });
};

const scheduleRun = () => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debounceTimer = null;
    runOnce();
  }, DEBOUNCE_MS);
};

const runOnce = () => {
  if (isRunning) {
    runQueued = true;
    return;
  }

  if (!inboxHasEntries()) return;

  isRunning = true;
  console.log('[lexicon] inbox changed -> regenerating...');

  const child = spawn(process.execPath, [path.join(ROOT_DIR, 'scripts', 'lexicon.cjs'), 'build'], {
    stdio: 'inherit',
  });

  child.on('exit', (code) => {
    isRunning = false;
    if (code === 0) {
      console.log('[lexicon] done');
    } else {
      console.log(`[lexicon] failed (exit ${code})`);
    }

    if (runQueued) {
      runQueued = false;
      scheduleRun();
    }
  });
};

const main = () => {
  ensureInboxExists();

  // Watch the directory so we survive file rewrites/renames from editors.
  fs.watch(LEXICON_DIR, { persistent: true }, (_eventType, filename) => {
    if (!filename || filename === path.basename(INBOX_PATH)) {
      scheduleRun();
    }
  });

  console.log('[lexicon] watching lexicon/inbox.ndjson');
};

main();

