const NodeEnvironment = require('jest-environment-node');

module.exports = class CustomEnvironment extends NodeEnvironment {
  runScript(script) {
    return script.runInThisContext();
  }
}