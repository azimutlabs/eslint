const env = require('@azimutlabs/eslint-env');

const configImport = require('./import');
const configSort = require('./sort');
const configTypescript = require('./typescript');

module.exports = {
  ...env,
  settings: {
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
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
  ],
};
