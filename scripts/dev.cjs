#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');

const ROOT_DIR = path.resolve(__dirname, '..');

const viteBin = path.join(
  ROOT_DIR,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'vite.cmd' : 'vite'
);

const lexiconWatchScript = path.join(ROOT_DIR, 'scripts', 'lexicon-watch.cjs');

const main = () => {
  if (!fs.existsSync(viteBin)) {
    console.error('Vite binary not found. Run `npm install` first.');
    process.exit(1);
  }

  const viteArgs = process.argv.slice(2);

  const lexiconWatch = spawn(process.execPath, [lexiconWatchScript], { stdio: 'inherit' });
  const vite = spawn(viteBin, viteArgs, { stdio: 'inherit' });

  const shutdown = (signal) => {
    if (lexiconWatch.exitCode === null) lexiconWatch.kill(signal);
    if (vite.exitCode === null) vite.kill(signal);
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));

  vite.on('exit', (code) => {
    if (lexiconWatch.exitCode === null) lexiconWatch.kill('SIGTERM');
    process.exit(code ?? 0);
  });

  lexiconWatch.on('exit', (code) => {
    if (vite.exitCode === null) vite.kill('SIGTERM');
    process.exit(code ?? 0);
  });
};

main();

