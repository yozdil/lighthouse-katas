let prompt = require('prompt-sync')();
let randomNum = Math.floor(Math.random() * 100) + 1; //So we do not count 0 as a random number.
let tries = [];
let eureka = false;
// THe following function will verify if the answer is already in our array of
// previous answers.
function alreadyGuessed(answer, tries) {
  for (let i = 0; i < tries.length; i++) {
    if (answer === tries[i]) {
      return true;
    }
  }
  return false;
}

while (!eureka) {
  let answer = prompt("Guess a number: ");
  answer = Number(answer);
  if (isNaN(answer)) {
    console.log('Not a number! Try again');
  } else if (alreadyGuessed(answer, tries)) {
    console.log("Already Guessed!");
  } else if (answer === randomNum) {
    eureka = true;
    tries.push(answer);
    console.log(`You got it! You took ${tries.length} attempts`);
  } else if (answer < randomNum) {
    tries.push(answer);
    console.log('Too low!');
  } else if (answer > randomNum) {
    tries.push(answer);
    console.log('Too high!');
  }
}
