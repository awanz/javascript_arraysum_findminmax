/*
  learn javascript
  https://www.w3schools.com/js/default.asp

  console
  https://www.w3schools.com/jsref/obj_console.asp

  variable
  https://www.w3schools.com/js/js_variables.asp

  assign
  https://www.w3schools.com/js/js_assignment.asp

  js array 
  https://www.w3schools.com/js/js_arrays.asp

  js length
  https://www.w3schools.com/jsref/jsref_length_string.asp

  operator
  https://www.w3schools.com/js/js_operators.asp
  https://www.w3schools.com/jsref/jsref_operators.asp

  arithematic
  https://www.w3schools.com/js/js_arithmetic.asp

  loop
  https://www.w3schools.com/js/js_loop_while.asp

  math
  https://www.w3schools.com/js/js_math.asp

*/

// 1. make variable array of number
const arrayNumber = [1,2,3,4,5];
let totalNumber = [];

// 2. operation sum of number with loop
let i = 0;

while(i < arrayNumber.length){
  let j = 0;
  let sum = 0;
  while(j < arrayNumber.length){
    if(i !== j){
      sum = sum + arrayNumber[j];
    }
    j++;
  }
  totalNumber[i] = sum;
  sum = 0;
  j = 0;
  i++;
}

// find max and min number of array
const minNumber = Math.min(...totalNumber);
const maxNumber = Math.max(...totalNumber);

console.log("Input: " + arrayNumber);
console.log("Output: " + minNumber + ", " + maxNumber);