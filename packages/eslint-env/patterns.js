const matchAll = (ext) => `**/**${ext}`;

module.exports = {
  typescript: matchAll('.ts?(x)'),
  typescriptDeclarations: matchAll('.d.ts?(x)'),
  javascript: matchAll('.js?(x)'),
};
