const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(nums) {
  let output = 0
	nums.forEach(element => output += element);
  return output
};

const multiply = function(nums) {
  let output = 1
	nums.forEach(element => output *= element);
  return output
};

const power = function(num1, num2) {
  return Math.pow(num1,num2)
};

const factorial = function(input) {
	let output = 1
  if (input === 0){
    output = 1
  }
  else{
    for(i=input; i > 1; i--){
      output *= i
    }
  }
  return output
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
