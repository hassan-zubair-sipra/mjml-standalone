#!/usr/bin/env node
'use strict';

const standaloneVersion = require('./package.json').version;
const mjmlVersion = require('../packages/mjml/package.json').version;

const args = process.argv.slice(2);
const isVersionFlag = args.some((a) => a === '--version' || a === '-V');
const isHelpFlag = args.some((a) => a === '--help' || a === '-h') || args.length === 0;

if (isVersionFlag) {
  console.log(`mjml-standalone v${standaloneVersion}`);
  console.log(`mjml           v${mjmlVersion}`);
  process.exit(0);
}

if (isHelpFlag) {
  console.log(`mjml-standalone v${standaloneVersion} (mjml v${mjmlVersion})\n`);
}

// Boot the MJML CLI
require('../packages/mjml/lib/index');
require('../packages/mjml-cli/lib/client.js')();
