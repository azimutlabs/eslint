const env = require('@azimutlabs/eslint-env');
const { indentSize, maxLineLength, endOfLine } = require('@azimutlabs/eslint-env/editorconfig');

module.exports = {
  ...env,
  extends: ['prettier', 'prettier/@typescript-eslint', 'prettier/react', 'prettier/vue'],
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
};
