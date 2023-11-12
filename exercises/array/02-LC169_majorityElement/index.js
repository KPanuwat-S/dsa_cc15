// 2N -> O(N)
// function majorityElement(arr) {
//   const counts = {};
//   let max = 0;
//   let value = null;

//   for (let num of arr) {
//     counts[num] = (counts[num] || 0) + 1;
//   }

//   for (let num in counts) {
//     if (counts[num] > max) {
//       max = counts[num];
//       value = +num;
//     }
//   }

//   return max > Math.trunc(arr.length / 2) ? value : "not found";
// }

// O(N);
function majorityElement(nums) {
  const obj = {};

  for (const element of nums) {
    if (obj[element]) {
      ++obj[element];
    } else {
      obj[element] = 1;
    }

    if (obj[element] > nums.length / 2) {
      return element;
    }
  }

  return "not found";
}

module.exports = majorityElement;
