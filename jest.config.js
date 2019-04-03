module.exports = {
  rootDir: '.',
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'modules/**/*.{tsx,}',
    '!**/canvas-kit-react-common/**/InputProviderDecorator.tsx',
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
  moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json'],
  snapshotSerializers: ['jest-emotion/serializer'],
  testMatch: ['**/?(*.)+(spec|test|snapshot).ts?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  clearMocks: true,
  reporters: ['default', ['jest-junit', {suiteName: 'Canvas Kit React tests'}]],
  testURL: 'http://localhost',
};
