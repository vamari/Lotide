const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');



// const testArray = ["a","b","c","d"]
// console.log(middle(testArray))



describe("#middle", () => {
  it("returns index:2, ['b', 'c'] for ['a', 'b', 'c', 'd']", () => {
    assert.strictEqual(middle(testArray));
  });

});