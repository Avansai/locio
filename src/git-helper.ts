import path from 'path';
import { execSync } from 'child_process';
import micromatch from 'micromatch';
import glob from 'glob';

/**
 * Get the list of modified files compared to `origin/HEAD`.
 *
 * @param filter - The filter to apply on the file output.
 *
 * @returns The filtered list of modified files, in a normalized format.
 */
export function getModifiedFiles(filter: string): string[] {
  return getFilesFromCommand('git diff --name-only origin/HEAD', filter);
}

/**
 * Get the list of untracked files (not added/committed in Git).
 *
 * @param filter - The filter to apply on the file output.
 *
 * @returns The filtered list of untracked files, in a normalized format.
 */
export function getUntrackedFiles(filter: string): string[] {
  return getFilesFromCommand('git ls-files --others --exclude-standard', filter);
}

/**
 * Get the list of all files matching a given filter, regardless of their GitHub states.
 *
 * @param filter - The file filter used for the match.
 *
 * @returns The list of matching files, in a normalized format.
 */
export function getMatchingFiles(filter: string): string[] {
  return glob.sync(filter).map((filePath) => path.normalize(filePath));
}

/**
 * Get files from the output of a command.
 *
 * @param command - The command that will output the list of files (each file path must be on its own line).
 * @param filter - The filter to apply on the file output.
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

/**
 * Is a given pathname ignored by GitHub?
 *
 * @param pathname - The pathname to verify.
 *
 * @returns True when ignored by GitHub, otherwise false.
 */
export function isGitIgnored(pathname: string): boolean {
  try {
    // "git check-ignore" returns an error status when the pathname is not ignored.
    return !!execSync(`git check-ignore ${pathname}`).toString().trim().length;
  } catch (error) {
    // Silently ignores error - this is useful is the file checked is outside the current repository, to avoid fatal errors.
  }
  return false;
}
