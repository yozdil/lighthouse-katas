const conditionalSum = function(values, condition) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    // In this loop where we iterate through array elements we want to see if a given number is odd or even
    // At the same time if the condition is met. If one of the conditions in our two part equates to true then we add the value to the sum variable.
    if ((condition === 'even' && values[i] % 2 === 0) || (condition === 'odd' && values[i] % 2 !== 0)) {
      sum += values[i]; 
    } 
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));