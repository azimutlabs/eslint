const env = require('@azimutlabs/eslint-env');
const extensions = require('@azimutlabs/eslint-env/extensions');
const patterns = require('@azimutlabs/eslint-env/patterns');

const configImport = require('./import');
const configSort = require('./sort');
const configTypescript = require('./typescript');
const configDeclarations = require('./declarations');

module.exports = {
  ...env,
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: [extensions.js, extensions.jsx],
      },
    },
  },
  plugins: ['import', 'simple-import-sort'],
  rules: {
    ...configImport.rules,
    ...configSort.rules,
  },
  overrides: [
    {
      files: [patterns.typescript],
      ...configTypescript,
    },
    {
      files: [patterns.typescriptDeclarations],
      ...configDeclarations,
    },
  ],
};
