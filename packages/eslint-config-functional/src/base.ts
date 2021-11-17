import type { Linter } from 'eslint';

export const eslintConfigFunctionalBase: Linter.BaseConfig = {
  rules: {
    // Prefer readonly types over mutable types.
    'functional/prefer-readonly-type': 'off',
    // Disallow classes.
    'functional/no-class': 'off',
    // Restrict types so that only members of the same kind of are allowed in them.
    'functional/no-mixed-type': 'off',
    // Disallow this access.
    'functional/no-this-expression': 'off',
    // Disallow conditional statements.
    'functional/no-conditional-statement': 'off',
    // Using expressions to cause side-effects not allowed.
    'functional/no-expression-statement': 'off',
    // Disallow Returning Nothing.
    'functional/no-return-void': 'off',
    // Disallow Rejecting Promises.
    'functional/no-promise-reject': 'off',
    // Disallow throwing exceptions.
    'functional/no-throw-statement': 'off',
    // Disallow try-catch[-finally] and try-finally patterns.
    'functional/no-try-statement': 'off',
    // Enforce Functional Parameters.
    'functional/functional-parameters': 'off',
    // Enforces using functions directly if they can be without wrapping them.
    'functional/prefer-tacit': 'off',
    // Disallow mutating objects and arrays.
    'functional/immutable-data': [
      'error',
      {
        assumeTypes: false,
        ignoreClass: 'fieldsOnly',
        ignoreImmediateMutation: true,
        ignoreAccessorPattern: [
          // Next.js page properties.
          '*.getInitialProps',
          // React component properties.
          '*.defaultProps',
          '*.propTypes',
          '*.displayName',
          // Node.js module resolution.
          'module.exports',
          'exports',
        ],
      },
    ],
    // Disallow mutable variables.
    'functional/no-let': 'error',
    // Disallow imperative loops.
    'functional/no-loop-statement': 'error',
    // Prefer property signatures with readonly modifiers over method signatures.
    'functional/no-method-signature': 'error',
  },
};
