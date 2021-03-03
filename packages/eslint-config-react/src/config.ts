import { eslintEnvConfig } from '@azimutlabs/eslint-env';
import type { Linter } from 'eslint';

import { eslintConfigReactBase } from './base';
import { eslintConfigReactHooks } from './hooks';

export const eslintConfigReact: Linter.BaseConfig = {
  ...eslintEnvConfig,
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    ...eslintConfigReactBase.rules,
    ...eslintConfigReactHooks.rules,
  },
};
