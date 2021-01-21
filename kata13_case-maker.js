const makeCase = function (input, caseToMake) {
  let modifiedInput = input;
  let numArray = new Array;
  let modCases = new Array;
  // All the functions
  function camel(data) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i] === ' ') {
        output += data[i + 1].toUpperCase();
        i++;
      } else {
        output += (data[i]);
      }
    }
    return output
  }
  function pascal(data) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i] === ' ') {
        output += data[i + 1].toUpperCase();
        i++;
      } else {
        output += (data[i]);
      }
    }
    output = output.charAt(0).toUpperCase() + output.slice(1);
    return output;
  }
  function snake(data) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i] === ' ') {
        output += "_";
      } else {
        output += (data[i]);
      }
    }
    return output;
  }
  function kebab(data) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i] === ' ') {
        output += "-";
      } else {
        output += (data[i]);
      }
    }
    return output;
  }
  function title(data) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i] === ' ') {
        output += " " + data[i + 1].toUpperCase();
        i++;
      } else {
        output += (data[i]);
      }
    }
    output = output.charAt(0).toUpperCase() + output.slice(1);
    return output;
  }
  function vowel(data) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
        output += data[i].toUpperCase();
      } else {
        output += (data[i]);
      }
    }
    return output;
  }
  function consonant(data) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i] !== 'a' && data[i] !== 'e' && data[i] !== 'i' && data[i] !== 'o' && data[i] !== 'u') {
        output += data[i].toUpperCase();
      } else {
        output += (data[i]);
      }
    }
    return output;
  }
  function upper(data) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      output += data[i].toUpperCase();
    }
    return output;
  }
  function lower(data) {
    let output = '';
    for (let i = 0; i < data.length; i++) {
      output += data[i].toLowerCase();
    }
    return output;
  }

  // The function decider
  function funcDecider(data) {
    switch (data) {
      case "camel":
        modifiedInput = camel(modifiedInput);
        break;
      case "pascal":
        modifiedInput = pascal(modifiedInput);
        break;
      case "snake":
        modifiedInput = snake(modifiedInput);
        break;
      case "kebab":
        modifiedInput = kebab(modifiedInput);
        break;
      case "title":
        modifiedInput = title(modifiedInput);
        break;
      case "vowel":
        modifiedInput = vowel(modifiedInput);
        break;
      case "consonant":
        modifiedInput = consonant(modifiedInput);
        break;
      case "upper":
        modifiedInput = upper(modifiedInput);
        break;
      case "lower":
        modifiedInput = lower(modifiedInput);
        break;
    }
    return modifiedInput;
  }

  if (typeof caseToMake == 'string') {
    return funcDecider(caseToMake);
  } else {
    // First we apply hierarchy to our array of cases
    for (let i = 0; i < caseToMake.length; i++) {
      switch (caseToMake[i]) {
        case "camel":
          numArray.push(1);
          break;
        case "pascal":
          numArray.push(2);
          break;
        case "snake":
          numArray.push(3);
          break;
        case "kebab":
          numArray.push(4);
          break;
        case "title":
          numArray.push(5);
          break;
        case "vowel":
          numArray.push(6);
          break;
        case "consonant":
          numArray.push(7);
          break;
        case "upper":
          numArray.push(8);
          break;
        case "lower":
          numArray.push(9);
          break;
      }
    }
    numArray.sort();

    for (let j = 0; j < numArray.length; j++) {
      switch (numArray[j]) {
        case 1:
          modCases.push("camel");
          break;
        case 2:
          modCases.push("pascal");
          break;
        case 3:
          modCases.push("snake");
          break;
        case 4:
          modCases.push("kebab");
          break;
        case 5:
          modCases.push("title");
          break;
        case 6:
          modCases.push("vowel");
          break;
        case 7:
          modCases.push("consonant");
          break;
        case 8:
          modCases.push("upper");
          break;
        case 9:
          modCases.push("lower");
          break;
      }
    }
    // Finally this applies the function to a given array of cases.
    for (let i = 0; i < modCases.length; i++) {
      funcDecider(modCases[i]);
    }
    return modifiedInput;
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));