const extensions = require('@azimutlabs/eslint-env/extensions');

module.exports = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [
        extensions.ts,
        extensions.tsx,
        extensions.toDeclaration(extensions.ts),
        extensions.toDeclaration(extensions.tsx),
      ],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-typescript')]: {
        project: ['**/tsconfig.json', '**/tsconfig.*.json'],
      },
    },
  },
  rules: {
    // Report potentially ambiguous parse goal (script vs. module).
    'import/no-commonjs': 'warn',
    'import/unambiguous': 'warn',
    // Ensure named imports correspond to a named export in the remote file.
    'import/named': 'off',
  },
};
