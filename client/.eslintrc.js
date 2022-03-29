/**
 * https://eslint.org/docs/rules/
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['warn'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
  parserOptions: {
    ecmaVersion: 11 /* dynamic import 지원 */,
  },
};
