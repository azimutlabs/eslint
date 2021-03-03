import { eslintEnvConfig } from '@azimutlabs/eslint-env';
import type { Linter } from 'eslint';

import { eslintConfigFunctionalBase } from './base';
import { eslintConfigFunctionalTypescript } from './typescript';

export const eslintConfigFunctional: Linter.BaseConfig = {
  ...eslintEnvConfig,
  plugins: ['functional'],
  rules: eslintConfigFunctionalBase.rules,
  overrides: [
    {
      files: ['**/**.ts?(x)'],
      ...eslintConfigFunctionalTypescript,
    },
  ],
};
