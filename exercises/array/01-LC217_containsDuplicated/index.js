function containsDuplicate(arr) {
  const obj = {};

  // populate arr into obj
  for (const num of arr) {
    if (obj[num]) {
      return true;
    } else {
      obj[num] = 1;
    }
  }

  return false;
}

module.exports = containsDuplicate;
