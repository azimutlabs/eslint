import { eslintEnvConfig } from '@azimutlabs/eslint-env';
import type { Linter } from 'eslint';

import { eslintConfigTypescriptBase } from './base';
import { eslintConfigTypescriptDeclarations } from './declarations';

export const eslintConfigTypescript: Linter.BaseConfig = {
  ...eslintEnvConfig,
  // Enable `@typescript-eslint` only for `*.ts?(x)` files.
  overrides: [
    {
      files: ['**/**.ts?(x)'],
      ...eslintConfigTypescriptBase,
    },
    {
      files: ['**/**.d.ts?(x)'],
      ...eslintConfigTypescriptDeclarations,
    },
  ],
};
