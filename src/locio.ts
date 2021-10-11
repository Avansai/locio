#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { exportCommand } from './commands/export';

// Use `require` to avoid rebasing `rootDir` when compiling - @see https://stackoverflow.com/questions/50822310/how-to-import-package-json-in-typescript/50827008#answer-53836076
const version = require('../package.json').version;

yargs(hideBin(process.argv))
  .scriptName('locio')
  .usage('$0 <cmd> [args]')
  .command(
    'export [-f] [-u] [-a] [--help]',
    'Export (create) a package to be translated',
    (yargs) => {
      yargs
        .option('file-filter', {
          alias: 'f',
          demandOption: false,
          describe: `Specify the file filter`,
          type: 'string',
          default: '**/*.properties',
        })
        .option('ignore-untracked', {
          alias: 'u',
          demandOption: false,
          describe: 'Ignore untracked GitHub files',
          type: 'boolean',
        })
        .option('match-all', {
          alias: 'a',
          demandOption: false,
          describe: 'Match all files of the filter, regardless of their status in Github',
          type: 'boolean',
          conflicts: 'ignore-untracked',
        })
        .version(false);
    },
    (argv) => {
      const fileFilter = argv.fileFilter as string;
      const ignoreUntracked = !!argv.ignoreUntracked as boolean;
      const matchAll = !!argv.matchAll as boolean;

      try {
        exportCommand(fileFilter, ignoreUntracked, matchAll);
        process.exit();
      } catch (error) {
        console.error(`ERROR: ${(error as Error).message}`);
        process.exit(1);
      }
    }
  )
  .demandCommand()
  .wrap(null)
  .help()
  .strict()
  .strictCommands()
  .version(version)
  .parse();
