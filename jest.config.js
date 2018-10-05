module.exports = {
  rootDir: '.',
  setupTestFrameworkScriptFile: '<rootDir>/jest/setupTests.ts',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/canvas-kit-react-button/**/*.{tsx}', // Needs to be changed as we add unit tests to other modules
    '!**/index.{ts,tsx,js,jsx}',
    '!**/stories.{ts,tsx,js,jsx}',
  ],
  coverageDirectory: '<rootDir>/build/reports/jest',
  coverageThreshold: {
    global: {
      branches: 97,
      functions: 97,
      lines: 97,
      statements: 97,
    },
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  // TODO: when jest-emotion goes to next patch version ^9.2.12
  // this line changes => snapshotSerializers: ['jest-emotion']
  // see README for 9.2.12: https://github.com/emotion-js/emotion/tree/v9.2.12/packages/jest-emotion#snapshot-serializer
  snapshotSerializers: ['jest-emotion/serializer'],
  testMatch: ['**/?(*.)+(spec|test|snapshot).ts?(x)'],
  clearMocks: true,
  reporters: ['default', 'jest-junit'],
  testURL: 'http://localhost',
};
