const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (a === b) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !==  ${expected}`);
  }
};
let tail = function(arr) {
  return arr.slice(1);
}
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);