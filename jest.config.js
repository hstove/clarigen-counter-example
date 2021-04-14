module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@common/(.*)$": "<rootDir>/src/common/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@contracts/(.*)$": "<rootDir>/src/clarion/$1",
  },
};
