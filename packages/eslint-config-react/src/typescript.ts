import type { Linter } from 'eslint';

export const eslintConfigReactTypescript: Linter.BaseConfig = {
  rules: {
    // TypeScript already will take care of it.
    'react/prop-types': 'off',
  },
};
