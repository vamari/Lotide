// const arraysEqual = function(actual, expected) {
//   if (actual === expected) return true;
//   if (actual == null || expected == null) return false;
//   if (actual.length !== expected.length) return false;
//   for (var i = 0; i < actual.length; ++i) {
//     if (actual[i] !== expected[i]) return false;
//   }
//   return true;
// };

// // TEST CODE
// //assertEqual("Lighthouse Labs", "Bootcamp");
// //assertEqual(1, 1);


// function assertEqual(param1, param2){
//   if(param1 === param2) return true
//   return false
// }
// TEST/ASSERTION FUNCTIONS

const eqArrays = function(arr1, arr2) {
  if ( arr1.length !== arr2.length) {
  return false;
  }
  for (let i = 0; i< arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
    return false;
    }
  }
  return true
}


const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected)
  if (result) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  let index = Math.floor(array.length/2)
  //console.log("index:",index) 
  let result = [array[index]];
  let result1 = [array[index-1],array[index]] 
 if ( array.length === 1 || array.length ===2) {
   return [];
 } else if (array.length %2 !==0){
   return result;
 }
  return result1;
  
  }
  const testArray = ["a"]
  console.log(middle(testArray))



  module.exports = middle;