module.exports = {
    transformIgnorePatterns: ['/node_modules/(?!axios)/'],
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^axios$': '<rootDir>/__mocks__/axios.js',
      },
      preset: "@vue/cli-plugin-unit-jest",
    transformIgnorePatterns: ["node_modules/(?!axios)"],
  };

