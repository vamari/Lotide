// const arraysEqual = function(actual, expected) {
//   if (actual === expected) return true;
//   if (actual == null || expected == null) return false;
//   if (actual.length !== expected.length) return false;
//   for (var i = 0; i < actual.length; ++i) {
//     if (actual[i] !== expected[i]) return false;
//   }
//   return true;
// };

// function assertEqual(arr1, arr2) {
//   return arraysEqual(arr1, arr2)
// }

// const res = assertEqual([1,2,3], [1,2,3])
// console.log(res)


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
assertArraysEqual([1,2,3], [1,2,3])
assertArraysEqual([1,2,3], [1,3,4,5])