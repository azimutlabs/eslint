import { parseSync } from 'editorconfig';
import { resolve } from 'path';

import type { EslintEnvEditorconfig } from './types/EslintEnvEditorconfig';

export const eslintEnvEditorconfig = parseSync(
  resolve(__dirname, '../.editorconfig')
) as EslintEnvEditorconfig;
