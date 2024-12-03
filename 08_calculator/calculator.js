const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(nums) {
  let sum = 0;
	for(let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

const multiply = function(nums) {
  let product = 1;
	for(let i = 0; i < nums.length; i++) {
    product = product * nums[i];
  }
  return product;
};

const power = function(a, x) {
	let result = 1;

  for (let i = 0; i < x; i++) {
    result = result * a;
  }

  return result;
};

const factorial = function(a) {
  let result = 1;
  
  for (let i = 1; i <= a; i++ ) {
    result = result * i;
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
