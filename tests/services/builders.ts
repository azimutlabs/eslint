import { ESLint } from 'eslint';

export const buildESLint = (baseConfig, options: ESLint.Options = {}): ESLint =>
  new ESLint({
    ...options,
    baseConfig,
    useEslintrc: false,
  });
