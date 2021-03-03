import { eslintEnvConfig, eslintEnvEditorconfig } from '@azimutlabs/eslint-env';
import type { Linter } from 'eslint';

export const eslintConfigPrettier: Linter.BaseConfig = {
  ...eslintEnvConfig,
  extends: [require.resolve('eslint-config-prettier')],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        quoteProps: 'consistent',
        endOfLine: eslintEnvEditorconfig.end_of_line,
        tabWidth: eslintEnvEditorconfig.indent_size,
        printWidth: eslintEnvEditorconfig.max_line_length,
      },
    ],
  },
};
