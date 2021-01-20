module.exports = {
  rules: {
    // Sets preference level for triple slash directives versus ES6-style import declarations.
    '@typescript-eslint/triple-slash-reference': 'off',
    // Disable comment related rules that may interfere with `/// <reference>` imports.
    'multiline-comment-style': 'off',
    'spaced-comment': 'off',
  },
};