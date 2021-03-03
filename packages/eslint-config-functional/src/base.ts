import type { Linter } from 'eslint';

export const eslintConfigFunctionalBase: Linter.BaseConfig = {
  rules: {
    // Prefer readonly types over mutable types.
    'functional/prefer-readonly-type': 'off',
    // Prefer property signatures with readonly modifiers over method signatures.
    'functional/no-method-signature': 'off',
    // Disallow classes.
    'functional/no-class': 'off',
    // Restrict types so that only members of the same kind of are allowed in them.
    'functional/no-mixed-type': 'off',
    // Disallow this access.
    'functional/no-this-expression': 'off',
    // Prefer type over interface.
    'functional/prefer-type-literal': 'off',
    // Disallow conditional statements.
    'functional/no-conditional-statement': 'off',
    // Using expressions to cause side-effects not allowed.
    'functional/no-expression-statement': 'off',
    // Disallow Returning Nothing.
    'functional/no-return-void': 'off',
    // Disallow Rejecting Promises.
    'functional/no-promise-reject': 'off',
    // Disallow mutating objects and arrays.
    'functional/immutable-data': [
      'warn',
      {
        assumeTypes: false,
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
    // Enforces using functions directly if they can be without wrapping them.
    'functional/prefer-tacit': 'warn',
    // Disallow mutable variables.
    'functional/no-let': 'error',
    // Disallow imperative loops.
    'functional/no-loop-statement': 'error',
    // Disallow throwing exceptions.
    'functional/no-throw-statement': 'error',
    // Disallow try-catch[-finally] and try-finally patterns.
    'functional/no-try-statement': 'error',
    // Enforce Functional Parameters.
    'functional/functional-parameters': [
      'error',
      {
        allowRestParameter: false,
        allowArgumentsKeyword: false,
        enforceParameterCount: false,
      },
    ],
  },
};
