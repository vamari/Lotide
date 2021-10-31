/*const without = function(source, itemsToRemove) {
  let newArr = [];
  for ( let i = 0; i < source.length; i ++)  {
    for (let j = 0; j < itemsToRemove.length; j ++) {
      if (source[i] !== itemsToRemove[j]) {
        let a = source[i]
        newArr.push(a)
        //console.log( newArr)
      }
    }
  }
  console.log(newArr)
}
without(["1", "2", "3"], [1, 2, "3"]) */


function without(source, itemsToRemove) {
  let resultArr = [];
  for(let i=0; i<source.length; i++){
      if (!itemsToRemove.find(cuurrentElemt => source[i] === cuurrentElemt)){
          resultArr.push(source[i])
      }
  }
  console.log(resultArr)
  return resultArr;
}

function arraysEqual(actual, expected) {
  if (actual === expected) return true;
  if (actual == null || expected == null) return false;
  if (actual.length !== expected.length) return false;

  for (var i = 0; i < expected.length; ++i) {
    if (actual[i] !== expected[i]) return false;
  }
  return true;
}

  const words = ["hello", "world", "lighthouse"];

  without(words, ["lighthouse"]);

  const arraysIsStillEqual = arraysEqual(words, ["hello", "world", "lighthouse"]);

  console.log('Arrays is equal:', arraysIsStillEqual);