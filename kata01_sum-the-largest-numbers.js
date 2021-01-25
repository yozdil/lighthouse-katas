const sumLargestNumbers = arr =>
  arr
  // To compare numbers instead of strings, the compare function can subtract b
  // from a. The following function will sort the array in ascending order (if
  // it doesn't contain Infinity and NaN):
    .sort((a, b) => {
      return a - b;
    })
    // The slice() method returns a shallow copy of a portion of an array.
    // Negatvie number takes the last two values in that array.
    .slice(-2)
    // Reduce iterates through the array and returns a single value.
    .reduce((a, b) => {
      return a + b;
    });

console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //126