const env = require('@azimutlabs/eslint-env');
const patterns = require('@azimutlabs/eslint-env/patterns');

const configBase = require('./base');
const configDeclarations = require('./declarations');

module.exports = {
  ...env,
  // Enable `@typescript-eslint` only for `*.ts?(x)` files.
  overrides: [
    {
      files: [patterns.typescript],
      ...configBase,
    },
    {
      files: [patterns.typescriptDeclarations],
      ...configDeclarations,
    },
  ],
};
