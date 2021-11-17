import type { Linter } from 'eslint';

export const eslintConfigFunctionalTypescript: Linter.BaseConfig = {
  rules: {
    // Prefer readonly types over mutable types.
    'functional/prefer-readonly-type': [
      'error',
      {
        allowLocalMutation: false,
        allowMutableReturnType: false,
        ignoreClass: 'fieldsOnly',
        ignoreInterface: false,
        ignoreCollections: true,
        /**
         * Don't turn on because:
         * > Checking implicit types is more expensive (slow).
         */
        checkImplicit: false,
      },
    ],
  },
};
