import type { ESLint, Linter } from 'eslint';

export const getMessagesFromLintResults = (
  lintResults: readonly ESLint.LintResult[]
): readonly Linter.LintMessage[] => lintResults.flatMap((result) => result.messages);
