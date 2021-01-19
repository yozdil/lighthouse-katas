function repeatNumbers(arr) {
  let output = "";
  if (arr.length <= 1) {
    for (const i of arr) {
      for (let j = 0; j < i[1]; j++) {
        output += i[0];
      }
    }
  } else if (arr.length > 1) {
    for (const i of arr) {
      for (let j = 0; j < i[1]; j++) {
        output += i[0];
      }
      output += ", "
    }
    output = output.slice(0, -2);
  }
  return output;
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));