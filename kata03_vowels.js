const numberOfVowels = function (data) {
  let sum = 0;
  for (let i of data) {
    // As we iterate through the array (our word in this case) if it's a vowel sum goes 1 up.
    if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
      sum++;
    }
  }
  return sum;
};

console.log(numberOfVowels("orange")); //3
console.log(numberOfVowels("lighthouse labs")); //5
console.log(numberOfVowels("aeiou")); //5