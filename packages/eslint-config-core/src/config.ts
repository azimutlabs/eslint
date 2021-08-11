import { eslintEnvEditorconfig } from '@azimutlabs/eslint-env';
import type { Linter } from 'eslint';

export const eslintConfigCore: Linter.BaseConfig = {
  extends: [require.resolve('@azimutlabs/eslint-config-env')],
  rules: {
    // Enforces getter/setter pairs in objects and classes.
    'accessor-pairs': 'off',
    // Limit Cyclomatic Complexity.
    'complexity': 'off',
    // Require Guarding for-in.
    'guard-for-in': 'off',
    // Disallow Warning Comments.
    'no-warning-comments': 'off',
    // Require Variable Declarations to be at the top of their scope.
    'vars-on-top': 'off',
    // Disallow specific global variables.
    'no-restricted-globals': 'off',
    // Require Consistent This.
    'consistent-this': 'off',
    // Require function names to match the name of the variable or property to which they are assigned.
    'func-name-matching': 'off',
    // Enforce a maximum file length.
    'max-lines': 'off',
    // Enforce a maximum function length.
    'max-lines-per-function': 'off',
    // Enforce a maximum number of statements allowed in function blocks.
    'max-statements': 'off',
    // Disallow bitwise operators.
    'no-bitwise': 'off',
    // Disallow ternary operators.
    'no-ternary': 'off',
    // Disallow trailing whitespace at the end of lines.
    'no-trailing-spaces': 'off',
    // Require or disallow padding lines between statements.
    'padding-line-between-statements': 'off',
    // Disallow specified names in exports.
    'no-restricted-exports': 'off',
    // Disallow specific imports.
    'no-restricted-imports': 'off',
    // Require object keys to be sorted.
    'sort-keys': 'off',
    // Enforce "for" loop update clause moving the counter in the right direction.
    'for-direction': 'warn',
    // Enforces that a return statement is present in property getters.
    'getter-return': 'warn',
    // Disallow using an async function as a Promise executor.
    'no-async-promise-executor': 'warn',
    // Disallow await inside of loops.
    'no-await-in-loop': 'warn',
    // Disallow the use of console.
    'no-console': 'warn',
    // Disallow constant expressions in conditions.
    'no-constant-condition': 'warn',
    // Disallow control characters in regular expressions.
    'no-control-regex': 'warn',
    // Disallow the use of debugger.
    'no-debugger': 'warn',
    // Disallow empty block statements.
    'no-empty': 'warn',
    // Disallow empty character classes in regular expressions.
    'no-empty-character-class': 'warn',
    // Disallow invalid regular expression strings in RegExp constructors.
    'no-invalid-regexp': 'warn',
    // Disallow Number Literals That Lose Precision.
    'no-loss-of-precision': 'warn',
    // Disallow returning values from setters.
    'no-setter-return': 'warn',
    // Disallow template literal placeholder syntax in regular strings.
    'no-template-curly-in-string': 'warn',
    // Disallow confusing multiline expressions.
    'no-unexpected-multiline': 'warn',
    // Disallow unreachable code after return, throw, continue, and break statements.
    'no-unreachable': 'warn',
    // Disallow loops with a body that allows only one iteration.
    'no-unreachable-loop': 'warn',
    // Disallow useless backreferences in regular expressions.
    'no-useless-backreference': 'warn',
    // Enforces return statements in callbacks of array's methods.
    'array-callback-return': 'warn',
    // Enforce that class methods utilize this.
    'class-methods-use-this': 'warn',
    // Require return statements to either always or never specify values.
    'consistent-return': 'warn',
    // Require Default Case in Switch Statements.
    'default-case': 'warn',
    // Enforce default clauses in switch statements to be last.
    'default-case-last': 'warn',
    // Enforce default parameters to be last.
    'default-param-last': 'warn',
    // Disallow unnecessary boolean casts.
    'no-extra-boolean-cast': 'warn',
    // Disallow unnecessary parentheses.
    'no-extra-parens': 'warn',
    // Disallow unnecessary semicolons.
    'no-extra-semi': 'warn',
    // Disallow multiple spaces in regular expression literals.
    'no-regex-spaces': 'warn',
    // Require Following Curly Brace Conventions.
    'curly': ['warn', 'multi-or-nest', 'consistent'],
    // Enforce newline before and after dot.
    'dot-location': ['warn', 'property'],
    // Require Dot Notation.
    'dot-notation': 'warn',
    // Require === and !==.
    'eqeqeq': 'warn',
    // Require grouped accessor pairs in object literals and classes.
    'grouped-accessor-pairs': 'warn',
    // Disallow Use of Alert.
    'no-alert': 'warn',
    // Disallow lexical declarations in case/default clauses.
    'no-case-declarations': 'warn',
    // Disallow Regular Expressions That Look Like Division.
    'no-div-regex': 'warn',
    // Disallow return before else.
    'no-else-return': 'warn',
    // Disallow empty functions.
    'no-empty-function': 'warn',
    // Disallow empty destructuring patterns.
    'no-empty-pattern': 'warn',
    // Disallow unnecessary function binding.
    'no-extra-bind': 'warn',
    // Disallow Unnecessary Labels.
    'no-extra-label': 'warn',
    // Disallow Floating Decimals.
    'no-floating-decimal': 'warn',
    // Disallow the type conversion with shorter notations.
    'no-implicit-coercion': 'warn',
    // Disallow Magic Numbers.
    'no-magic-numbers': [
      'warn',
      {
        ignore: [0, 1],
      },
    ],
    // Disallow multiple spaces.
    'no-multi-spaces': 'warn',
    // Disallow Multiline Strings.
    'no-multi-str': 'warn',
    // Disallow new For Side Effects.
    'no-new': 'warn',
    // Disallow Assignment in return Statement.
    'no-return-assign': 'warn',
    // Disallows unnecessary return await.
    'no-return-await': 'warn',
    // Disallow Use of the Comma Operator.
    'no-sequences': 'warn',
    // Disallow unmodified conditions of loops.
    'no-unmodified-loop-condition': 'warn',
    // Disallow Unused Expressions.
    'no-unused-expressions': 'warn',
    // Disallow Unused Labels.
    'no-unused-labels': 'warn',
    // Disallow unnecessary .call() and .apply().
    'no-useless-call': 'warn',
    // Disallow unnecessary catch clauses.
    'no-useless-catch': 'warn',
    // Disallow unnecessary concatenation of strings.
    'no-useless-concat': 'warn',
    // Disallow unnecessary escape usage.
    'no-useless-escape': 'warn',
    // Disallow redundant return statements.
    'no-useless-return': 'warn',
    // Suggest using named capture group in regular expression.
    'prefer-named-capture-group': 'warn',
    // Disallow use of the RegExp constructor in favor of regular expression literals.
    'prefer-regex-literals': [
      'warn',
      {
        disallowRedundantWrapping: true,
      },
    ],
    // Require Radix Parameter.
    'radix': ['warn', 'as-needed'],
    // Disallow async functions which have no await expression.
    'require-await': 'warn',
    // Enforce the use of u flag on RegExp.
    'require-unicode-regexp': 'warn',
    // Require IIFEs to be Wrapped.
    'wrap-iife': 'warn',
    // Require or disallow Yoda Conditions.
    'yoda': 'warn',
    // Disallow variable declarations from shadowing variables declared in the outer scope.
    'no-shadow': 'warn',
    // Disallow Undeclared Variables.
    'no-undef': 'warn',
    // Disallow Initializing to undefined.
    'no-undef-init': 'warn',
    // Disallow Unused Variables.
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    // Enforce line breaks after opening and before closing array brackets.
    'array-bracket-newline': 'warn',
    // Disallow or enforce spaces inside of brackets.
    'array-bracket-spacing': [
      'warn',
      'always',
      {
        singleValue: false,
      },
    ],
    // Enforce line breaks between array elements.
    'array-element-newline': [
      'warn',
      {
        multiline: true,
      },
    ],
    // Disallow or enforce spaces inside of blocks after opening block and before closing block.
    'block-spacing': 'warn',
    // Require Brace Style.
    'brace-style': 'warn',
    // Require CamelCase.
    'camelcase': 'warn',
    // Enforce or disallow capitalization of the first letter of a comment.
    'capitalized-comments': 'warn',
    // Require or disallow trailing commas.
    'comma-dangle': ['warn', 'always-multiline'],
    // Enforces spacing around commas.
    'comma-spacing': 'warn',
    // Comma style.
    'comma-style': 'warn',
    // Disallow or enforce spaces inside of computed properties.
    'computed-property-spacing': 'warn',
    // Require or disallow newline at the end of files.
    'eol-last': 'warn',
    // Require or disallow spacing between function identifiers and their invocations.
    'func-call-spacing': 'warn',
    // Require or disallow named function expressions.
    'func-names': ['warn', 'as-needed'],
    // Enforce the consistent use of either function declarations or expressions.
    'func-style': [
      'warn',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    // Enforce line breaks between arguments of a function call.
    'function-call-argument-newline': ['warn', 'consistent'],
    // Enforce consistent line breaks inside function parentheses.
    'function-paren-newline': 'warn',
    // Enforce minimum and maximum identifier lengths.
    'id-length': [
      'warn',
      {
        min: 2,
        properties: 'never',
      },
    ],
    // Enforce the location of arrow function bodies with implicit returns.
    'implicit-arrow-linebreak': 'warn',
    // Enforce consistent indentation.
    'indent': ['warn', eslintEnvEditorconfig.indent_size],
    // Enforce the consistent use of either double or single quotes in JSX attributes.
    'jsx-quotes': 'warn',
    // Enforce consistent spacing between keys and values in object literal properties.
    'key-spacing': 'warn',
    // Enforce consistent spacing before and after keywords.
    'keyword-spacing': 'warn',
    // Enforce position of line comments.
    'line-comment-position': 'warn',
    // Enforce consistent linebreak style.
    'linebreak-style': 'warn',
    // Require empty lines around comments.
    'lines-around-comment': 'warn',
    // Require or disallow an empty line between class members.
    'lines-between-class-members': 'warn',
    // Enforce a maximum depth that blocks can be nested.
    'max-depth': 'warn',
    // Enforce a maximum depth that blocks can be nested.
    'max-len': [
      'warn',
      {
        code: eslintEnvEditorconfig.max_line_length,
        tabWidth: eslintEnvEditorconfig.indent_size,
        ignoreComments: true,
      },
    ],
    // Enforce a maximum depth that callbacks can be nested.
    'max-nested-callbacks': 'warn',
    // Enforce a maximum number of parameters in function definitions.
    'max-params': [
      'warn',
      {
        max: 5,
      },
    ],
    // Enforce a maximum number of statements allowed per line.
    'max-statements-per-line': [
      'warn',
      {
        max: 2,
      },
    ],
    // Enforce a particular style for multiline comments.
    'multiline-comment-style': 'warn',
    // Enforce or disallow newlines between operands of ternary expressions.
    'multiline-ternary': ['warn', 'always-multiline'],
    // Require constructor names to begin with a capital letter.
    'new-cap': [
      'warn',
      {
        capIsNew: false,
      },
    ],
    // Require parentheses when invoking a constructor with no arguments.
    'new-parens': 'warn',
    // Require a newline after each call in a method chain.
    'newline-per-chained-call': 'warn',
    // Disallow Array constructors.
    'no-array-constructor': 'warn',
    // Disallow continue statements.
    'no-continue': 'warn',
    // Disallow inline comments after code.
    'no-inline-comments': 'warn',
    // Disallow if statements as the only statement in else blocks.
    'no-lonely-if': 'warn',
    // Disallow mixes of different operators.
    'no-mixed-operators': 'warn',
    // Disallow mixed spaces and tabs for indentation.
    'no-mixed-spaces-and-tabs': 'warn',
    // Disallow Use of Chained Assignment Expressions.
    'no-multi-assign': 'warn',
    // Disallow multiple empty lines.
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        maxEOF: 1,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        maxBOF: 0,
      },
    ],
    // Disallow negated conditions.
    'no-negated-condition': 'warn',
    // Disallow nested ternary expressions.
    'no-nested-ternary': 'warn',
    // Disallow dangling underscores in identifiers.
    'no-underscore-dangle': 'warn',
    // Disallow ternary operators when simpler alternatives exist.
    'no-unneeded-ternary': 'warn',
    // Disallow whitespace before properties.
    'no-whitespace-before-property': 'warn',
    // Enforce the location of single-line statements.
    'nonblock-statement-body-position': 'warn',
    // Enforce consistent line breaks inside braces.
    'object-curly-newline': 'warn',
    // Enforce consistent spacing inside braces.
    'object-curly-spacing': ['warn', 'always'],
    // Enforce placing object properties on separate lines.
    'object-property-newline': [
      'warn',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    // Require or disallow newlines around variable declarations.
    'one-var-declaration-per-line': 'warn',
    // Require or disallow assignment operator shorthand where possible.
    'operator-assignment': 'warn',
    // Enforce consistent linebreak style for operators.
    'operator-linebreak': 'warn',
    // Require or disallow padding within blocks.
    'padded-blocks': ['warn', 'never'],
    // Disallow the use of Math.pow in favor of the ** operator.
    'prefer-exponentiation-operator': 'warn',
    // Prefer use of an object spread over Object.assign.
    'prefer-object-spread': 'warn',
    // Enforce the consistent use of either backticks, double, or single quotes.
    'quotes': ['warn', 'single'],
    // Require quotes around object literal property names.
    'quote-props': [
      'warn',
      'consistent-as-needed',
      {
        keywords: true,
      },
    ],
    // Require or disallow semicolons instead of ASI.
    'semi': 'warn',
    // Enforce spacing before and after semicolons.
    'semi-spacing': 'warn',
    // Enforce location of semicolons.
    'semi-style': 'warn',
    // Variable Sorting.
    'sort-vars': 'warn',
    // Require Or Disallow Space Before Blocks.
    'space-before-blocks': 'warn',
    // Require or disallow a space before function parenthesis.
    'space-before-function-paren': [
      'warn',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],
    // Disallow or enforce spaces inside of parentheses.
    'space-in-parens': ['warn', 'never'],
    // Require spacing around infix operators.
    'space-infix-ops': 'warn',
    // Require or disallow spaces before/after unary operators.
    'space-unary-ops': 'warn',
    // Requires or disallows a whitespace (space or tab) beginning a comment.
    'spaced-comment': ['warn', 'always'],
    // Enforce spacing around colons of switch statements.
    'switch-colon-spacing': 'warn',
    // Require or disallow spacing between template tags and their literals.
    'template-tag-spacing': 'warn',
    // Require or disallow the Unicode Byte Order Mark (BOM).
    'unicode-bom': 'warn',
    // Require Regex Literals to be Wrapped.
    'wrap-regex': 'warn',
    // Require braces in arrow function body.
    'arrow-body-style': 'warn',
    // Require parens in arrow function arguments.
    'arrow-parens': 'warn',
    // Require space before/after arrow function's arrow.
    'arrow-spacing': 'warn',
    // Enforce spacing around the * in generator functions.
    'generator-star-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    // Disallow arrow functions where they could be confused with comparisons.
    'no-confusing-arrow': 'warn',
    // Disallow unnecessary computed property keys in objects and classes.
    'no-useless-computed-key': 'warn',
    // Disallow unnecessary constructor.
    'no-useless-constructor': 'warn',
    // Disallow renaming import, export, and destructured assignments to the same name.
    'no-useless-rename': 'warn',
    // Require Object Literal Shorthand Syntax.
    'object-shorthand': [
      'warn',
      'properties',
      {
        avoidQuotes: true,
      },
    ],
    // Suggest using template literals instead of string concatenation.
    'prefer-template': 'warn',
    // Disallow generator functions that do not have yield.
    'require-yield': 'warn',
    // Enforce spacing between rest and spread operators and their expressions.
    'rest-spread-spacing': 'warn',
    // Import Sorting.
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    // Require symbol description.
    'symbol-description': 'warn',
    // Enforce Usage of Spacing in Template Strings.
    'template-curly-spacing': 'warn',
    // Enforce spacing around the * in yield* expressions.
    'yield-star-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    // Prefer destructuring from arrays and objects.
    'prefer-destructuring': 'error',
    // Disallow comparing against -0.
    'no-compare-neg-zero': 'error',
    // Disallow assignment operators in conditional statements.
    'no-cond-assign': 'error',
    // Disallow duplicate arguments in function definitions.
    'no-dupe-args': 'error',
    // Disallow duplicate conditions in if-else-if chains.
    'no-dupe-else-if': 'error',
    // Disallow duplicate keys in object literals.
    'no-dupe-keys': 'error',
    // Rule to disallow a duplicate case label.
    'no-duplicate-case': 'error',
    // Disallow reassigning exceptions in catch clauses.
    'no-ex-assign': 'error',
    // Disallow reassigning function declarations.
    'no-func-assign': 'error',
    // Disallow assigning to imported bindings.
    'no-import-assign': 'error',
    // Disallow variable or function declarations in nested blocks.
    'no-inner-declarations': 'error',
    // Disallow irregular whitespace.
    'no-irregular-whitespace': 'error',
    // Disallow characters which are made with multiple code points in character class syntax.
    'no-misleading-character-class': 'error',
    // Disallow calling global object properties as functions.
    'no-obj-calls': 'error',
    // Disallow returning values from Promise executor functions.
    'no-promise-executor-return': 'error',
    // Disallow use of Object.prototypes builtins directly.
    'no-prototype-builtins': 'error',
    // Disallow sparse arrays.
    'no-sparse-arrays': 'error',
    // Disallow control flow statements in finally blocks.
    'no-unsafe-finally': 'error',
    // Disallow negating the left operand of relational operators.
    'no-unsafe-negation': 'error',
    // Disallow use of optional chaining in contexts where the undefined value is not allowed.
    'no-unsafe-optional-chaining': 'error',
    // Disallow assignments that can lead to race conditions due to usage of await or yield.
    'require-atomic-updates': 'error',
    // Require calls to isNaN() when checking for NaN.
    'use-isnan': 'error',
    // Enforce comparing typeof expressions against valid strings.
    'valid-typeof': 'error',
    // Treat var as Block Scoped.
    'block-scoped-var': 'error',
    // Enforce a maximum number of classes per file.
    'max-classes-per-file': 'error',
    // Disallow Use of caller/callee.
    'no-caller': 'error',
    // Disallow returning value in constructor.
    'no-constructor-return': 'error',
    // Disallow Null Comparisons.
    'no-eq-null': 'error',
    // Disallow eval().
    'no-eval': 'error',
    // Disallow Extending of Native Objects.
    'no-extend-native': 'error',
    // Disallow Case Statement Fallthrough.
    'no-fallthrough': 'error',
    // Disallow assignment to native objects or read-only global variables.
    'no-global-assign': 'error',
    // Disallow declarations in the global scope.
    'no-implicit-globals': 'error',
    // Disallow Implied eval().
    'no-implied-eval': 'error',
    // Disallow this keywords outside of classes or class-like objects.
    'no-invalid-this': 'error',
    // Disallow Iterator.
    'no-iterator': 'error',
    // Disallow Labeled Statements.
    'no-labels': 'error',
    // Disallow Unnecessary Nested Blocks.
    'no-lone-blocks': 'error',
    // Disallow Functions in Loops.
    'no-loop-func': 'error',
    // Disallow Function Constructor.
    'no-new-func': 'error',
    // Disallow Primitive Wrapper Instances.
    'no-new-wrappers': 'error',
    // Disallow \8 and \9 escape sequences in string literals.
    'no-nonoctal-decimal-escape': 'error',
    // Disallow octal literals.
    'no-octal': 'error',
    // Disallow octal escape sequences in string literals.
    'no-octal-escape': 'error',
    // Disallow Reassignment of Function Parameters.
    'no-param-reassign': [
      'error',
      {
        props: true,
      },
    ],
    // Disallow Use of __proto__.
    'no-proto': 'error',
    // Disallow variable redeclaration.
    'no-redeclare': 'error',
    // Disallow Script URLs.
    'no-script-url': 'error',
    // Disallow Self Assignment.
    'no-self-assign': 'error',
    // Disallow Self Compare.
    'no-self-compare': 'error',
    // Restrict what can be thrown as an exception.
    'no-throw-literal': 'error',
    // Disallow use of the void operator.
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    // Disallow with statements.
    'no-with': 'error',
    // Require using Error objects as Promise rejection reasons.
    'prefer-promise-reject-errors': 'error',
    // Require or disallow initialization in variable declarations.
    'init-declarations': 'error',
    // Disallow deleting variables.
    'no-delete-var': 'error',
    // Disallow Labels That Are Variables Names.
    'no-label-var': 'error',
    // Disallow Shadowing of Restricted Names.
    'no-shadow-restricted-names': 'error',
    // Disallow Use of undefined Variable.
    'no-undefined': 'error',
    // Disallow Early Use.
    'no-use-before-define': 'error',
    // Disallow Object constructors.
    'no-new-object': 'error',
    // Disallow the unary operators ++ and --.
    'no-plusplus': 'error',
    // Disallow all tabs.
    'no-tabs': 'error',
    // Enforce variables to be declared either together or separately in functions.
    'one-var': ['error', 'never'],
    // Verify calls of super() in constructors.
    'constructor-super': 'error',
    // Disallow modifying variables of class declarations.
    'no-class-assign': 'error',
    // Disallow modifying variables that are declared using const.
    'no-const-assign': 'error',
    // Disallow duplicate name in class members.
    'no-dupe-class-members': 'error',
    // Disallow duplicate imports.
    'no-duplicate-imports': 'error',
    // Disallow Symbol Constructor.
    'no-new-symbol': 'error',
    // Disallow use of this/super before calling super() in constructors.
    'no-this-before-super': 'error',
    // Require let or const instead of var.
    'no-var': 'error',
    // Require using arrow functions for callbacks.
    'prefer-arrow-callback': 'error',
    // Suggest using const.
    'prefer-const': 'error',
    // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals.
    'prefer-numeric-literals': 'error',
    // Suggest using the rest parameters instead of arguments.
    'prefer-rest-params': 'error',
    // Suggest using spread syntax instead of .apply().
    'prefer-spread': 'error',
  },
};
