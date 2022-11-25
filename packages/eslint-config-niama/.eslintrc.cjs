/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {sourceType: 'module'},
  env: {browser: true, es6: true, node: true},
  plugins: ['svelte3', '@typescript-eslint', 'promise', 'unicorn'],
  ignorePatterns: ['*.cjs'],
  overrides: [{files: ['*.svelte'], processor: 'svelte3/svelte3'}],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'turbo',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
    'no-control-regex': 'off',
    //'unicorn/better-regex': 'off',
    //'unicorn/consistent-function-scoping': 'off',
    //'unicorn/filename-case': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    //'unicorn/no-fn-reference-in-iterator': 'off',
    //'unicorn/no-null': 'off',
    //'unicorn/no-array-reduce': 'off',
    'unicorn/no-useless-spread': 'off',
    //'unicorn/prefer-node-protocol': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  settings: {'svelte3/typescript': require('typescript')},
};
