const sumLargestNumbers = function(data) {
  let largestNum = 0, secondLargestNum = 0;
  // This loop gives us the largest number inside of a given array
    for (i=0; i<data.length; i++){
      if (data[i]>largestNum) {
        largestNum = data[i];}}
  // We create a new array taking out the lasrgest number 
  data.splice(data.indexOf(largestNum),1);
  // We run another loop to find the second largest number
    for (j=0; j<data.length; j++){
      if (data[j]>secondLargestNum) {
        secondLargestNum = data[j];}}
  // We now add the 1st and the 2nd lasrgest numbers in that array and return it back to us
  return largestNum + secondLargestNum;        
};

console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //126