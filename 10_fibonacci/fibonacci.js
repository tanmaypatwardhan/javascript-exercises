const fibonacci = function(n) {
    if(typeof n === "string") n = parseInt(n);
    if(n < 0) return "OOPS";
    if(n === 1 || n === 2) return 1;
    else return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci("10"));

// Do not edit below this line
module.exports = fibonacci;
