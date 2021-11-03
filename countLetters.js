const assertEqual = function(actual, expected) {

  if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !==  ${expected}`);
  }
};

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
console.log(countLetters("lighthouse in the house"));