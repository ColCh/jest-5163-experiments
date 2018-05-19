function execute () {
    const vm = require('vm');

    const code = `
    const compare = require('./compare');
    compare();
    `;

    const script = new vm.Script(code);

    const ctx = vm.createContext();
    ctx.require = require;
    script.runInContext(ctx);
    // script.runInNewContext(ctx);
}

module.exports = execute;

if (!module.parent) {
    execute();
}