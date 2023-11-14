// Naive
// function maxSubArray(nums, k) {
//   let max = -Infinity;
//   for (let i = 0; i <= nums.length - k; i++) {
//     let tempSum = 0;

//     for (let j = i; j < i + k; j++) {
//       tempSum += nums[j];
//     }

//     max = Math.max(tempSum, max);
//   }
//   return max;
// }

// Sliding window
// function maxSubArray(nums, k) {
//   let maxSum = 0;
//   let tempSum = 0;

//   // loop k times
//   for (let i = 0; i < k; i++) {
//     maxSum += nums[i];
//   }

//   tempSum = maxSum;
//   for (let i = k; i < nums.length; i++) {
//     tempSum = tempSum + nums[i] - nums[i - k];
//     maxSum = Math.max(tempSum, maxSum);
//   }

//   return maxSum;
// }

// var isIsomorphic = function (s, t) {
//   const map1 = {};
//   const map2 = {};
//   for (let i = 0; i < s.length; i++) {
//     if (map1[s[i]] != map2[t[i]]) return false;
//     map1[s[i]] = i + 1;
//     map2[t[i]] = i + 1;

//     console.log(map1);
//     console.log(map2);
//   }
//   return true;
// };

var isPalindrome = function (x) {
  let boo;

  if (x < 0) return false;

  const str2 = x.toString();
  if (str2.length === 1) return true;
  for (let i = 0; i < Math.trunc(str2.length / 2); ++i) {
    boo = +str2[i] === +str2[str2.length - 1 - i];
    if (!boo) return boo;
  }
  return boo;
};

// console.log(isPalindrome(121));
console.log(isPalindrome(1000021));

// module.exports = maxSubArray;
