const env = require('@azimutlabs/eslint-env');
const patterns = require('@azimutlabs/eslint-env/patterns');

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
      files: [patterns.typescript],
      ...configTypescript,
    },
  ],
};
