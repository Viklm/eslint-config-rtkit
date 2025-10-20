// eslint
export default {
  // https://eslint.org/docs/latest/rules/padding-line-between-statements
  'padding-line-between-statements': [
    'error',
    {'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*'},
    {'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var']},
    {'blankLine': 'always', 'prev': '*', 'next': 'return'}
  ],
  // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
  'no-multiple-empty-lines': ['error'],
  // https://eslint.org/docs/latest/rules/prefer-arrow-callback
  'prefer-arrow-callback': 'off',
  // https://eslint.org/docs/latest/rules/no-console
  'no-console': ['error', {'allow': ['warn', 'info', 'error']}],
  // https://eslint.org/docs/latest/rules/no-debugger
  'no-debugger': 'warn',
  // https://eslint.org/docs/latest/rules/no-eval
  'no-eval': 'off',
  // https://eslint.org/docs/latest/rules/no-shadow
  'no-shadow': 'error',
  // https://eslint.org/docs/latest/rules/no-undef
  'no-undef': 'off',
  // https://eslint.org/docs/latest/rules/prefer-const
  'prefer-const': 'error',
  // https://eslint.org/docs/latest/rules/no-restricted-exports
  'no-restricted-exports': 'off',
  // https://eslint.org/docs/latest/rules/camelcase
  camelcase: 'error',
};
