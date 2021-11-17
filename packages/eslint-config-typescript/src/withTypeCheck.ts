import type { Linter } from 'eslint';

export const eslintConfigTypescriptWithTypeCheck: Linter.BaseConfig = {
  parserOptions: {
    project: ['**/tsconfig.json', '**/tsconfig.*.json'],
  },
  rules: {
    // Enforce that this is used when only this type is returned.
    '@typescript-eslint/prefer-return-this-type': 'warn',
    // Disallow the void operator except when used to discard a value.
    '@typescript-eslint/no-meaningless-void-operator': 'warn',
    // Requires that .toString() is only called on objects which provide useful information when stringified.
    '@typescript-eslint/no-base-to-string': 'warn',
    // Requires expressions of type void to appear in statement position.
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    // Requires Promise-like values to be handled appropriately.
    '@typescript-eslint/no-floating-promises': [
      'warn',
      {
        ignoreVoid: true,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        ignoreIIFE: true,
      },
    ],
    // Enforce that RegExp#exec is used instead of String#match if no global flag is provided.
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    // Flags unnecessary equality comparisons against boolean literals.
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    // Prevents conditionals where the type is always truthy or always falsy.
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    // Warns when a namespace qualifier is unnecessary.
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    // Enforces that type arguments will not be used if not required.
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    // Warns if a type assertion does not change the type of an expression.
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    // Enforce includes method over indexOf method.
    '@typescript-eslint/prefer-includes': 'warn',
    // Prefer using type parameter when calling Array#reduce instead of casting.
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings.
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    // Requires any function or method that returns a Promise to be marked async.
    '@typescript-eslint/promise-function-async': 'warn',
    // Requires Array#sort calls to always provide a compareFunction.
    '@typescript-eslint/require-array-sort-compare': 'warn',
    // When adding two variables, operands must both be of type number or of type string.
    '@typescript-eslint/restrict-plus-operands': 'warn',
    // Exhaustiveness checking in switch with union type.
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    // Enforces unbound methods are called with their expected scope.
    '@typescript-eslint/unbound-method': 'warn',
    // Enforce dot notation whenever possible.
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'warn',
    // Disallow async functions which have no await expression.
    'require-await': 'off',
    '@typescript-eslint/require-await': 'warn',
    // Enforces consistent returning of awaited values.
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'warn',
    // Enforces naming conventions for everything across a codebase.
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['strictCamelCase'],
      },
      {
        selector: 'parameter',
        modifiers: ['unused'],
        format: ['strictCamelCase'],
        leadingUnderscore: 'require',
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['StrictPascalCase'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      /**
       * For React components.
       * @example
       * export const Button: FC<ButtonProps> = () => {...}
       * ...or
       * export function Button(props: RaisedButtonProps): ReactNode;
       * export function Button(props: FlatButtonProps): ReactNode;
       * export function Button(props: RaisedButtonProps | FlatButtonProps): ReactNode {
       *   ...
       * }
       */
      {
        selector: 'function',
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      /**
       * Disable formatting for fields that require quotes.
       * @example 'Accept-Language'
       */
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        format: null,
        modifiers: ['requiresQuotes'],
      },
    ],
    // Enforces consistent usage of type exports.
    '@typescript-eslint/consistent-type-exports': 'error',
    // Disallows awaiting a value that is not a Thenable.
    '@typescript-eslint/await-thenable': 'error',
    // Disallow iterating over an array with a for-in loop.
    '@typescript-eslint/no-for-in-array': 'error',
    // Avoid using promises in places not designed to handle them.
    '@typescript-eslint/no-misused-promises': 'error',
    // Enforce the usage of the nullish coalescing operator instead of logical chaining.
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    // Requires that private members are marked as readonly if they're never modified outside of the constructor.
    '@typescript-eslint/prefer-readonly': 'error',
    // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs.
    '@typescript-eslint/prefer-readonly-parameter-types': 'error',
    // Disallow the use of eval()-like methods.
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    // Disallow throwing literals as exceptions.
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
  },
};
