function execute() {
    const {JSDOM, VirtualConsole} = require('jsdom');
    const vm = require('vm');

    const dom = new JSDOM(
        '<!DOCTYPE html>',
        Object.assign(
          {
            pretendToBeVisual: true,
            runScripts: 'dangerously',
            url: 'about:blank',
            virtualConsole: new VirtualConsole().sendTo(
              console,
            ),
          },
          {},
        ),
    );

    const jsdomGlobal = dom.window.document.defaultView;

    jsdomGlobal.require = require;

    const code = `
    const compare = require('./compare');
    compare();
    `;


    const script = new vm.Script(code);
    dom.runVMScript(script);
}

module.exports = execute;

if (!module.parent) {
    execute();
}