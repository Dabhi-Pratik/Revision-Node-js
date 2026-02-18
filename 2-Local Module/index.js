// OLD WAY (CommonJS) — using require()
// const {add, sub, multi} = require("./calculate")

// ES MODULE WAY — using import/export


// 👉 Import DEFAULT export (add function)
// Default export can have ANY name while importing

import add from "./calculate.js"


// 👉 Import NAMED exports (sub and multi)
// Named exports MUST use the same function names

import { sub, multi } from "./calculate.js"



// Calling functions with values

const result1 = add(10, 20);      // 10 + 20
const result2 = add(30, 50);      // 30 + 50
const result3 = multi(30, 50);    // 30 × 50

const Substraction = sub(30, 10); // 30 - 10



// Print results to console

console.log("Result1:", result1);
console.log("Result2:", result2);
console.log("Result3:", result3);
console.log("Substraction:", Substraction);
