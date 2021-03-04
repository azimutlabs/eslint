import { eslintConfigJsxA11y } from '@azimutlabs/eslint-config-jsx-a11y/lib/config';

import { buildEslint } from './services/builders';
import { getMessagesFromLintResults } from './services/getMessagesFromLintResults';

const eslint = buildEslint(eslintConfigJsxA11y);

describe('successful cases', () => {
  it('should lint a client-side react component', async () => {
    const file = `import { forwardRef, useCallback } from 'react';

export const CardInteractive = forwardRef(({ children, color: _color, ...rest }, ref) => {
  const onCardClick = useCallback(() => {
    console.log('clicked');
  }, []);
  const onCardKeyUp = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <div
      ref={ref}
      role="button"
      tabIndex="0"
      onClick={onCardClick}
      onKeyUp={onCardKeyUp}
      {...rest}
    >
      {children}
    </div>
  );
});
`;
    expect(
      getMessagesFromLintResults(await eslint.lintText(file, { filePath: 'component.jsx' }))
    ).toStrictEqual([]);
  });
});
