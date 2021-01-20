const talkingCalendar = function (date) {
  let day = date[8] + date[9];
  let month = date[5] + date[6];
  // Year will go into our final message as is
  let year = date[0] + date[1] + date[2] + date[3];
  // The day
  for (let i = 0; i <= 31; i++) {
    // Here we use abstract equality to see if our string is equal to a number
    if (i == day) {
      if (i === 1 || i === 21 || i === 31) {
        day = `${i}st`
      } else if (i === 2 || i === 22) {
        day = `${i}nd`
      } else if (i === 3 || i === 23) {
        day = `${i}rd`
      } else {
        day = `${i}th`
      }
    }
  }
  // The month
  switch (month) {
    case '01':
      month = "January";
      break;
    case '02':
      month = "February";
      break;
    case '03':
      month = "March";
      break;
    case '04':
      month = "April";
      break;
    case '05':
      month = "May";
      break;
    case '06':
      month = "June";
      break;
    case '07':
      month = "July";
      break;
    case '08':
      month = "August";
      break;
    case '09':
      month = "September";
      break;
    case '10':
      month = "October";
      break;
    case '11':
      month = "November";
      break;
    case '12':
      month = "December";
      break;
  }
  return month + " " + day + ", " + year
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));