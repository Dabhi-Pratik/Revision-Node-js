// OLD WAY (CommonJS exports)
// module.exports = { add, sub, multi };


// 👉 ADDITION FUNCTION (Default Export)
function add(a, b) {
    return a + b;
}


// 👉 SUBTRACTION FUNCTION (Named Export)
function sub(a, b) {
    return a - b;
}


// 👉 MULTIPLICATION FUNCTION (Named Export)
function multi(a, b) {
    return a * b;
}


// 👉 Export default function
// Only ONE default export allowed per file

export default add;


// 👉 Export named functions
// You can export many named functions

export { sub, multi };
