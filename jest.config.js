module.exports = {
    verbose: true,
    moduleFileExtensions: [
        'js',
        'json',
        'vue',
    ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '<rootDir>/node_modules/',
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,vue}',
        '!**/node_modules/**',
    ],
};
