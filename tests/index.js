const assert = require('assert');
const { greet, __getString, __newString } = require('..');
assert.strictEqual(__getString(greet()), 'Hello, World!');
// This needs --exportRuntime, but I couldn't get it working.
// const name = __newString('you');
// assert.strictEqual(__getString(greet(name)), 'Hello, you!');
console.log('ok');
