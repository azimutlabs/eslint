import type { Linter } from 'eslint';

export const eslintConfigJest: Linter.BaseConfig = {
  extends: [require.resolve('@azimutlabs/eslint-config-env')],
  plugins: ['jest'],
  overrides: [
    {
      /**
       * Taken straight from the jest configuration doc:
       * @see https://jestjs.io/docs/en/configuration#testmatch-arraystring
       */
      files: ['**/__tests__/**/**.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      rules: {
        // Enforce lowercase test names.
        'jest/prefer-lowercase-title': 'off',
        // Disallow setup and teardown hooks.
        'jest/no-hooks': 'off',
        // Disallow large snapshots.
        'jest/no-large-snapshots': 'off',
        // Disallow specific matchers & modifiers.
        'jest/no-restricted-matchers': 'off',
        // Suggest using expect.assertions() OR expect.hasAssertions().
        'jest/prefer-expect-assertions': 'off',
        // Require a message for toThrow().
        'jest/require-to-throw-message': 'off',
        // Enforce having return statement when testing with promises.
        'jest/valid-expect-in-promise': 'off',
        // Ensure that there is at least one expect call made in a test.
        'jest/expect-expect': 'off',
        // Disallow disabled tests.
        'jest/no-disabled-tests': 'warn',
        // Disallow commented out tests.
        'jest/no-commented-out-tests': 'warn',
        // Disallow using expect outside of it or test blocks.
        'jest/no-standalone-expect': 'warn',
        // Disallow use of deprecated functions.
        'jest/no-deprecated-functions': 'warn',
        // Disallow alias methods.
        'jest/no-alias-methods': 'warn',
        // Prevent calling expect conditionally.
        'jest/no-conditional-expect': 'warn',
        // Avoid using a callback in asynchronous tests and hooks.
        'jest/no-done-callback': 'warn',
        // Disallow duplicate setup and teardown hooks.
        'jest/no-duplicate-hooks': 'warn',
        // Disallow using exports in files containing tests.
        'jest/no-export': 'warn',
        // Disallow focused tests.
        'jest/no-focused-tests': 'warn',
        // Disallow conditional logic.
        'jest/no-if': 'warn',
        // Disallow string interpolation inside snapshots.
        'jest/no-interpolation-in-snapshots': 'warn',
        // Disallow Jasmine globals.
        'jest/no-jasmine-globals': 'warn',
        // Disallow importing Jest
        'jest/no-jest-import': 'warn',
        // Disallow manually importing from __mocks__.
        'jest/no-mocks-import': 'warn',
        // Use .only and .skip over f and x.
        'jest/no-test-prefixes': 'warn',
        // Disallow explicitly returning from tests.
        'jest/no-test-return-statement': 'warn',
        // Suggest using toBeCalledWith() or toHaveBeenCalledWith().
        'jest/prefer-called-with': 'warn',
        // Suggest having hooks before any test cases.
        'jest/prefer-hooks-on-top': 'warn',
        // Suggest using jest.spyOn().
        'jest/prefer-spy-on': 'warn',
        // Suggest using toStrictEqual()
        'jest/prefer-strict-equal': 'warn',
        // Suggest using toContain().
        'jest/prefer-to-contain': 'warn',
        // Suggest using toHaveLength().
        'jest/prefer-to-have-length': 'warn',
        // Enforce valid describe() callback.
        'jest/valid-describe-callback': 'warn',
        // Enforce valid expect() usage.
        'jest/valid-expect': 'warn',
        // Enforce valid titles.
        'jest/valid-title': 'warn',
        // Suggest using test.todo.
        'jest/prefer-todo': 'warn',
        // Require test cases and hooks to be inside a describe block.
        'jest/require-top-level-describe': 'warn',
        // Have control over test and it usages.
        'jest/consistent-test-it': 'warn',
        // Disallow identical titles.
        'jest/no-identical-title': 'error',
      },
    },
  ],
};
