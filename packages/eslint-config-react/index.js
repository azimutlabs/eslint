const env = require('@azimutlabs/eslint-env');

const configBase = require('./base');
const configHooks = require('./hooks');

module.exports = {
  ...env,
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    ...configBase.rules,
    ...configHooks.rules,
  },
};
