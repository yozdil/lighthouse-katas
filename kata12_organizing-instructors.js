const organizeInstructors = function (instructors) {
  let organized = new Object;
  for (let instructor of instructors) {
    let instArr = new Array;
    for (let j = 0; j < instructors.length; j++) {
      // In our nested loop the course value will be verified if it is equal to
      // any other course value. If true the name of the corresponding instructor is pushed into our array.
      if (instructor.course === instructors[j].course) {
        instArr.push(instructors[j].name);
      }
    }
    // Here we define the new key 'course' to the array of values 'instructors.
    // The instArr array is set to 0 at the beginning of out loop.
    organized[instructor.course] = instArr;
  }
  return organized;
}

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));