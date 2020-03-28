module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    mocha: true,
    'jest/globals': true,
    'cypress/globals': true,
    es6: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest', 'cypress', 'mocha', 'vue'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
    'mocha/no-exclusive-tests': 'error',
  },
};
