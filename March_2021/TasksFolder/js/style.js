'use strict';




function arrayDiff(a, b) {

    let arr = [];

    for (let key of a) {

        let count = 0;

        for (let key2 of b) {

            if (key == key2) {

                count++;
            }

        }

        if (count == 0) {

            arr.push(key);

        }

    }

    return arr;

}

console.log(arrayDiff([], [4, 5]));

console.log(arrayDiff([3, 4], [3]));
console.log(arrayDiff([1, 8, 2], []));
console.log(arrayDiff([13, -18], [-18, 13]));


/* Test.describe("Sample tests", function() {
    Test.it("Should pass Sample tests", function() {
      Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
      Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
      Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
    });
  });  */