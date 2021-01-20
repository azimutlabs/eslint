import * as configBase from '@azimutlabs/eslint-config-typescript/base';
import * as configDeclarations from '@azimutlabs/eslint-config-typescript/declarations';
import * as http from 'http';

http.createServer()

import { buildESLint } from './services/builders';
import { getMessagesFromLintResults } from './services/getMessagesFromLintResults';
import type { Linter } from 'eslint';

const withCreateDefaultProgram = (config: Linter.Config): Linter.Config => ({
  ...config,
  parserOptions: {
    ...config.parserOptions,
    /**
     * Couldn't make @typescript-plugin/parser to believe the linted code is included by tsconfig,
     * so had no option to make test suits to run with `createDefaultProgram`.
     * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionscreatedefaultprogram
     */
    createDefaultProgram: true,
  },
});

const eslintBase = buildESLint(withCreateDefaultProgram(configBase));
const eslintDeclarations = buildESLint(withCreateDefaultProgram(configBase), {
  overrideConfig: configDeclarations,
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
    expect(getMessagesFromLintResults(await eslintBase.lintText(file))).toEqual([]);
  });

  it('should lint a client-side react component without jsx', async () => {
    const file = `import { createElement } from 'react';
import type { FC } from 'react';

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

interface ButtonProps extends ColorProps<Colors.Blue | Colors.Red> {}

export const Button: FC<ButtonProps> = ({ children, color: _color, ...rest }) =>
  createElement(
    'button',
    { ...rest, 'aria-disabled': disabled ? 'disabled' : 'not' },
    children,
  );

Button.defaultProps = {
  disabled: true,
};
`;
    expect(getMessagesFromLintResults(await eslintBase.lintText(file))).toEqual([]);
  });

  it('should lint a next-env.d.ts', async () => {
    const file = `/// <reference types="next" />
/// <reference types="next/types/global" />
`;
    expect(getMessagesFromLintResults(await eslintDeclarations.lintText(file))).toEqual([]);
  });
});
