const arraysEqual = function(actual, expected) {
  if (actual === expected) return true;
  if (actual == null || expected == null) return false;
  if (actual.length !== expected.length) return false;
  for (var i = 0; i < actual.length; ++i) {
    if (actual[i] !== expected[i]) return false;
  }
  return true;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


function assertEqual(param1, param2){
  if(param1 === param2) return true
  return false
}

const res = assertEqual(arraysEqual([1,2,3], [1,2,3]), true)
console.log(res)