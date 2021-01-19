const multiplicationTable = function (maxValue) {
  table = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      // We want all the values printed to our row, and depending on the column
      // whole row values are multiplied with.
      table += (j * i + " ")
    }
    // Before re strating our row we skip to a new line
    table += "\n"
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));