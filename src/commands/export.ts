import { getMatchingFiles, getModifiedFiles, getUntrackedFiles } from '../git-helper';

import fs from 'fs-extra';
import path from 'path';

import { x86 as murmur } from 'murmurhash3js';

export type ManifestEntry = {
  sourceFilePath: string;
  translatableFilename: string;
};

export function exportCommand(fileFilter: string, ignoreUntracked: boolean, matchAll: boolean) {
  const modifiedFiles = !matchAll ? getModifiedFiles(fileFilter) : [];
  const untrackedFiles = !ignoreUntracked && !matchAll ? getUntrackedFiles(fileFilter) : [];
  const matchingFiles = matchAll ? getMatchingFiles(fileFilter) : [];

  const translationManifest: ManifestEntry[] = [];

  const translatableFiles = modifiedFiles.concat(untrackedFiles).concat(matchingFiles);

  translatableFiles.forEach((translatableFile) => {
    const fileHash = murmur.hash128(translatableFile);
    let usableFileHash = fileHash;

    /**
     * Very unlikely that there will ever be a collision, but if it happens, we will add an incremental number.
     * Ideally we want to re-use the same hash for files that will be translated multiple time for consistency.
     * But in practice most TMSes configurations will not use file names part of the rules that determines how
     * translation memory is used.
     */
    for (
      let collisionCount = 0;
      translationManifest.filter(
        (fileMap) => path.parse(fileMap.translatableFilename).name === usableFileHash
      ).length;
      collisionCount++
    ) {
      usableFileHash = fileHash + collisionCount;
    }

    const translatableFilename = `${usableFileHash}${path.extname(translatableFile)}`;

    translationManifest.push({
      sourceFilePath: translatableFile,
      translatableFilename: translatableFilename,
    });
  });

  console.dir(translationManifest);
}
