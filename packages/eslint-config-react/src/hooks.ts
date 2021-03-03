import type { Linter } from 'eslint';

export const eslintConfigReactHooks: Linter.BaseConfig = {
  rules: {
    // Checks effect dependencies.
    'react-hooks/exhaustive-deps': 'warn',
    // Checks rules of Hooks.
    'react-hooks/rules-of-hooks': 'error',
  },
};
