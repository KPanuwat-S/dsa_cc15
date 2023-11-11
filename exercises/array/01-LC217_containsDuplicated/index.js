function containsDuplicate(arr) {
  const obj = {};

  // populate arr into obj
  for (const num of arr) {
    if (obj[num]) {
      ++obj[num];
    } else {
      obj[num] = 1;
    }
  }

  // now the obj will look like this
  // {"1":1, "2":1} which the key is number and the value is the cout

  // make use of obj key to access duplicated value

  for (const key in obj) {
    return obj[key] > 1;

    // The code above is the same as below
    // if (obj[key] > 1) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
}

containsDuplicate([1, 2, 3]);

module.exports = containsDuplicate;
