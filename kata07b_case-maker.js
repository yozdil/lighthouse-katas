const camelCase = function (data) {
  let output = "";
  let input = data;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
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