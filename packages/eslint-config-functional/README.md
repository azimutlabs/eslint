<h1 align="center">
  <a target="_blank" href="https://alabs.team/en">
    ✨
    <img
      height="22.5"
      src="https://raw.githubusercontent.com/azimutlabs/logos/master/little_logo.png"
      alt="azimutlabs logo"
    />
    /eslint-config-functional
  </a>
</h1>

<p align="center">ESLint configuration for Functional Programming</p>

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
   <a href="https://www.npmjs.com/package/@azimutlabs/eslint-config-functional">
     <img
       src="https://img.shields.io/npm/v/@azimutlabs/eslint-config-functional?color=blue&logo=npm&label="
       alt="@azimutlabs/eslint-config-functional"
     />
   </a>
</p>

## Installation
Add peer dependencies:
```shell
$ yarn add -D eslint eslint-plugin-functional
```
...then install config packages:
```shell
$ yarn add -D @azimutlabs/eslint-config-functional
```

## Usage
```json5
{
  // package.json
  "eslintConfig": {
    "extends": [
      "@azimutlabs/eslint-config-functional",
      // Read more about strict config below...
      "@azimutlabs/eslint-config-functional/strict"
    ]
  }
}
```

## Strict Config
By default, javascript doesn't provide enough utilities to fully support functional programming code.
Because of that by default we will deliver general good practice rules.
But if you're using fp libraries (like [fp-ts](https://github.com/gcanti/fp-ts)
or [purify](https://github.com/gigobyte/purify)) we recommend adding the Strict Config.

## Contributing
Any PR is welcomed by our **@js-opensource** team.
Check out our [contributing](../../CONTRIBUTING.md) guidelines for more info.

## License
[![azimutlabs eslint config license](https://img.shields.io/github/license/azimutlabs/eslint?label=as%20always&color=informational)](../../LICENSE)
