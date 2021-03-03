import type { Linter } from 'eslint';

export const eslintConfigFunctionalTypescript: Linter.BaseConfig = {
  rules: {
    // Disallow mutating objects and arrays.
    'functional/immutable-data': [
      'warn',
      {
        assumeTypes: true,
        ignoreAccessorPattern: [
          '*.defaultProps',
          '*.propTypes',
          '*.displayName',
          'module.exports',
          'exports',
        ],
      },
    ],
    // Enforces using functions directly if they can be without wrapping them.
    'functional/prefer-tacit': [
      'warn',
      {
        assumeTypes: {
          allowFixer: true,
        },
      },
    ],
    // Prefer readonly types over mutable types.
    'functional/prefer-readonly-type': 'warn',
    // Prefer property signatures with readonly modifiers over method signatures.
    'functional/no-method-signature': 'warn',
    // Prefer type over interface.
    'functional/prefer-type-literal': 'error',
  },
};
