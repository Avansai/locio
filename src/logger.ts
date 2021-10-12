import chalk from 'chalk';

/**
 * Display a message on the console.
 *
 * @param message - The message to log to the console.
 * @param exitAfter - Exit the application after logging the message.
 */
export function log(message: string, exitAfter = false): void {
  console.log();
  console.log(`${message}`);
  if (exitAfter) {
    process.exit(0);
  }
}

/**
 * Display an information message on the console.
 *
 * @param message - The message to log to the console.
 * @param exitAfter - Exit the application after logging the message.
 */
export function info(message: string, exitAfter = false): void {
  log(`${chalk.cyan('info')} - ${message}`, exitAfter);
}

/**
 * Display a warning message on the console.
 *
 * @param message - The message to log to the console.
 * @param exitAfter - Exit the application after logging the message.
 */
export function warn(message: string, exitAfter = false): void {
  log(`${chalk.yellow('warn')} - ${message}`, exitAfter);
}
