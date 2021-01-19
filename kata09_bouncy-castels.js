// Use the value below whenever you need the value of Pi. For this exercise in
// order to calculate a number to the power of another number Math.pow was used
const PI = 3.14159;

const sphereVolume = function (radius) {
  return Math.pow(radius, 3) * PI * (4 / 3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return Math.pow(radius, 2) * height * PI * (1 / 3);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let volume = 0;

  for (const shape of solids) {
    if (shape.type === 'sphere') {
      volume += sphereVolume(shape.radius);
    } else if (shape.type === 'cone') {
      volume += coneVolume(shape.radius, shape.height);
    } else {
      volume += prismVolume(shape.height, shape.width, shape.depth);
    }
  }
  return volume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);