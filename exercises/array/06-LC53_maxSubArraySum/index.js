function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Choose the maximum between the current element and the sum ending at the previous index plus the current element
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update the overall maximum sum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maxSubArray;

// Cubic

// function cubicMaxSubArraySum(arr) {
//   const n = arr.length;
//   let maxSum = -Infinity;

//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       let currentSum = 0;
//       for (let k = i; k <= j; k++) {
//         currentSum += arr[k];
//       }

//       maxSum = Math.max(maxSum, currentSum);
//     }
//   }

//   return maxSum;
// }

// quadratic (N^2)
// function quadraticMaxSubArraySum(arr) {
//   const n = arr.length;
//   let maxSum = -Infinity;

//   for (let i = 0; i < n; i++) {
//     let currentSum = 0;

//     for (let j = i; j < n; j++) {
//       currentSum += arr[j];
//       maxSum = Math.max(maxSum, currentSum);
//     }
//   }

//   return maxSum;
// }
