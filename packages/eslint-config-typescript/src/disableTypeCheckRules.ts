import type { Linter } from 'eslint';

export const disableTypeCheckRules: Linter.BaseConfig = {
  rules: {
    // Disallows awaiting a value that is not a Thenable.
    '@typescript-eslint/await-thenable': 'off',
    // Enforces consistent usage of type exports.
    '@typescript-eslint/consistent-type-exports': 'off',
    // Enforces naming conventions for everything across a codebase.
    '@typescript-eslint/naming-convention': 'off',
    // Requires that .toString() is only called on objects which provide useful information when stringified.
    '@typescript-eslint/no-base-to-string': 'off',
    // Requires expressions of type void to appear in statement position.
    '@typescript-eslint/no-confusing-void-expression': 'off',
    // Requires Promise-like values to be handled appropriately.
    '@typescript-eslint/no-floating-promises': 'off',
    // Disallow the void operator except when used to discard a value.
    '@typescript-eslint/no-meaningless-void-operator': 'off',
    // Avoid using promises in places not designed to handle them.
    '@typescript-eslint/no-misused-promises': 'off',
    // Enforce that RegExp#exec is used instead of String#match if no global flag is provided.
    '@typescript-eslint/prefer-regexp-exec': 'off',
    // Flags unnecessary equality comparisons against boolean literals.
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    // Prevents conditionals where the type is always truthy or always falsy.
    '@typescript-eslint/no-unnecessary-condition': 'off',
    // Warns when a namespace qualifier is unnecessary.
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    // Enforces that type arguments will not be used if not required.
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    // Warns if a type assertion does not change the type of an expression.
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    // Disallows calling a function with an any type value.
    '@typescript-eslint/no-unsafe-argument': 'off',
    // Disallows assigning any to variables and properties.
    '@typescript-eslint/no-unsafe-assignment': 'off',
    // Disallows calling an any type value.
    '@typescript-eslint/no-unsafe-call': 'off',
    // Disallows member access on any typed variables.
    '@typescript-eslint/no-unsafe-member-access': 'off',
    // Disallows returning any from a function.
    '@typescript-eslint/no-unsafe-return': 'off',
    // Prefers a non-null assertion over explicit type cast when possible.
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    // Enforce includes method over indexOf method.
    '@typescript-eslint/prefer-includes': 'off',
    // Prefer using type parameter when calling Array#reduce instead of casting.
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings.
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    // Enforce that this is used when only this type is returned.
    '@typescript-eslint/prefer-return-this-type': 'off',
    // Requires any function or method that returns a Promise to be marked async.
    '@typescript-eslint/promise-function-async': 'off',
    // Requires Array#sort calls to always provide a compareFunction.
    '@typescript-eslint/require-array-sort-compare': 'off',
    // When adding two variables, operands must both be of type number or of type string.
    '@typescript-eslint/restrict-plus-operands': 'off',
    // Exhaustiveness checking in switch with union type.
    '@typescript-eslint/switch-exhaustiveness-check': 'off',
    // Enforces unbound methods are called with their expected scope.
    '@typescript-eslint/unbound-method': 'off',
    // Enforce dot notation whenever possible.
    '@typescript-eslint/dot-notation': 'off',
    // Disallow async functions which have no await expression.
    '@typescript-eslint/require-await': 'off',
    // Enforces consistent returning of awaited values.
    '@typescript-eslint/return-await': 'off',
    // Disallow iterating over an array with a for-in loop.
    '@typescript-eslint/no-for-in-array': 'off',
    // Enforce the usage of the nullish coalescing operator instead of logical chaining.
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    // Requires that private members are marked as readonly if they're never modified outside of the constructor.
    '@typescript-eslint/prefer-readonly': 'off',
    // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs.
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    // Disallow the use of eval()-like methods.
    '@typescript-eslint/no-implied-eval': 'off',
    // Enforce template literal expressions to be of string type.
    '@typescript-eslint/restrict-template-expressions': 'off',
    // Restricts the types allowed in boolean expressions.
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // Disallow throwing literals as exceptions.
    '@typescript-eslint/no-throw-literal': 'off',
  },
};
