const urlEncode = function (text) {
  let trimmed = "", encoded = "";
  // This block checks if there is white space at the first or the last character of the word and eliminates it.
  if (text[(text.length) - 1] === " " && text[0] === " ") {
    trimmed = text.slice(1, (text.length - 1))
  } else if (text[0] === " ") {
    trimmed = text.slice(1);
  } else if (text[(text.length) - 1] === " ") {
    trimmed = text.slice(0, (text.length - 1))
  } else {
    trimmed = text;
  }
  // All the white space inside of the word is changed into %20
  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === " ") {
      encoded += "%20";
    } else {
      encoded += trimmed[i];
    }
  }
  return encoded;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));