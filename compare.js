const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');
const fs = require('fs');
const {performance} = require('perf_hooks');

function compare () {

    const rawReceivedImage = PNG.sync.read(fs.readFileSync('./1.png'));
    const rawBaselineImage = PNG.sync.read(fs.readFileSync('./2.png'));

    const imageWidth = rawReceivedImage.width;
    const imageHeight = rawReceivedImage.height;

    const diffImage = new PNG({ width: imageWidth, height: imageHeight });

    const diffConfig = {
        threshold: 0.01,
    };

    const diffPixelCount = pixelmatch(
        rawReceivedImage.data,
        rawBaselineImage.data,
        diffImage.data,
        imageWidth,
        imageHeight,
        diffConfig
    );

    return diffPixelCount;
};

function runCycles (fn, cycles = 1) {
    let time = 0;

    for (let i = 0; i < cycles; i++) {
        const started = performance.now();
        fn();
        const ended = performance.now();
        const delta = ended - started;

        time += delta;
    }

    console.log(`ALL: ${time}, ONE: ${time / cycles}`);
}

// global.Math.max = (a, b) => a > b ? a : b; global.Math.min = (a, b) => b > a ? a : b;

// const Math = global.Math;

function MathGlobalVariableAccess () {
    Math.max(1 , 0);
    Math.max(1.555555, 0);
    Math.min(1, 1.4444);
    Math.min(0, 1);
}

module.exports = () => {
    console.log('START Compare Math variable access');
    runCycles(MathGlobalVariableAccess, 1e6);
    console.log('END Compare Math variable access');


    // console.log('START Compare images');
    // runCycles(compare, 3);
    // console.log('END Compare images');
};

if (!module.parent) {
    module.exports();
}