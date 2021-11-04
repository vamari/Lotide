const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;


const testArray = ["a","b","c","d"]
// console.log(middle(testArray))



describe("#middle", () => {
  it("returns  ['b', 'c'] for ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(middle(testArray),['b', 'c']);
  });

});