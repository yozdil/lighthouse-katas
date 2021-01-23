const blocksAway = function (directions) {
  // First thing first this function WILL fail and show the wrong result if a
  // complicated path is given where the taxi does loops. The path of the taxi
  // should never intersect an already traversed path
  let direction = new Array;
  let amount = new Array;
  let output = { east: 0, north: 0 };
  // We run a loop to seperate directions from the amount.
  for (let i = 0; i < directions.length; i++) {
    if (typeof directions[i] == 'string') {
      direction.push(directions[i])
    } else {
      amount.push(directions[i])
    }
  }
  // We create two arrays: one to decide if we add the amount value  to east or
  // north, the other is to make sure we get a negative value for the amount
  // travelled depending on the situation
  let arr = [1, 1];
  let cardinal = ['east', 'north'];
  // This if statement deals for the set up of our cardinal directions
  // (cardinal) array. In case if we start with a left we will first go up north
  // so it reverses the order of the cardinal.
  if (direction[0] === 'left') {
    cardinal.reverse();
  }
  // This is the loop where the magic happens. If a certain direction is repeated
  // (direction[i] = direction[i+1]) we store the preceding value (arr[1]) as negative.
  for (let i = 0; i < direction.length; i++) {
    if (direction[i] === "right") {
      output[cardinal[0]] += amount[i] * arr[0];
      if (direction[i + 1] === "right") /*If the next turn is also right*/ {
        arr[1] *= -1;
      }
    } else { //If a left turn is made
      output[cardinal[0]] += amount[i] * arr[0];
      if (direction[i + 1] === "left") /*If the next turn is also left*/ {
        arr[1] *= -1;
      }
    }
    // Whatever our turn is the next step the axis changes so north and east
    // gets switched. An the arr array is also switched, if the preceding value
    // is negative now our current value will be -1 and will be multiplied with
    // our amount travelled for the next iteration of the loop.
    arr.reverse();
    cardinal.reverse()
  }
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));