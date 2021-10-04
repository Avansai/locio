#!/usr/bin/env node
import yargs, { boolean } from 'yargs';
import { hideBin } from 'yargs/helpers';

import fs from 'fs-extra';
import path from 'path';
import { demandOneOfOption } from './yargs-helper';

import { x86 as murmur } from 'murmurhash3js';
import { getModifiedFiles, getUntrackedFiles } from './git-helper';

export type FileMap = {
  sourceFilePath: string;
  compactedFilename: string;
};

const args = yargs(hideBin(process.argv))
  .scriptName('locio')
  .option('export', {
    alias: 'e',
    type: 'boolean',
    describe: 'Export (create) a package to be translated',
    conflicts: 'import',
  })
  .option('import', {
    alias: 'i',
    type: 'boolean',
    describe: 'Import back a package that has been translated',
    conflicts: 'export',
  })
  .option('filter', {
    alias: 'f',
    type: 'string',
    describe: 'Specify the file filter',
    conflicts: 'import',
    default: '**/*.properties',
  })
  .option('ignore-untracked', {
    alias: 'u',
    type: 'boolean',
    describe: 'Ignore untracked files',
    conflicts: 'import',
    default: false,
  })
  .check(demandOneOfOption('export', 'import'))
  .parse();

if (args.export) {
  console.dir(args);
  const modifiedFiles = getModifiedFiles(args.filter);

  if (!args['ignore-untracked']) {
    const untrackedFiles = getUntrackedFiles(args.filter);
    console.dir('untrackedFiles');
    console.dir(untrackedFiles);
  }

  // add tracked - compare tracked and untracked
  /// git ls-files --others --exclude-standard

  console.dir('modifiedFiles');
  console.dir(modifiedFiles);

  const filesMap: FileMap[] = [];

  modifiedFiles.forEach((filePath) => {
    const fileHash = murmur.hash128(filePath);
    let usableFileHash = fileHash;

    /**
     * Very unlikely that there will ever be a collision, but if it happens, we will add an incremental number.
     * Ideally we want to re-use the same hash for files that will be translated multiple time for consistency.
     * But in practice most TMSes configurations will not use file names part of the rules that determine how the
     * translation memory is used.
     */
    for (
      let collisionCount = 0;
      filesMap.filter((fileMap) => path.parse(fileMap.compactedFilename).name === usableFileHash)
        .length;
      collisionCount++
    ) {
      usableFileHash = fileHash + collisionCount;
    }

    const compactedFilename = `${usableFileHash}${path.extname(filePath)}`;

    filesMap.push({
      sourceFilePath: filePath,
      compactedFilename,
    });
  });

  console.dir(filesMap);
}
