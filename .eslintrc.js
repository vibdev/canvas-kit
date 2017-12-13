const pkgJson = require(__dirname + '/package.json')

function getCoreModules() {
  const devPackages = Object.keys(pkgJson.devDependencies)
  const packages = Object.keys(pkgJson.dependencies)
  return Object.assign(devPackages, packages)
}

module.exports = {
  parser: 'typescript-eslint-parser',
  extends: 'airbnb',
  plugins: ['import', 'jsx-a11y', 'react'],
  rules: {
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    semi: ['error', 'never'],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/core-modules': getCoreModules(),
    'import/parsers': {
      'typescript-eslint-parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: true,
      'eslint-import-resolver-typescript': true,
    },
  },
}
