module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  rules: {
    semi: ['error', 'always'],
    'semi-style': ['error', 'last'],
    quotes: ['error', 'single'],
    '@typescript-eslint/no-extra-semi': 'off',
    'react/prop-types': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': ['error', { code: 120, tabWidth: 2, ignoreUrls: true, ignoreComments: true }],
    'max-statements-per-line': ['error', { max: 1 }],
    'eol-last': ['error', 'always'],
  }
};
