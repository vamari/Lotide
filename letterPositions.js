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
const countLetters = function(myString) {
  let result = {}
  let letters = myString.split("");
  console.log(letters)

  for( let i= 0; i<letters.length; i ++) {
  if (letters[i] === " ") {
    letters.splice(i, 1);
  }
      if(result[letters[i]]) {
        result[letters[i]] +=1;
      } else {
        result[letters[i]] = 1;
      }
      
    
  }
  return result;
  
}



const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected)
  if (result) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else { 
    console.log(`Assertion Failed: ${actual} !==  ${expected}`);
  }
};











const letterPositions = function(sentence) {
  const results = {};
  const counts = countLetters(sentence);
  const keys = Object.keys(counts);
  console.log(counts);
  for (let i = 0; i <keys.length; i++) {
    let key = keys[i];
    results [key] = [];
  }
  for (let i = 0; i <keys.length; i++) {
    let key = keys[i];
    for (j= 0; j < sentence.length; j++) {
      console.log("hello")
      if(key === sentence[j]) {
        results[key].push(j);
        console.log(results);
      }
    }
  }  
  
  console.log(results);
  return results;
  

} 


//console.log(letterPositions("hello"));




console.log(letterPositions("hello people"))
