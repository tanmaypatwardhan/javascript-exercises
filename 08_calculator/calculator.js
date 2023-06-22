const add = function(a, b) {
  return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(arr) {
  let result = arr.reduce((total, num) => total + num, 0);
  return result;
};

const multiply = function(...args) {
  let result = 1;
  for(let i = 0; i < args.length ; i++) {
    result*=args[i];
  }

  return result;
};

const power = function(a , b) {
  return a ** b;
};

const factorial = function(a) {
	let result = 1;
  for(let i = a; i >= 1; i--) {
    result*=i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
