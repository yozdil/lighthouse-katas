const checkAir = function (samples, threshold) {
  let dirtyCount = 0;
  // This loop will get the count of dirty sample in a given array of samples
  for (const sample of samples) {
    if (sample === 'dirty') {
      dirtyCount++;
    }
  }
  // Now we compare the amount of dirty samples in our array to the threshold given and decide if Polluted or Clean
  if ((dirtyCount / samples.length) >= threshold) {
    return "Polluted"
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))