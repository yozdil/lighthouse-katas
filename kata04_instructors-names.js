const instructorWithLongestName = function (instructors) {
  // First we create a variable that is an object with a blank name property
  let instObject = { name: "" };
  for (let instructor of instructors) {
    if (instructor.name.length > instObject.name.length) {
      instObject = instructor;
    } else if (instructor.name.length === instObject.length) {
      instObject = instObject;
    }
  }
  return instObject;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));