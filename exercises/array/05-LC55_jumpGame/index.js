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
    // the above code is the as below 
    // maxReach = Math.max(maxReach, i + nums[i]);

    // Check before moving
    if (maxReach < i + 1) {
      return false;
    }
  }
}

module.exports = canJump;
