module.exports = {
    testEnvironment: "jsdom",
    testMatch: ["**/*.test.js"],
    collectCoverageFrom: ["src/js/**/*.js", "!src/js/**/*.test.js"],
    coverageDirectory: "coverage",
    verbose: true
};
