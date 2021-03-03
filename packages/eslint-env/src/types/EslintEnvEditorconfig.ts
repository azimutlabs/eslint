import type { KnownProps } from 'editorconfig';

export type EslintEnvEditorconfig = KnownProps & {
  // eslint-disable-next-line camelcase,@typescript-eslint/naming-convention
  readonly max_line_length?: number;
};
