const assertEqual = require('../assertEqual');
const tail = require('../tail');


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);


// const assert = require('chai').assert;
// const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 for 3", () => {
    assert.strictEqual(tail(words.length, 3));
  });

});
