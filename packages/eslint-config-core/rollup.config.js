import { typescript } from '@azimutlabs/rollup-config-typescript';

export default typescript('cjs', { output: { entryFileNames: '[name].js' } });
