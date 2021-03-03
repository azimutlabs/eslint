import type { Linter } from 'eslint';

export const eslintConfigImportDeclarations: Linter.BaseConfig = {
  rules: {
    // Report potentially ambiguous parse goal (script vs. module).
    'import/unambiguous': 'off',
    // Ensure named imports correspond to a named export in the remote file.
    'import/named': 'off',
  },
};
