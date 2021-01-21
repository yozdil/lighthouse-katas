const urlDecode = function (text) {
  let modifText = new String;
  let entriesArray = new Array;
  // In this first loop we convert %20 into " " for a given string.
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "%") {
      modifText += " ";
      i += 2;
    } else {
      modifText += (text[i]);
    }
  }
  // array gives us the array of values seperates by &.
  let array = modifText.split("&");
  for (let j = 0; j < array.length; j++) {
    // Following line of code in a loop gives us an array of [key1, value1],
    // [key2, value2], etc ..
    entriesArray.push(array[j].split("="));
  }
  // The entriesArray gets Mapped and we create our object.
  return Object.fromEntries(new Map(entriesArray));
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);