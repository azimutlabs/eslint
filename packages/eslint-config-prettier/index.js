const env = require('@azimutlabs/eslint-env');
const { indentSize, maxLineLength, endOfLine } = require('@azimutlabs/eslint-env/editorconfig');

module.exports = {
  ...env,
  extends: ['prettier', 'prettier/react', 'prettier/vue'],
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
