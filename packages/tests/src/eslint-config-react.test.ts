import { eslintConfigReact } from '@azimutlabs/eslint-config-react/lib/config';

import { buildEslint } from './services/builders';
import { getMessagesFromLintResults } from './services/getMessagesFromLintResults';

const eslintBase = buildEslint(eslintConfigReact);

describe('successful cases', () => {
  it('should lint a client-side react component without jsx', async () => {
    const file = `import { createElement, forwardRef } from 'react';

export const Button = forwardRef(({ children, color: _color, ...rest }, ref) => (
  <button
    ref={ref}
    type="button"
    {...rest}
  >
    <span className="d-flex">
      {children}
    </span>
  </button>
));

Button.displayName = 'Button';

Button.defaultProps = {
  disabled: true,
};
`;
    expect(
      getMessagesFromLintResults(await eslintBase.lintText(file, { filePath: 'component.jsx' }))
    ).toEqual([]);
  });
});
