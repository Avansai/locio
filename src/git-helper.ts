import path from 'path';
import { execSync } from 'child_process';
import micromatch from 'micromatch';

/**
 * Get the list of modified files compared to `origin/HEAD`.
 *
 * @param filter - The filter to apply ono the file output.
 *
 * @returns The filtered list of modified files, in a normalized format.
 */
export function getModifiedFiles(filter: string): string[] {
  return getFilesFromCommand('git diff --name-only origin/HEAD', filter);
}

/**
 * Get the list of untracked files (not added/committed in Git).
 *
 * @param filter - The filter to apply ono the file output.
 *
 * @returns The filtered list of untracked files, in a normalized format.
 */
export function getUntrackedFiles(filter: string): string[] {
  return getFilesFromCommand('git ls-files --others --exclude-standard', filter);
}

/**
 * Get files from the output of a command.
 *
 * @param command - The command that will output the list of files (each file path must be on its own line).
 * @param filter - The filter to apply ono the file output.
 *
 * @returns The filtered list of files, in a normalized format.
 */
function getFilesFromCommand(command: string, filter: string): string[] {
  return execSync(command)
    .toString()
    .replace('\r', '')
    .split('\n')
    .filter((filePath) => filePath.trim().length)
    .filter((filePath) => micromatch.isMatch(filePath, filter))
    .map((filePath) => path.normalize(filePath));
}
