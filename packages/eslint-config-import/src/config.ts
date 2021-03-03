import { eslintEnvConfig, EslintEnvExtensions } from '@azimutlabs/eslint-env';
import type { Linter } from 'eslint';

import { eslintConfigImportBase } from './base';
import { eslintConfigImportDeclarations } from './declarations';
import { eslintConfigImportSort } from './sort';
import { eslintConfigImportTypescript } from './typescript';

export const eslintConfigImport: Linter.BaseConfig = {
  ...eslintEnvConfig,
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: [EslintEnvExtensions.Js, EslintEnvExtensions.Jsx],
      },
    },
  },
  plugins: ['import', 'simple-import-sort'],
  rules: {
    ...eslintConfigImportBase.rules,
    ...eslintConfigImportSort.rules,
  },
  overrides: [
    {
      files: ['**/**.ts?(x)'],
      ...eslintConfigImportTypescript,
    },
    {
      files: ['**/**.d.ts?(x)'],
      ...eslintConfigImportDeclarations,
    },
  ],
};
