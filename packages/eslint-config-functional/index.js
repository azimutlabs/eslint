const env = require('@azimutlabs/eslint-env');

const configBase = require('./base');
const configTypescript = require('./typescript');

module.exports = {
  ...env,
  plugins: ['functional'],
  rules: {
    ...configBase.rules,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      ...configTypescript,
    },
  ],
};
