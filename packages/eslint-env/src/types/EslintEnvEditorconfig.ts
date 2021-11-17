import type { KnownProps } from 'editorconfig';

export interface EslintEnvEditorconfig extends KnownProps {
  // eslint-disable-next-line camelcase
  readonly max_line_length?: number;
}
