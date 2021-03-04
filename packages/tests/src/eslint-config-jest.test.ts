import { eslintConfigJest } from '@azimutlabs/eslint-config-jest/lib/config';

import { buildEslint } from './services/builders';
import { getMessagesFromLintResults } from './services/getMessagesFromLintResults';

const eslintBase = buildEslint(eslintConfigJest);

describe('successful cases', () => {
  it('should lint a jest test file', async () => {
    const file = `import { server } from './server';

      beforeAll(() => {
        server.start();
      })

      beforeEach(() => {
        server.reset();
      })

      afterAll(() => {
        server.stop();
      })

      describe('config', () => {
        it('should be null', async () => {
          const data = await fetch('url');
          expect(data).toBeNull();
        })
        it('should be call functions', () => {
          const mockFn = jest.fn();
          mockFn();
          expect(mockFn).toHaveBeenCalledWith();
        })
      })
    `;
    expect(getMessagesFromLintResults(await eslintBase.lintText(file))).toStrictEqual([]);
  });
});
