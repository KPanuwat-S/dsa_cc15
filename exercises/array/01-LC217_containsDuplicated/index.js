// brute force
// function containsDuplicate(arr) {
//   // body
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// Hash table

function containsDuplicate(arr) {
  const obj = {};

  // O(N)
  for (const element of arr) {
    if (obj[element]) {
      // O(1)
      return true;
    } else {
      // O(1)
      obj[element] = 1;
    }
  }

  return false;
}

module.exports = containsDuplicate;
