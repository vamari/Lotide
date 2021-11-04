const assertEqual = function(actual, expected) {

  if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !==  ${expected}`);
  }
};


const findKeyByValue = function(object, value) {
  const array = Object.keys(object);
  const val = Object.values(object);
  console.log(array);
  for (let val of array) {

    if (val !== value){
      return undefined;
    } else  {
  
      let i = object.indexOf(val);
      return key[i];
      console.log(key[i])
      

    }
  }
console.log(key[i])
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
