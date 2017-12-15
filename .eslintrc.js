const path = require('path')
const pkgJson = require(__dirname + '/package.json')

function getCoreModules() {
  const devPackages = Object.keys(pkgJson.devDependencies)
  const packages = Object.keys(pkgJson.dependencies)
  return Object.assign(devPackages, packages)
}

module.exports = {
  parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['airbnb'],
  plugins: ['jsx-a11y', 'react', 'import'],
  rules: {
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    semi: ['error', 'never'],
    'import/extensions': ['error', 'never', { tsx: 'never', ts: 'never' }],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/core-modules': getCoreModules(),
    'import/parsers': {
      'typescript-eslint-parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: true,
      [require.resolve('eslint-import-resolver-typescript')]: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
}
