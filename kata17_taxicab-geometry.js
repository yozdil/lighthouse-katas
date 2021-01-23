const blocksAway = function (directions) {
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
  // console.log(direction);
  // console.log(amount);

  let arr = [1, 1];
  let dir = ['east', 'north'];
  if (direction[0]==='left') {
    dir.reverse();
  }

  for (let i = 0; i < direction.length; i++) {
    if (direction[i] === "right") {
      output[dir[0]] += amount[i] * arr[0];
      if (direction[i + 1] === "right") {
        arr[1] *= -1;
      }
    } else {
      output[dir[0]] += amount[i] * arr[0];
      if (direction[i + 1] === "left") {
        arr[1] *= -1;
      }
    }
    arr.reverse();
    dir.reverse()
  }
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "left", 1, "right", 1, "right", 1, "right", 1, "left", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
