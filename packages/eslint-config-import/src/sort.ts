import type { Linter } from 'eslint';

export const eslintConfigImportSort: Linter.BaseConfig = {
  rules: {
    'sort-imports': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
};
