const urlEncode = function (text) {
  let trimmed = text.trim();
  let encoded = "";
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