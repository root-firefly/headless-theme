import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  extends: ['@remix-run/eslint-config', 'plugin:hydrogen/recommended'],
  rules: {
    'hydrogen/prefer-image-component': 'off',
    'no-useless-escape': 'off',
    'no-case-declarations': 'off',
  },
})
