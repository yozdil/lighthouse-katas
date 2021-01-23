let prompt = require('prompt-sync')();
let randomNum = Math.floor(Math.random() * 100) + 1; //So we do not count 0 as a random number.
let tries = [];
let eureka = false;
// The following function will verify if the answer is already in our array of
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
  // Prompt brings us back a number but it's in string format so if the entered
  // prompt is a number it will become a real number. If it was a string not
  // ressembling a number this will simply not function. So for our first if
  // statement we can verify if indeed we are dealing with a number or not.
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
