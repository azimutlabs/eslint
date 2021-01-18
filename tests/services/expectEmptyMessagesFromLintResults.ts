import { ESLint } from 'eslint';

export const expectEmptyMessagesFromLintResult = (lintResult: ESLint.LintResult) =>
  expect(lintResult.messages).toEqual([]);

export const expectEmptyMessagesFromLintResults = (lintResults: readonly ESLint.LintResult[]) =>
  lintResults.forEach(expectEmptyMessagesFromLintResult);
