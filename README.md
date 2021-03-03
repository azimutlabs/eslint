<h1 align="center">
  <a target="_blank" href="https://alabs.team">
    ✨
    <img
      height="22.5"
      src="https://raw.githubusercontent.com/azimutlabs/logos/master/little_logo.png"
      alt="azimutlabs logo"
    />
    /eslint
  </a>
</h1>

<p align="center">ESLint configurations and code-style guidelines</p>

<p align="center">
  <a href="https://github.com/azimutlabs/eslint/actions?query=workflow%3A%22Lint+and+Test%22">
    <img
      src="https://github.com/azimutlabs/eslint/workflows/Lint%20and%20Test/badge.svg"
      alt="azimutlabs/eslint repository github workflow status"
    />
  </a>
  <a href="https://github.com/azimutlabs/eslint/blob/master/LICENSE">
    <img
      src="https://img.shields.io/github/license/azimutlabs/eslint?label=License"
      alt="azimutlabs/eslint repository license"
    />
  </a>
</p>

## Installation
All packages have their respective `peerDependencies` and as long as you add everything required
by the package, you are good to go.

Packages itself divided by their plugin usage and made independent but at the same time integrated by keeping in mind that they can be used in conjunction with one another.

Here is just a default script section for some who tend to skip these description parts:
```shell
$ yarn add --save-dev @azimutlabs/eslint-config
```

## Usage
All you have to do is to extend the config you want, and we'll take it from there:
```json5
{
  // package.json
  "eslintConfig": {
    "extends": [
      // Either extend ALL configurations at once...
      "@azimutlabs",
      // ...or piece by piece
      "@azimutlabs/eslint-config-core",
      "@azimutlabs/eslint-config-typescript",
      "@azimutlabs/eslint-config-prettier",
    ]
  }
}
```

## Configurations
All configurations were made and tested with care. We tried to match our needs, but maybe you
could find them useful as well.

| | |
| --- | --- |
| [![azimutlabs eslint config npm package version][config]](packages/eslint-config) | Collection of all `@azimutlabs/eslint-config-*` packages |
| [![azimutlabs eslint config core npm package version][config-core]](packages/eslint-config-core) | ESLint configuration core rules |
| [![azimutlabs eslint config prettier npm package version][config-prettier]](packages/eslint-config-prettier) | ESLint configuration for Prettier |
| [![azimutlabs eslint config import npm package version][config-import]](packages/eslint-config-import) | ESLint configuration for ES6 Imports and Exports |
| [![azimutlabs eslint config typescript npm package version][config-typescript]](packages/eslint-config-typescript) | ESLint configuration for TypeScript |
| [![azimutlabs eslint config react npm package version][config-react]](packages/eslint-config-react) | ESLint configuration for React/ReactHooks |
| [![azimutlabs eslint config jsx a11y npm package version][config-jsx-a11y]](packages/eslint-config-jsx-a11y) | ESLint configuration for JSX Accessibility |
| [![azimutlabs eslint config functional npm package version][config-functional]](packages/eslint-config-functional) | ESLint configuration for Functional Programming |
| [![azimutlabs eslint config jest npm package version][config-jest]](packages/eslint-config-jest) | ESLint configuration for Jest testing library |
| | |

[config]: https://img.shields.io/npm/v/@azimutlabs/eslint-config.svg?label=@azimutlabs/eslint-config&color
[config-core]: https://img.shields.io/npm/v/@azimutlabs/eslint-config-core.svg?label=@azimutlabs/eslint-config-core&color
[config-prettier]: https://img.shields.io/npm/v/@azimutlabs/eslint-config-prettier.svg?label=@azimutlabs/eslint-config-prettier&color
[config-typescript]: https://img.shields.io/npm/v/@azimutlabs/eslint-config-typescript.svg?label=@azimutlabs/eslint-config-typescript&color
[config-react]: https://img.shields.io/npm/v/@azimutlabs/eslint-config-react.svg?label=@azimutlabs/eslint-config-react&color
[config-jsx-a11y]: https://img.shields.io/npm/v/@azimutlabs/eslint-config-jsx-a11y.svg?label=@azimutlabs/eslint-config-jsx-a11y&color
[config-import]: https://img.shields.io/npm/v/@azimutlabs/eslint-config-import.svg?label=@azimutlabs/eslint-config-import&color
[config-functional]: https://img.shields.io/npm/v/@azimutlabs/eslint-config-functional.svg?label=@azimutlabs/eslint-config-functional&color
[config-jest]: https://img.shields.io/npm/v/@azimutlabs/eslint-config-jest.svg?label=@azimutlabs/eslint-config-jest&color

## Contributing
Any PR is welcomed by our **@js-opensource** team.
Check out our [contributing](CONTRIBUTING.md) guidelines for more info.

## License
[![azimutlabs eslint config license](https://img.shields.io/github/license/azimutlabs/eslint?label=as%20always&color=informational)](LICENSE)
