const squareCode = function (message) {
  // All the spaces inside the message id removed via regex magic <3
  message = message.replace(/\s/g, '');
  // column is the number of characters on each line
  let column = Math.ceil(Math.sqrt(message.length));
  let output = new String;
  // This loop re introduces spaces in between characters for the column number.
  for (let i = 0; i < message.length; i++) {
    if (i !== 0 && i % column === 0) {
      output += (" " + message[i]);
    } else {
      output += message[i]
    }
  }
  //  We create an array from the string with spaces.
  let array = output.split(" ");
  let reversed = "";
  // The loop iterates through each string's character (also adding a space) and
  // puts it into reversed
  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j][i]) {
        reversed += array[j][i];
      }
    }
    reversed += " "
  }
  return reversed;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


