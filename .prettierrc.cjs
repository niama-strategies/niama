/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: false,
  printWidth: 140,
  proseWrap: "always",
  semi: true,
  singleQuote: true,
  svelteSortOrder: 'options-markup-scripts-styles',
  trailingComma: 'es5',
  plugins: [require('prettier-plugin-svelte'),require('@ianvs/prettier-plugin-sort-imports'), require('prettier-plugin-tailwindcss')],
  pluginSearchDirs: false
};
