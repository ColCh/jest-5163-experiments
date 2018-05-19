module.exports = function () {
    const NodeEnvironment = require('jest-environment-node');
    const config = {
        testEnvironmentOptions: {},
        globals: {
            console: console,
        },
        console: console,
    };
    const environment = new NodeEnvironment(config);

    return environment;
};