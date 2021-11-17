import type { Linter } from 'eslint';

export const eslintConfigFunctionalStrict: Linter.BaseConfig = {
  rules: {
    // Enforces using functions directly if they can be without wrapping them.
    'functional/prefer-tacit': 'warn',
    // Disallow conditional statements.
    'functional/no-conditional-statement': [
      'error',
      {
        allowReturningBranches: true,
      },
    ],
    // Disallow classes.
    'functional/no-class': 'error',
    // Disallow Rejecting Promises.
    'functional/no-promise-reject': 'error',
    // Disallow throwing exceptions.
    'functional/no-throw-statement': 'error',
    // Disallow try-catch[-finally] and try-finally patterns.
    'functional/no-try-statement': 'error',
  },
};
