const containsDuplicate = require("./index");

test("returns true for Arrays with duplicate values", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
});

test("returns false for Arrays with NO duplicate values", () => {
  expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
});

// function containsDuplicate(arr) {
//   const obj = {};

//   // populate arr into obj
//   for (const num of arr) {
//     if (obj[num]) {
//       return true;
//     } else {
//       obj[num] = 1;
//     }
//   }

//   return false;
// }
