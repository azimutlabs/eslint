import { eslintConfigImport } from '@azimutlabs/eslint-config-import/lib/config';

import { buildEslint } from './services/builders';
import { getMessagesFromLintResults } from './services/getMessagesFromLintResults';

const eslint = buildEslint(eslintConfigImport);

describe('successful cases', () => {
  it('should lint a node.js http server start', async () => {
    const file = `const http = require('http');

const statusOk = 200;
const port = 8080;

const requestListener = (req, res) => {
  res.writeHead(statusOk);
  res.end('Hello, World!');
};

http.createServer(requestListener).listen(port);

module.exports = {
  requestListener,
};
`;
    expect(getMessagesFromLintResults(await eslint.lintText(file))).toStrictEqual([]);
  });

  it('should lint a client-side react component without jsx', async () => {
    const file = `import { createElement } from 'react';

export const Button = ({ children, color: _color, ...rest }) => createElement(
  'button',
  rest,
  children,
);

Button.defaultProps = {
  disabled: true,
};
`;
    expect(getMessagesFromLintResults(await eslint.lintText(file))).toStrictEqual([]);
  });
});
