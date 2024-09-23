//-------Chapter 38 to 42 -------//
//--------Question 1 --------//

function power(a, b) {
  return Math.pow(a, b);
}

document.write(power(2, 3));  // Output: 8


//----------Question 2 ------------//


function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return "Leap year";
  } else {
    return "Not leap year";
  }
}

var year = parseInt(prompt("Enter year:"));
document.write(isLeapYear(year));


//-----------Question 3 ---------//


function calculateS(a, b, c) {
  return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
  var S = calculateS(a, b, c);
  return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

var a = parseInt(prompt("Enter side a:"));
var b = parseInt(prompt("Enter side b:"));
var c = parseInt(prompt("Enter side c:"));
document.write("Area: " + calculateArea(a, b, c));


//-----------Quesation 4 ----------//


function calculateAverage(marks1, marks2, marks3) {
  return (marks1 + marks2 + marks3) / 3;
}

function calculatePercentage(marks1, marks2, marks3) {
  var average = calculateAverage(marks1, marks2, marks3);
  return (average / 100) * 100;
}

function mainFunction() {
  var marks1 = parseInt(prompt("Enter marks 1:"));
  var marks2 = parseInt(prompt("Enter marks 2:"));
  var marks3 = parseInt(prompt("Enter marks 3:"));
  var average = calculateAverage(marks1, marks2, marks3);
  var percentage = calculatePercentage(marks1, marks2, marks3);
  document.write("Average: " + average + ", Percentage: " + percentage);
}

mainFunction();


//------------Question 5 ---------//


function customIndexOf(str, char) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

document.write(customIndexOf("hello", "l")); 


//------------Question 6 ---------//

function deleteVowels(sentence) {
  var vowels = "aeiouAEIOU";
  var result = "";
  for (var i = 0; i < sentence.length; i++) {
    if (vowels.indexOf(sentence[i]) === -1) {
      result += sentence[i];
    }
  }
  return result;
}

document.write(deleteVowels("hello world"));


//------------Question 7 ----------//

function countVowel(sentence) {
    var count = 0;
    var vowels = ["aa", "ee", "ii", "oo", "uu", "ae", "ea", "ai", "ia", "oi", "io", "ua", "au"];
    
    for (var i = 0; i < sentence.length - 1; i++) {
      var pair = sentence[i].toLowerCase() + sentence[i + 1].toLowerCase();
      if (vowels.includes(pair)) {
        count++;
      }
    }
    
    return count;
  }
  
  var sentence = "Pleases read this application and give me gratuity";
  document.write(countVowel(sentence));  
  
  //-------------Question 8 ----------//

  // Function to convert km to meters
function kmToMeters(km) {
    return km * 1000;
  }
  
  // Function to convert km to feet
  function kmToFeet(km) {
    return km * 3280.84;
  }
  
  // Function to convert km to inches
  function kmToInches(km) {
    return km * 39370.1;
  }
  
  // Function to convert km to centimeters
  function kmToCentimeters(km) {
    return km * 100000;
  }
  
  function main() {
    var km = parseFloat(prompt("Enter distance in km:"));
    
    document.write(km + " km is equal to:<br>");
    document.write(kmToMeters(km) + " meters<br>");
    document.write(kmToFeet(km) + " feet<br>");
    document.write(kmToInches(km) + " inches<br>");
    document.write(kmToCentimeters(km) + " centimeters<br>");
  }
  
  main();
  
  //-----------Question 9 ----------//


function calculateOvertimePay(hoursWorked) {
    var overtimeRate = 12;
    var standardHours = 40;
  
    if (hoursWorked <= standardHours) {
      return 0;
    } else {
      var overtimeHours = hoursWorked - standardHours;
      return overtimeHours * overtimeRate;
    }
  }
  
  // Main function
  function main() {
    var hoursWorked = parseInt(prompt("Enter hours worked:"));
    var overtimePay = calculateOvertimePay(hoursWorked);
  
    document.write("Hours worked: " + hoursWorked + "<br>");
    document.write("Overtime pay: Rs. " + overtimePay);
  }
  
  main();

//------------Question 10 ----------//

// Function to calculate currency notes
function calculation(amount) {
    var notes = [100, 50, 10];
    var result = [0, 0, 0];
  
    for (var i = 0; i < notes.length; i++) {
      result[i] = Math.floor(amount / notes[i]);
      amount %= notes[i];
    }
  
    return result;
  }
  
  // Main function
  function main() {
    var amount = parseInt(prompt("Enter amount to withdraw:"));
  
    var [hundred, fifty, ten] = calculation(amount);
  
    document.write("Amount: " + amount + "<br>");
    document.write("Currency Notes:<br>");
    document.write("100: " + hundred + "<br>");
    document.write("50: " + fifty + "<br>");
    document.write("10: " + ten);
  }
  
  main();
  
  
  