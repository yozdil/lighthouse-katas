const camelCase = function (input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      // Here if we come across a space we add the next character of our string
      // in upper case. We also add 1 to our iteration so that we avoid
      // re-adding that same number.
      output += input[(i + 1)].toUpperCase();
      i++;
    } else {
      output += input[i];
    }
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));