const env = require('@azimutlabs/eslint-env');

const configImport = require('./import');
const configSort = require('./sort');
const configTypescript = require('./typescript');
const configDeclarations = require('./declarations');

module.exports = {
  ...env,
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx'],
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
      files: ['**/*.ts?(x)'],
      ...configTypescript,
    },
    {
      files: ['**/*.d.ts?(x)'],
      ...configDeclarations,
    },
  ],
};
