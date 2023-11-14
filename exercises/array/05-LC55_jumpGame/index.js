// function canJump(nums) {
//   const n = nums.length;
//   let maxReach = 0;

//   for (let i = 0; i < n; i++) {
//     if (i > maxReach) {
//       // If the current index cannot be reached, return false
//       return false;
//     }

//     // Update the maximum reachable index
//     maxReach = Math.max(maxReach, i + nums[i]);

//     // If the last index can be reached, return true
//     if (maxReach >= n - 1) {
//       return true;
//     }
//   }

//   return false;
// }

[3, 2, 1, 0, 4];

function canJump(nums) {
  // body
  let maxReach = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    // guard clause
    if (nums[i] + i >= n - 1) {
      return true;
    }

    // compare max reach
    if (nums[i] + i > maxReach) {
      maxReach = nums[i] + i;
    }

    // Check before moving
    if (maxReach < i + 1) {
      return false;
    }
  }
}

module.exports = canJump;
