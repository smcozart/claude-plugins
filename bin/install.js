#!/usr/bin/env node
// npx smcozart <plugin> [--scope user|project|local]
const { spawnSync } = require('node:child_process');
const { plugins } = require('../.claude-plugin/marketplace.json');
const [name, ...rest] = process.argv.slice(2);
if (!plugins.some(p => p.name === name)) {
  console.error(`usage: npx smcozart <${plugins.map(p => p.name).join('|')}> [--scope user|project|local]`);
  process.exit(2);
}
const r = spawnSync('claude', ['plugin', 'install', name, '--marketplace', 'smcozart/claude-plugins', ...rest], { stdio: 'inherit' });
process.exit(r.status ?? 1);
