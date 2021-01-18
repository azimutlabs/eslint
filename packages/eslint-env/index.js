module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  overrides: [
    // Set `env.jest` to `true` for possible test files.
    {
      /**
       * Taken straight from the jest configuration doc:
       * @see https://jestjs.io/docs/en/configuration#testmatch-arraystring
       */
      files: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
