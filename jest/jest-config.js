module.exports = {
  rootDir: '..',
  setupTestFrameworkScriptFile: './jest/setupTests.ts',
  verbose: true,
  bail: false,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/canvas-kit-react-button/**/*.{tsx}',
    '!**/build/**',
    '!**/spec/**',
    '!**/jest/*',
    '!**/common/**',
    '!**/index.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/*.d.ts',
    '!**/stories.{ts,tsx,js,jsx}',
  ],
  coverageDirectory: './build/reports/jest',
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
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@workday/canvas-kit-react-core)'],
  moduleDirectories: ['node_modules'],
  snapshotSerializers: ['jest-emotion/serializer'],
  testMatch: ['**/?(*.)+(spec|test|snapshot).ts?(x)'],
  clearMocks: true,
  reporters: ['default', 'jest-junit'],
  testURL: 'http://localhost',
  preset: 'ts-jest',
};
