import { eslintEnvEditorconfig } from '@azimutlabs/eslint-env';
import type { Linter } from 'eslint';

export const eslintConfigReactJsx: Linter.BaseConfig = {
  rules: {
    // Enforce boolean attributes notation in JSX.
    'react/jsx-boolean-value': 'warn',
    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    'react/jsx-child-element-spacing': 'warn',
    // Validate closing bracket location in JSX.
    'react/jsx-closing-bracket-location': 'warn',
    // Validate closing tag location in JSX.
    'react/jsx-closing-tag-location': 'warn',
    // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
    'react/jsx-curly-brace-presence': [
      'warn',
      {
        props: 'never',
        children: 'never',
      },
    ],
    // Enforce linebreaks in curly braces in JSX attributes and expressions.
    'react/jsx-curly-newline': 'warn',
    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    'react/jsx-curly-spacing': 'warn',
    // Enforce or disallow spaces around equal signs in JSX attributes.
    'react/jsx-equals-spacing': 'warn',
    // Configure the position of the first property.
    'react/jsx-first-prop-new-line': 'warn',
    // Enforce shorthand or standard form for React fragments.
    'react/jsx-fragments': 'warn',
    // Enforce event handler naming conventions in JSX.
    'react/jsx-handler-names': [
      'warn',
      {
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    // Validate JSX indentation.
    'react/jsx-indent': ['warn', eslintEnvEditorconfig.indent_size],
    // Validate props indentation in JSX.
    'react/jsx-indent-props': ['warn', eslintEnvEditorconfig.indent_size],
    // Detect missing key prop.
    'react/jsx-key': [
      'warn',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
      },
    ],
    // Validate JSX maximum depth.
    'react/jsx-max-depth': [
      'warn',
      {
        max: 10,
      },
    ],
    // Limit maximum of props on a single line in JSX.
    'react/jsx-max-props-per-line': 'warn',
    // Enforce a new line after jsx elements and expressions.
    'react/jsx-newline': 'warn',
    // No .bind() or Arrow Functions in JSX Props.
    'react/jsx-no-bind': 'warn',
    // Prevent comments from being inserted as text nodes.
    'react/jsx-no-comment-textnodes': 'warn',
    // Prevent react contexts from taking non-stable values.
    'react/jsx-no-constructed-context-values': 'warn',
    // Prevent duplicate properties in JSX.
    'react/jsx-no-duplicate-props': 'warn',
    // Prevent usage of unsafe target='_blank'.
    'react/jsx-no-literals': [
      'warn',
      {
        noStrings: true,
        ignoreProps: true,
        noAttributeStrings: false,
      },
    ],
    // Prevent duplicate properties in JSX.
    'react/jsx-no-target-blank': 'warn',
    // Disallow undeclared variables in JSX.
    'react/jsx-no-undef': 'warn',
    // Disallow unnecessary fragments.
    'react/jsx-no-useless-fragment': 'warn',
    // One JSX Element Per Line.
    'react/jsx-one-expression-per-line': 'warn',
    // Enforce PascalCase for user-defined JSX components.
    'react/jsx-pascal-case': 'warn',
    // Disallow multiple spaces between inline JSX props.
    'react/jsx-props-no-multi-spaces': 'warn',
    // Enforce props alphabetical sorting.
    'react/jsx-sort-props': [
      'warn',
      {
        ignoreCase: true,
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    // Validate whitespace in and around the JSX opening and closing brackets.
    'react/jsx-tag-spacing': 'warn',
    // Prevent variables used in JSX to be incorrectly marked as unused.
    'react/jsx-uses-vars': 'warn',
    // Prevent missing parentheses around multiline JSX.
    'react/jsx-wrap-multilines': 'warn',
    // Prevent usage of javascript: URLs.
    'react/jsx-no-script-url': 'warn',
    // Enforce that namespaces are not used in React elements.
    'react/no-namespace': 'error',
  },
};
