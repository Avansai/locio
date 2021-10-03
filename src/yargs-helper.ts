/**
 * Helper "check" function when using `yargs` to support "one of" required options.
 *
 * You can make this a mutually exclusive choice by using the `conflicts` API at the option level.
 *
 * @see https://github.com/yargs/yargs/issues/1093
 *
 * @param options A list of "one of" required options.
 *
 * @returns True when one of the options is used, otherwise returns a error message.
 */
export function demandOneOfOption(...options: string[]) {
  return function (argv: {}) {
    if (options.length <= 1) {
      console.trace(`runtime error: \`demandOneOfOption\` requires multiple options`);
      process.exit(1);
    }
    const count = options.filter((option) => Object.keys(argv).includes(option)).length;
    const lastOption = options.pop();

    if (count === 0) {
      throw new Error(
        `Exactly one of the arguments ${options.join(', ')} and ${lastOption} is required`
      );
    }

    return true;
  };
}
