const env = require('@azimutlabs/eslint-env');
const { indentSize, maxLineLength, endOfLine } = require('@azimutlabs/eslint-env/editorconfig');

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
      files: ['**/*.ts?(x)'],
      extends: ['prettier/@typescript-eslint'],
    },
  ],
};
