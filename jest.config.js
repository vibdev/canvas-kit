module.exports = {
  rootDir: '.',
  setupTestFrameworkScriptFile: '<rootDir>/jest/setupTests.ts',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/canvas-kit-react-avatar/**/*.{tsx}',
    '**/canvas-kit-react-button/**/*.{tsx}',
    '**/canvas-kit-react-card/**/*.{tsx}',
    // '**/canvas-kit-react-common/**/*.{tsx}',
    '**/canvas-kit-react-cookie-banner/**/*.{tsx}',
    '**/canvas-kit-react-fat/**/*.{tsx}',
    // '**/canvas-kit-react-fonts/**/*.{tsx}',
    '**/canvas-kit-react-icon/**/*.{tsx}',
    '**/canvas-kit-react-page-header/**/*.{tsx}',
    '**/canvas-kit-react-table/**/*.{tsx}',
    '**/canvas-kit-react-toggle/**/*.{tsx}',
    '**/canvas-kit-react-loading-animation/**/*.{tsx}',
    '**/canvas-kit-react-page-header/**/*.{tsx}', // Needs to be changed as we add unit tests to other modules
    '**/canvas-kit-react-header/**/*.{tsx}', // Needs to be changed as we add unit tests to other modules
    '**/canvas-kit-react-icon/**/*.{tsx}', // Needs to be changed as we add unit tests to other modules
    '**/canvas-kit-react-button/**/*.{tsx}', // Needs to be changed as we add unit tests to other modules
    '!**/index.{ts,tsx,js,jsx}',
    '!**/stories*.{ts,tsx,js,jsx}',
  ],
  coverageReporters: ['text', 'clover', 'html'],
  coverageDirectory: '<rootDir>/build/reports/jest',
  coverageThreshold: {
    global: {
      branches: 97,
      functions: 97,
      lines: 97,
      statements: 97,
    },
  },
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
      tsConfig: {
        allowJs: true,
        esModuleInterop: true,
      },
    },
  },
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json'],
  snapshotSerializers: ['jest-emotion/serializer'],
  testMatch: ['**/?(*.)+(spec|test|snapshot).ts?(x)'],
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es/.*)'],
  clearMocks: true,
  reporters: ['default', ['jest-junit', {suiteName: 'Canvas Kit React tests'}]],
  testURL: 'http://localhost',
};
