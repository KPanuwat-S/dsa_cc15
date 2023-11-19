const validAnagram = require("./index");

test("'anagram', 'nagaram' --> true", () => {
  expect(validAnagram("anagram", "nagaram")).toEqual(true);
});

test("'rat', 'car' --> false", () => {
  expect(validAnagram("rat", "car")).toEqual(false);
});
