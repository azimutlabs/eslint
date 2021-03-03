import { EslintEnvExtensions } from '@azimutlabs/eslint-env';
import type { Linter } from 'eslint';

export const eslintConfigImportTypescript: Linter.BaseConfig = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [
        EslintEnvExtensions.Ts,
        EslintEnvExtensions.Tsx,
        EslintEnvExtensions.TsD,
        EslintEnvExtensions.TsxD,
      ],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-typescript')]: {
        project: ['**/tsconfig.json', '**/tsconfig.*.json'],
      },
    },
  },
  rules: {
    // Report potentially ambiguous parse goal (script vs. module).
    'import/no-commonjs': 'warn',
    'import/unambiguous': 'warn',
    // Ensure named imports correspond to a named export in the remote file.
    'import/named': 'off',
  },
};
