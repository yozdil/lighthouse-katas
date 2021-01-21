const calculateChange = function (total, cash) {
  let array = []
  // We create two arrays for the denominations: one in number value, the other
  // in string representation
  let denomNum = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let denomText = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny'];
  let change = (cash % total)
  for (let i = 0; i < denomNum.length; i++) {
    // This if statement checks if the change divided by the denomination is greater than 0. 
    // e.g For 34$ I have one $20, so it would be true.
    if ((((change - (change % denomNum[i])) / denomNum[i])) > 0) {
      // Here we bring in the denomText so I push in e.g array ['twoDollar',
      // (how many)]. Later on I take away the number of denominations away from my change to continue my loop.
      array.push([denomText[i], (change - (change % denomNum[i])) / denomNum[i]]);
      change -= denomNum[i] * (change - (change % denomNum[i])) / denomNum[i];
    }
  }
  // From my array of multiple arrays with only two elements inside: I create an
  // object using first value as the property and the second as the value
  return Object.fromEntries(new Map(array));
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));