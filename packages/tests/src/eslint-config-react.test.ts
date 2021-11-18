import { eslintConfigReact } from '@azimutlabs/eslint-config-react/lib/config';

import { eslintConfigTypescriptBase } from '../../eslint-config-typescript/lib';
import { buildEslint } from './services/builders';
import { getMessagesFromLintResults } from './services/getMessagesFromLintResults';

const eslintBase = buildEslint(eslintConfigReact, {
  overrideConfig: eslintConfigTypescriptBase,
});

describe('successful cases', () => {
  it('should lint a client-side typescript react component', async () => {
    const file = `import { forwardRef } from 'react';
import type { ReactNode } from 'react';

interface ButtonProps {
  readonly disabled?: boolean;
  readonly color?: string;
  readonly children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color: _color, ...rest }, ref) => (
    <button
      ref={ref}
      type="button"
      {...rest}
    >
      <span className="d-flex">
        {children}
      </span>
    </button>
  ),
);

Button.displayName = 'Button';
Button.defaultProps = {
  disabled: true,
};
`;
    expect(
      getMessagesFromLintResults(await eslintBase.lintText(file, { filePath: 'component.tsx' }))
    ).toStrictEqual([]);
  });

  it('should lint a client-side jsx react component', async () => {
    const file = `import { forwardRef } from 'react';

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
    ).toStrictEqual([]);
  });
});
