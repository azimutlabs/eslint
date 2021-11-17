import type { Linter } from 'eslint';

export const eslintConfig: Linter.Config = {
  root: true,
  extends: [
    require.resolve('@azimutlabs/eslint-config-core'),
    require.resolve('@azimutlabs/eslint-config-jsx-a11y'),
    require.resolve('@azimutlabs/eslint-config-react'),
    require.resolve('@azimutlabs/eslint-config-typescript'),
    require.resolve('@azimutlabs/eslint-config-import'),
    require.resolve('@azimutlabs/eslint-config-functional'),
    require.resolve('@azimutlabs/eslint-config-jest'),
    // Prettier has a lot of code-style overrides, so it must be last to extend.
    require.resolve('@azimutlabs/eslint-config-prettier'),
  ],
};
