module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'always'], // 要求使用分号结束
    quotes: ['error', 'single'], // 强制单引号
    indent: ['error', 2], // 代码缩进4
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    'generator-star-spacing': 'off',
    'no-var': 'error' // 不能用var申明
  }
}
