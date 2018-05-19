#!/bin/sh

set -x;

sh -c 'node vm-context-compare.js';
sh -c 'node jsdom-compare.js';
sh -c 'node compare.js';
sh -c 'node compare-in-node-jest-env.js';
sh -c 'node ./node_modules/jest/bin/jest.js';
sh -c 'node ./node_modules/jest/bin/jest.js --env jsdom';
sh -c 'node ./node_modules/jest/bin/jest.js --env node';
sh -c 'node ./node_modules/jest/bin/jest.js --env ./jest-env-this-ctx.js';
sh -c 'node ./node_modules/jest/bin/jest.js --env ./jest-env-plain-ctx.js';


