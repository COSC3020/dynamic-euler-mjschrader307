const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync("code.js") + "");

assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);

// Same thing, using new functions
assert(factorial_alt(10) === 3628800);
assert(e_alt(10) === 2.7182818011463845);

// Base case
assert(factorial_alt(0) === 1);
assert(e_alt(0) === 1);
