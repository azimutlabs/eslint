const env = require('@azimutlabs/eslint-env');
const { indentSize, maxLineLength, endOfLine } = require('@azimutlabs/eslint-env/editorconfig');
const patterns = require('@azimutlabs/eslint-env/patterns');

module.exports = {
  ...env,
  extends: [
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/vue'),
    require.resolve('eslint-config-prettier/react'),
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine,
        tabWidth: indentSize,
        printWidth: maxLineLength,
        quoteProps: 'consistent',
        singleQuote: true,
      },
    ],
  },
  overrides: [
    {
      files: [patterns.typescript],
      extends: ['prettier/@typescript-eslint'],
    },
  ],
};
