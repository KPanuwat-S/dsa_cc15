function majorityElement(arr) {
  const obj = {};
  let max = 0;

  // populate obj
  for (const num of arr) {
    if (obj[num]) {
      ++obj[num];

      if (obj[num] > max) {
        max = num;
      }
    } else {
      obj[num] = 1;
    }
  }

  return obj[max] > Math.trunc(arr.length / 2) ? max : "not found";
}

module.exports = majorityElement;
