import {
  eslintConfigTypescriptBase,
  eslintConfigTypescriptDeclarations,
} from '@azimutlabs/eslint-config-typescript/lib';

import { buildEslint } from './services/builders';
import { getMessagesFromLintResults } from './services/getMessagesFromLintResults';

const eslintBase = buildEslint(eslintConfigTypescriptBase);
const eslintDeclarations = buildEslint(eslintConfigTypescriptDeclarations, {
  overrideConfig: eslintConfigTypescriptDeclarations,
});

describe('successful cases', () => {
  it('should lint a node.js http server start', async () => {
    const file = `import * as http from 'http';

const statusOk = 200;
const port = 8080;

const requestListener: http.RequestListener = (_, res) => {
  res.writeHead(statusOk);
  res.end(http.STATUS_CODES[statusOk]);
};

http.createServer(requestListener).listen(port);
`;
    expect(getMessagesFromLintResults(await eslintBase.lintText(file))).toStrictEqual([]);
  });

  it('should lint a client-side react component without jsx', async () => {
    const file = `import { forwardRef } from 'react';

enum Colors {
  Blue = 'blue',
  Pink = 'pink',
  Red = 'red',
}

type AnyColor = string;
type Color = AnyColor | Colors;

interface ColorProps<C extends Color = AnyColor> {
  readonly color: C;
}

interface ButtonProps extends ColorProps<Colors.Blue | Colors.Red> {
  readonly disabled?: boolean;
}

export const isBordered = true;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, color: _color, ...rest }, ref) =>
    <button {...rest} ref={ref} aria-disabled={disabled ? 'disabled' : 'not'} />
);

Button.defaultProps = {
  disabled: true,
};
`;
    expect(
      getMessagesFromLintResults(await eslintBase.lintText(file, { filePath: 'index.tsx' }))
    ).toStrictEqual([]);
  });

  it('should lint a next-env.d.ts', async () => {
    const file = `/// <reference types="next" />
/// <reference types="next/types/global" />
`;
    expect(getMessagesFromLintResults(await eslintDeclarations.lintText(file))).toStrictEqual([]);
  });
});
