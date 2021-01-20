const { indentSize } = require('@azimutlabs/eslint-env/editorconfig');

module.exports = {
  rules: {
    // Forbid certain props on Components.
    'react/forbid-component-props': 'off',
    // Forbid certain props on DOM Nodes.
    'react/forbid-dom-props': 'off',
    // Forbid certain elements.
    'react/forbid-elements': 'off',
    // Forbid certain propTypes.
    'react/forbid-prop-types': 'off',
    // Enforce a specific function type for function components.
    'react/function-component-definition': 'off',
    // Prevent usage of setState.
    'react/no-set-state': 'off',
    // Prevent definitions of unused propTypes.
    'react/no-unused-prop-types': 'off',
    // Prevent missing React when using JSX.
    'react/react-in-jsx-scope': 'off',
    // Enforce a defaultProps definition for every prop that is not a required prop.
    'react/require-default-props': 'off',
    // Enforces where React component static properties should be positioned.
    'react/static-property-placement': 'off',
    // Disallow JSX props spreading.
    'react/jsx-props-no-spreading': 'off',
    // Enforce defaultProps declarations alphabetical sorting.
    'react/jsx-sort-default-props': 'off',
    // Prevent React to be incorrectly marked as unused.
    'react/jsx-uses-react': 'off',
    // Enforces consistent naming for boolean props.
    'react/boolean-prop-naming': [
      'warn',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: 'It is better if your prop ({{ propName }}) matches this pattern: ({{ pattern }})',
      },
    ],
    // Prevent usage of button elements without an explicit type attribute.
    'react/button-has-type': 'warn',
    // Enforce all defaultProps have a corresponding non-required PropType.
    'react/default-props-match-prop-types': 'warn',
    // Enforce consistent usage of destructuring assignment of props, state, and context.
    'react/destructuring-assignment': 'warn',
    // Prevent missing displayName in a React component definition.
    'react/display-name': 'warn',
    // Prevent using this.state within a this.setState.
    'react/no-access-state-in-setstate': 'warn',
    // Prevent adjacent inline elements not separated by whitespace.
    'react/no-adjacent-inline-elements': 'warn',
    // Prevent usage of Array index in keys.
    'react/no-array-index-key': 'warn',
    // Prevent multiple component definition per file.
    'react/no-multi-comp': 'warn',
    // Prevents common typos.
    'react/no-typos': 'warn',
    // Prevent invalid characters from appearing in markup.
    'react/no-unescaped-entities': 'warn',
    // Prevent usage of unknown DOM property.
    'react/no-unknown-property': 'warn',
    // Prevent definitions of unused state.
    'react/no-unused-state': 'warn',
    // Prevent missing props validation in a React component definition.
    'react/prop-types': ['warn', { skipUndeclared: true }],
    // Enforce React components to have a shouldComponentUpdate method.
    'react/require-optimization': 'warn',
    // Enforce ES5 or ES6 class for returning value in render function.
    'react/require-render-return': 'warn',
    // Prevent extra closing tags for components without children.
    'react/self-closing-comp': 'warn',
    // Enforce component methods order.
    'react/sort-comp': 'warn',
    // Enforce propTypes declarations alphabetical sorting.
    'react/sort-prop-types': [
      'warn',
      {
        ignoreCase: true,
        requiredFirst: true,
        sortShapeProp: true,
        callbacksLast: true,
        noSortAlphabetically: true,
      },
    ],
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
    'react/jsx-fragments': ['warn', 'element'],
    // Enforce event handler naming conventions in JSX.
    'react/jsx-handler-names': [
      'warn',
      {
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    // Validate JSX indentation.
    'react/jsx-indent': ['warn', indentSize],
    // Validate props indentation in JSX.
    'react/jsx-indent-props': ['warn', indentSize],
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
    // Enforce that props are read-only.
    'react/prefer-read-only-props': 'warn',
    // Forbid foreign propTypes.
    'react/forbid-foreign-prop-types': 'error',
    // Prevent passing of children as props.
    'react/no-children-prop': 'error',
    // Prevent usage of dangerous JSX properties.
    'react/no-danger': 'error',
    // Prevent problem with children and props.dangerouslySetInnerHTML.
    'react/no-danger-with-children': 'error',
    // Prevent usage of deprecated methods.
    'react/no-deprecated': 'error',
    // Prevent usage of setState in componentDidMount.
    'react/no-did-mount-set-state': 'error',
    // Prevent usage of setState in componentDidUpdate.
    'react/no-did-update-set-state': 'error',
    // Prevent direct mutation of this.state.
    'react/no-direct-mutation-state': 'error',
    // Prevent usage of findDOMNode.
    'react/no-find-dom-node': 'error',
    // Prevent usage of isMounted.
    'react/no-is-mounted': 'error',
    // Prevent usage of shouldComponentUpdate when extending React.PureComponent.
    'react/no-redundant-should-component-update': 'error',
    // Prevent usage of the return value of ReactDOM.render.
    'react/no-render-return-value': 'error',
    // Prevent using string references.
    'react/no-string-refs': 'error',
    // Prevent this from being used in stateless functional components.
    'react/no-this-in-sfc': 'error',
    // Prevent usage of unsafe lifecycle methods.
    'react/no-unsafe': 'error',
    // Prevent usage of setState in componentWillUpdate.
    'react/no-will-update-set-state': 'error',
    // Enforce ES5 or ES6 class for React Components.
    'react/prefer-es6-class': ['error', 'never'],
    // Enforce stateless React Components to be written as a pure function.
    'react/prefer-stateless-function': 'error',
    // Enforce state initialization style.
    'react/state-in-constructor': 'error',
    // Enforce style prop value being an object.
    'react/style-prop-object': 'error',
    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children.
    'react/void-dom-elements-no-children': 'error',
    // Restrict file extensions that may contain JSX.
    'react/jsx-filename-extension': [
      'error',
      {
        allow: 'as-needed',
        extensions: ['.tsx', '.jsx'],
      },
    ],
    // Prevent usage of javascript: URLs.
    'react/jsx-no-script-url': 'error',
  },
};
