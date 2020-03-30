module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'function-paren-newline': 'multiline'
  }
};
