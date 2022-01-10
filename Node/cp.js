// Child process module is a node module which is used to create sub process inside a script

const cp = require('child_process');

//console.log('Trying to open calculator with child Process')

// cp.execSync('calc')

// console.log('Calculator open')

// console.log('Trying to open vs code')
// cp.execSync('code')
// console.log('vs code open')

let output = cp.execSync("node test.js");
console.log('Output is'+ output);