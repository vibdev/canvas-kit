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
    // '**/canvas-kit-react-header/**/*.{tsx}',
    '**/canvas-kit-react-icon/**/*.{tsx}',
    '**/canvas-kit-react-page-header/**/*.{tsx}',
    '**/canvas-kit-react-table/**/*.{tsx}',
    '**/canvas-kit-react-toggle/**/*.{tsx}',
    '**/canvas-kit-react-loading-animation/**/*.{tsx}',
    '!**/index.{ts,tsx,js,jsx}',
    '!**/stories.{ts,tsx,js,jsx}',
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
    },
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  preset: 'ts-jest/presets/js-with-babel', // Processes JS with babel-jest and TS with ts-jest
  // TODO: when jest-emotion goes to next patch version ^9.2.12
  // this line changes => snapshotSerializers: ['jest-emotion']
  // see README for 9.2.12: https://github.com/emotion-js/emotion/tree/v9.2.12/packages/jest-emotion#snapshot-serializer
  snapshotSerializers: ['jest-emotion/serializer'],
  testMatch: ['**/?(*.)+(spec|test|snapshot).ts?(x)'],
  clearMocks: true,
  reporters: ['default', ['jest-junit', {suiteName: 'Canvas Kit React tests'}]],
  testURL: 'http://localhost',
};
