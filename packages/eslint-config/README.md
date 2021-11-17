<h1 align="center">
  <a target="_blank" href="https://alabs.team/en">
    ✨
    <img
      height="22.5"
      src="https://raw.githubusercontent.com/azimutlabs/logos/master/little_logo.png"
      alt="azimutlabs logo"
    />
    /eslint-config
  </a>
</h1>

<p align="center">Collection of all <a href="https://github.com/azimutlabs/eslint">@azimutlabs/eslint-config</a> packages</p>

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
   <a href="https://www.npmjs.com/package/@azimutlabs/eslint-config">
     <img
       src="https://img.shields.io/npm/v/@azimutlabs/eslint-config?color=blue&logo=npm&label="
       alt="@azimutlabs/eslint-config"
     />
   </a>
</p>

## Installation
Add peer dependencies:
```shell
$ yarn add -D eslint prettier typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-functional eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort
```
...then install config packages:
```shell
$ yarn add -D @azimutlabs/eslint-config
```

## Usage
```json5
{
  // package.json
  "eslintConfig": {
    "extends": [
      "@azimutlabs"
    ]
  }
}
```

## Contributing
Any PR is welcomed by our **@js-opensource** team.
Check out our [contributing](../../CONTRIBUTING.md) guidelines for more info.

## License
[![azimutlabs eslint config license](https://img.shields.io/github/license/azimutlabs/eslint?label=as%20always&color=informational)](../../LICENSE)
