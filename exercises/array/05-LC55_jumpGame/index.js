function canJump(nums) {
  const n = nums.length;
  let maxReach = 0;

  for (let i = 0; i < n; i++) {
    if (i > maxReach) {
      // If the current index cannot be reached, return false
      return false;
    }

    // Update the maximum reachable index
    maxReach = Math.max(maxReach, i + nums[i]);

    // If the last index can be reached, return true
    if (maxReach >= n - 1) {
      return true;
    }
  }

  return false;
}

module.exports = canJump;
