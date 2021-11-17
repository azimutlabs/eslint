import type { Linter } from 'eslint';

import { eslintConfigReactBase } from './base';
import { eslintConfigReactHooks } from './hooks';
import { eslintConfigReactJsx } from './jsx';

export const eslintConfigReact: Linter.BaseConfig = {
  extends: [require.resolve('@azimutlabs/eslint-config-env')],
  settings: {
    react: {
      version: '17',
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    ...eslintConfigReactBase.rules,
    ...eslintConfigReactHooks.rules,
  },
  overrides: [
    {
      files: ['**/**.[jt]sx'],
      ...eslintConfigReactJsx,
    },
  ],
};
