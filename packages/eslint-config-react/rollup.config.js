const { typescript } = require('@azimutlabs/rollup-config-typescript');

module.exports = typescript('cjs', { output: { exports: 'auto', entryFileNames: '[name].js' } })(
  __dirname
);
