const NodeEnvironment = require('jest-environment-node');

module.exports = class CustomEnvironment extends NodeEnvironment {
  runScript(script) {
    const environment = require('./get-jest-node-env')();
    return environment.runScript(script);
  }
}