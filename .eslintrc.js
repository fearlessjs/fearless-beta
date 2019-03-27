module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['standard', 'plugin:security/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  plugins: ['security'],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {}
}