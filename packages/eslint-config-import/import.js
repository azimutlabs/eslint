module.exports = {
  rules: {
    // Restrict which files can be imported in a given folder.
    'import/no-restricted-paths': 'off',
    // Forbid importing modules from parent directories.
    'import/no-relative-parent-imports': 'off',
    // Report modules without exports, or exports without matching import in another module.
    'import/no-unused-modules': 'off',
    // Report potentially ambiguous parse goal (script vs. module).
    'import/no-commonjs': 'off',
    // No Node.js builtin modules.
    'import/no-nodejs-modules': 'off',
    // Ensure all exports appear after other statements.
    'import/exports-last': 'off',
    // Enforce a convention in module import order.
    'import/order': 'off',
    // Prefer a default export if module exports a single name.
    'import/prefer-default-export': 'off',
    // Forbid default exports.
    'import/no-default-export': 'off',
    // Forbid named exports.
    'import/no-named-export': 'off',
    // Prefer named exports to be grouped together in a single export declaration.
    'import/group-exports': 'off',
    // Enforce a leading comment with the webpackChunkName for dynamic imports.
    'import/dynamic-import-chunkname': 'off',
    // Report potentially ambiguous parse goal (script vs. module).
    'import/unambiguous': 'off',
    // Ensure imports point to a file/module that can be resolved.
    'import/no-unresolved': 'warn',
    // Ensure named imports correspond to a named export in the remote file.
    'import/named': 'warn',
    // Ensure a default export is present, given a default import.
    'import/default': 'warn',
    // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
    'import/namespace': 'warn',
    // Forbid require() calls with expressions.
    'import/no-dynamic-require': 'warn',
    // Prevent importing the submodules of other modules.
    'import/no-internal-modules': 'warn',
    // Prevent unnecessary path segments in import and require statements.
    'import/no-useless-path-segments': [
      'warn',
      {
        noUselessIndex: true,
      },
    ],
    // Report any invalid exports, i.e. re-export of the same name.
    'import/export': 'warn',
    // Report use of exported name as identifier of default export.
    'import/no-named-as-default': 'warn',
    // Report use of exported name as property of default export.
    'import/no-named-as-default-member': 'warn',
    // Report imported names marked with @deprecated documentation tag.
    'import/no-deprecated': 'warn',
    // Forbid the use of extraneous packages.
    'import/no-extraneous-dependencies': 'warn',
    // Forbid the use of mutable exports with var or let.
    'import/no-mutable-exports': 'warn',
    // Ensure all imports appear before other statements.
    'import/first': 'warn',
    // Report repeated import of the same module in multiple places.
    'import/no-duplicates': 'warn',
    // Ensure consistent use of file extension within the import path.
    'import/extensions': [
      'warn',
      'never',
      {
        pattern: {
          json: 'always',
          css: 'always',
          scss: 'always',
          sass: 'always',
        },
      },
    ],
    // Enforce a newline after import statements.
    'import/newline-after-import': 'warn',
    // Limit the maximum number of dependencies a module can have.
    'import/max-dependencies': [
      'warn',
      {
        max: 50,
      },
    ],
    // Forbid unassigned imports.
    'import/no-unassigned-import': [
      'warn',
      {
        allow: ['**/*.css', '**/*.scss', '**/*.sass'],
      },
    ],
    // Forbid named default exports.
    'import/no-named-default': 'warn',
    // Forbid anonymous values as default exports.
    'import/no-anonymous-default-export': 'warn',
    // Forbid import of modules using absolute paths.
    'import/no-absolute-path': 'error',
    // Forbid webpack loader syntax in imports.
    'import/no-webpack-loader-syntax': 'error',
    // Forbid a module from importing itself.
    'import/no-self-import': 'error',
    // Forbid a module from importing a module with a dependency path back to itself.
    'import/no-cycle': 'error',
    // Report AMD require and define calls.
    'import/no-amd': 'error',
    // Forbid namespace (a.k.a. "wildcard" *) imports.
    'import/no-namespace': 'error',
  },
};
