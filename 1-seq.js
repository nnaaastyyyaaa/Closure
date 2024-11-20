'use strict';

const seq = (f) => (g) => (typeof g === 'number' ? f(g) : seq((x) => f(g(x))));
console.log(seq((x) => x + 5)((x) => x * 10)((x) => x + 4)(7));

module.exports = { seq };
