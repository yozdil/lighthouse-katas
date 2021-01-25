const conditionalSum = (array, condition) => {
  if (condition === "even") {
    return array
      .filter((num) => num % 2 === 0)
      .reduce((a, b) => {
        return a + b;
      });
  } else {
    return array
      .filter((num) => num % 2 > 0)
      .reduce((a, b) => {
        return a + b;
      }, 0);
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
