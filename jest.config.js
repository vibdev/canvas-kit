module.exports = {
  rootDir: '.',
  setupTestFrameworkScriptFile: '<rootDir>/jest/setupTests.ts',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/canvas-kit-react-page-header/**/*.{tsx}', // Needs to be changed as we add unit tests to other modules
    '**/canvas-kit-react-icon/**/*.{tsx}', // Needs to be changed as we add unit tests to other modules
    '**/canvas-kit-react-button/**/*.{tsx}', // Needs to be changed as we add unit tests to other modules
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
