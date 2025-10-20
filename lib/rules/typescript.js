// @typescript-eslint-*
export default {
  // https://typescript-eslint.io/rules/array-type
  '@typescript-eslint/array-type':'off',
  // https://typescript-eslint.io/rules/consistent-type-definitions/
  '@typescript-eslint/consistent-type-definitions': 'off',
  // https://typescript-eslint.io/rules/no-unused-vars/
  '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
  // https://typescript-eslint.io/rules/no-unused-expressions/
  '@typescript-eslint/no-unused-expressions': 'off',
  // https://typescript-eslint.io/rules/typescript-eslint/ban-ts-comment/
  '@typescript-eslint/ban-ts-comment': 'off',
  // https://typescript-eslint.io/rules/typescript-eslint/no-empty-function/
  '@typescript-eslint/no-empty-function': 'off',
  // https://typescript-eslint.io/rules/typescript-eslint/no-empty-object-type/
  '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
  // https://typescript-eslint.io/rules/typescript-eslint/class-literal-property-style/
  '@typescript-eslint/class-literal-property-style': 'off',
  // https://typescript-eslint.io/rules/typescript-eslint/consistent-indexed-object-style/
  '@typescript-eslint/consistent-indexed-object-style': 'off',
}
