const assertEqual = require('./assertEqual');


/*const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (a === b) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !==  ${expected}`);
  }
};*/
let head = function(arr) {
  return arr[0];
}
  
module.exports = head;



// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
