const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  //return arr1.length;
  let arr2 = Object.keys(object2);
  //return arr2.length;
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for(let key of arr1){
      if(object1[key] !== object2[key]) {
        return false;

      } 
    }
    return true;
  } 

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;


  let result = eqObjects(object1, object2)
    if (result) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !==  ${expected}`);
    }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

//console.log(`Example label: ${inspect(actual)}`);