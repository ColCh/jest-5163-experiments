
function execute () {
    const environment = require('./get-jest-node-env')();

    const code = `
    ({function(module,exports,require,__dirname,__filename,global,jest){const compare = require('./compare.js');
    compare();
    }});
    `;

    const script = new (require('vm').Script)(code);

    const wrapper = environment.runScript(script)['function'];
    wrapper(
        {},
        {},
        require,
        "",
        "",
        environment.global,
        {}
    );
};

module.exports = execute;

if (!module.parent) {
    execute();
}