const env = require('@azimutlabs/eslint-env');

const configBase = require('./base');
const configDeclarations= require('./declarations');

module.exports = {
  ...env,
  // Enable `@typescript-eslint` only for `*.ts?(x)` files.
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      ...configBase,
    },
    {
      files: ['**/*.d.ts?(x)'],
      ...configDeclarations,
    },
  ],
};
