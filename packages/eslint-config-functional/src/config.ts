import type { Linter } from 'eslint';

import { eslintConfigFunctionalBase } from './base';
import { eslintConfigFunctionalTypescript } from './typescript';

export const eslintConfigFunctional: Linter.BaseConfig = {
  extends: [require.resolve('@azimutlabs/eslint-config-env')],
  plugins: ['functional'],
  rules: eslintConfigFunctionalBase.rules,
  overrides: [
    {
      files: ['**/**.ts?(x)'],
      ...eslintConfigFunctionalTypescript,
    },
  ],
};
