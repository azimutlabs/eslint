const env = require('@azimutlabs/eslint-env');

const configBase = require('./base');
const configHooks = require('./hooks');

module.exports = {
  ...env,
  settings: {
    ...(env.settings || {}),
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ...env.parserOptions,
    ecmaFeatures: {
      ...(env.parserOptions.ecmaFeatures || {}),
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    ...configBase.rules,
    ...configHooks.rules,
  },
};
