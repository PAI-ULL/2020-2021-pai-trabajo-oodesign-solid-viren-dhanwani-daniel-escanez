module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
  },
  'parser': 'babel-eslint',
  'rules': {
    'max-len': [
      'error', {'code': 90, 'ignorePattern': '\\s.+=\\s*require\\s*\\(|console.log'},
    ],
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'space-infix-ops': [
      'error',
      {'int32Hint': false},
    ],
    'eqeqeq': [
      'error',
      'always',
    ],
  },
};
