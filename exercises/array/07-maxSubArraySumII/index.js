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
function maxSubArray(nums, k) {
  let maxSum = 0;
  let tempSum = 0;

  // loop k times
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  tempSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    tempSum = tempSum + nums[i] - nums[i - k];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

module.exports = maxSubArray;
