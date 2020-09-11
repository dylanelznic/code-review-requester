module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest',
  roots: ['<rootDir>/test'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)[jt]s?(x)'],
};
