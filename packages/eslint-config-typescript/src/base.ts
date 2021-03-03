import { eslintEnvEditorconfig } from '@azimutlabs/eslint-env';
import type { Linter } from 'eslint';

export const eslintConfigTypescriptBase: Linter.BaseConfig = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: ['**/tsconfig.json', '**/tsconfig.*.json'],
  },
  rules: {
    // Bans // tslint:<rule-flag> comments from being used.
    '@typescript-eslint/ban-tslint-comment': 'off',
    // Forbids the use of classes as namespaces.
    '@typescript-eslint/no-extraneous-class': 'off',
    // Disallow the use of parameter properties in class constructors.
    '@typescript-eslint/no-parameter-properties': 'off',
    // Prefers a non-null assertion over explicit type cast when possible.
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    // Restricts the types allowed in boolean expressions.
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // Requires type annotations to exist.
    '@typescript-eslint/typedef': 'off',
    // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs.
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    // Disallow the use of type aliases.
    '@typescript-eslint/no-type-alias': 'off',
    // Enforce template literal expressions to be of string type.
    '@typescript-eslint/restrict-template-expressions': 'off',
    // Disallows assigning any to variables and properties.
    '@typescript-eslint/no-unsafe-assignment': 'off',
    // Disallows calling an any type value.
    '@typescript-eslint/no-unsafe-call': 'off',
    // Disallows member access on any typed variables.
    '@typescript-eslint/no-unsafe-member-access': 'off',
    // Disallows returning any from a function.
    '@typescript-eslint/no-unsafe-return': 'off',
    // Require that member overloads be consecutive.
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    // Requires using either T[] or Array<T> for arrays.
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array-simple',
      },
    ],
    // Bans @ts-<directive> comments from being used or requires descriptions after directive.
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        'minimumDescriptionLength': 5,
      },
    ],
    // Enforces consistent usage of type assertions.
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    // Require explicit return types on functions and class methods.
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    // Require explicit return and argument types on exported functions' and classes' public class methods.
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    // Require a specific member delimiter style for interfaces and type literals.
    '@typescript-eslint/member-delimiter-style': 'warn',
    // Require a consistent member declaration order.
    '@typescript-eslint/member-ordering': 'warn',
    // Requires that .toString() is only called on objects which provide useful information when stringified.
    '@typescript-eslint/no-base-to-string': 'warn',
    // Disallow non-null assertion in locations that may be confusing.
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    // Requires expressions of type void to appear in statement position.
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    // Disallow the declaration of empty interfaces.
    '@typescript-eslint/no-empty-interface': [
      'warn',
      {
        allowSingleExtends: true,
      },
    ],
    // Disallow usage of the any type.
    '@typescript-eslint/no-explicit-any': 'warn',
    // Disallow extra non-null assertion.
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
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
    // Disallow usage of the implicit any type in catch clauses.
    '@typescript-eslint/no-implicit-any-catch': 'warn',
    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    '@typescript-eslint/no-inferrable-types': 'warn',
    // Disallows usage of void type outside of generic or return types.
    '@typescript-eslint/no-invalid-void-type': 'warn',
    // Disallows non-null assertions using the ! postfix operator.
    '@typescript-eslint/no-non-null-assertion': 'warn',
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
    // Disallows unnecessary constraints on generic types.
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    // Prefer usage of as const over literal type.
    '@typescript-eslint/prefer-as-const': 'warn',
    // Prefer initializing each enums member value.
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    // Enforce includes method over indexOf method.
    '@typescript-eslint/prefer-includes': 'warn',
    // Require that all enum members be literal values to prevent unintended enum member name shadow issues.
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    // Prefer using type parameter when calling Array#reduce instead of casting.
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings.
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    // Recommends using @ts-expect-error over @ts-ignore.
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    // Requires any function or method that returns a Promise to be marked async.
    '@typescript-eslint/promise-function-async': 'warn',
    // Requires Array#sort calls to always provide a compareFunction.
    '@typescript-eslint/require-array-sort-compare': 'warn',
    // When adding two variables, operands must both be of type number or of type string.
    '@typescript-eslint/restrict-plus-operands': 'warn',
    // Enforces that members of a type union/intersection are sorted alphabetically.
    '@typescript-eslint/sort-type-union-intersection-members': 'warn',
    // Exhaustiveness checking in switch with union type.
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    // Require consistent spacing around type annotations.
    '@typescript-eslint/type-annotation-spacing': 'warn',
    // Enforces unbound methods are called with their expected scope.
    '@typescript-eslint/unbound-method': 'warn',
    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
    '@typescript-eslint/unified-signatures': 'warn',
    // Enforce consistent brace style for blocks.
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'warn',
    // Require or disallow trailing comma.
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
    // Enforces consistent spacing before and after commas.
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'warn',
    // Enforce default parameters to be last.
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'warn',
    // Enforce dot notation whenever possible.
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'warn',
    // Require or disallow spacing between function identifiers and their invocations.
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'warn',
    // Enforce consistent indentation.
    'indent': 'off',
    '@typescript-eslint/indent': ['warn', eslintEnvEditorconfig.indent_size],
    // Enforce consistent spacing before and after keywords.
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'warn',
    // Require or disallow an empty line between class members.
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'warn',
    // Disallow generic Array constructors.
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'warn',
    // Disallow empty functions.
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    // Disallow unnecessary parentheses.
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': 'warn',
    // Disallow unnecessary semicolons.
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'warn',
    // Disallow literal numbers that lose precision.
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'warn',
    // Disallow magic numbers.
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'warn',
      {
        ignoreEnums: true,
        ignore: [0, 1],
      },
    ],
    // Disallow variable declarations from shadowing variables declared in the outer scope.
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    // Disallow unused expressions.
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',
    // Disallow unused variables.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    // Disallow unnecessary constructors.
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'warn',
    // Enforce consistent spacing inside braces.
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    // Enforce the consistent use of either backticks, double, or single quotes.
    'quotes': 'off',
    '@typescript-eslint/quotes': ['warn', 'single'],
    // Disallow async functions which have no await expression.
    'require-await': 'off',
    '@typescript-eslint/require-await': 'warn',
    // Enforces consistent returning of awaited values.
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'warn',
    // Require or disallow semicolons instead of ASI.
    'semi': 'off',
    '@typescript-eslint/semi': 'warn',
    // Enforces consistent spacing before function parenthesis.
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'warn',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],
    // This rule is aimed at ensuring there are spaces around infix operators.
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'warn',
    // Enforces naming conventions for everything across a codebase.
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
    // Use function types instead of interfaces with call signatures.
    '@typescript-eslint/prefer-function-type': 'error',
    // Disallows awaiting a value that is not a Thenable.
    '@typescript-eslint/await-thenable': 'error',
    // Bans specific types from being used.
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
      },
    ],
    // Ensures that literals on classes are exposed in a consistent style.
    '@typescript-eslint/class-literal-property-style': 'error',
    // Enforce or disallow the use of the record type.
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    // Consistent with type definition either interface or type.
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    // Enforces consistent usage of type imports.
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
      },
    ],
    // Require explicit accessibility modifiers on class properties and methods.
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
      },
    ],
    // Enforces using a particular method signature syntax.
    '@typescript-eslint/method-signature-style': 'error',
    // Disallow the delete operator with computed key expressions.
    '@typescript-eslint/no-dynamic-delete': 'error',
    // Disallow iterating over an array with a for-in loop.
    '@typescript-eslint/no-for-in-array': 'error',
    // Enforce valid definition of new and constructor.
    '@typescript-eslint/no-misused-new': 'error',
    // Avoid using promises in places not designed to handle them.
    '@typescript-eslint/no-misused-promises': 'error',
    // Disallow the use of custom TypeScript modules and namespaces.
    '@typescript-eslint/no-namespace': 'error',
    // Disallows using a non-null assertion after an optional chain expression.
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    // Disallows invocation of require().
    '@typescript-eslint/no-require-imports': 'error',
    // Disallow aliasing this.
    '@typescript-eslint/no-this-alias': 'error',
    // Disallows the use of require statements except in import statements.
    '@typescript-eslint/no-var-requires': 'error',
    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
    '@typescript-eslint/prefer-for-of': 'error',
    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules.
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    // Enforce the usage of the nullish coalescing operator instead of logical chaining.
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    // Prefer using concise optional chain expressions instead of chained logical ands.
    '@typescript-eslint/prefer-optional-chain': 'error',
    // Requires that private members are marked as readonly if they're never modified outside of the constructor.
    '@typescript-eslint/prefer-readonly': 'error',
    // Sets preference level for triple slash directives versus ES6-style import declarations.
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'never',
        types: 'never',
        lib: 'never',
      },
    ],
    // Require or disallow initialization in variable declarations.
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'error',
    // Disallow duplicate class members.
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    // Disallow duplicate imports.
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',
    // Disallow the use of eval()-like methods.
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    // Disallow this keywords outside of classes or class-like objects.
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    // Disallow function declarations that contain unsafe references inside loop statements.
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',
    // Disallow variable redeclaration.
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    // Disallow throwing literals as exceptions.
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',
    // Disallow the use of variables before they are defined.
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
  },
};
