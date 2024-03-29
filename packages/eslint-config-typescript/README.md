<h1 align="center">
  <a target="_blank" href="https://alabs.team/en">
    ✨
    <img
      height="22.5"
      src="https://raw.githubusercontent.com/azimutlabs/logos/master/little_logo.png"
      alt="azimutlabs logo"
    />
    /eslint-config-typescript
  </a>
</h1>

<p align="center">ESLint configuration for TypeScript</p>

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
   <a href="https://www.npmjs.com/package/@azimutlabs/eslint-config-typescript">
     <img
       src="https://img.shields.io/npm/v/@azimutlabs/eslint-config-typescript?color=blue&logo=npm&label="
       alt="@azimutlabs/eslint-config-typescript"
     />
   </a>
</p>

## Installation
Add peer dependencies:
```shell
$ yarn add -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
...then install config packages:
```shell
$ yarn add -D @azimutlabs/eslint-config-typescript
```

## Usage
```json5
{
  // package.json
  "eslintConfig": {
    "extends": [
      "@azimutlabs/eslint-config-typescript",
      // WARNING.
      // Requires tsconfig to be presented in `parserOptions.project`.
      // May cause performance problems, so we don't recommend adding it right away.
      "@azimutlabs/eslint-config-typescript/with-type-check"
    ]
  }
}
```

## Contributing
Any PR is welcomed by our **@js-opensource** team.
Check out our [contributing](../../CONTRIBUTING.md) guidelines for more info.

## License
[![azimutlabs eslint config license](https://img.shields.io/github/license/azimutlabs/eslint?label=as%20always&color=informational)](../../LICENSE)
