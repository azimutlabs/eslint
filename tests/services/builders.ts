import type { Linter } from 'eslint';
import { ESLint } from 'eslint';

export const buildESLint = (baseConfig: Linter.Config, options: ESLint.Options = {}): ESLint =>
  new ESLint({
    ...options,
    baseConfig,
    useEslintrc: false,
  });
