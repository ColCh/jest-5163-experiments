# What is this?

Repo for experimenting on global variable lookup performance inside of Nodejs VM context

# How to launch yourself

`compare-all.sh`

# Results?

|      exp label                |      time        |
|---------------------|------------|
| vm-context-compare.js	|	76 |
| jsdom-compare.js	|	84 |
| compare.js	|	84 |
| compare-in-node-jest-env.js	|	73 |
| jest	|	934 |
| jest --env jsdom	|	1520 |
| jest --env node	|	881 |
| jest --env ./jest-env-this-ctx.js	|	73 |
| jest --env ./jest-env-plain-ctx.js	|	894 |

