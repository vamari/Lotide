const arraysEqual = function(actual, expected) {
  if (actual === expected) return true;
  if (actual == null || expected == null) return false;
  if (actual.length !== expected.length) return false;
  for (var i = 0; i < actual.length; ++i) {
    if (actual[i] !== expected[i]) return false;
  }
  return true;
};

function assertEqual(arr1, arr2) {
  return arraysEqual(arr1, arr2)
}

const res = assertEqual([1,2,3], [1,2,3])
console.log(res)