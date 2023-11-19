const ransomeNote = require("./index");

test("ransomNote = 'a', magazine = 'b' --> false", () => {
  expect(maxSubArray("a", "b")).toEqual(false);
});

test("ransomNote = 'aa', magazine = 'ab' --> false", () => {
  expect(maxSubArray("aa", "ab")).toEqual(false);
});

test("ransomNote = 'aa', magazine = 'aab' --> true", () => {
  expect(maxSubArray("aa", "aab")).toEqual(true);
});

test("ransomNote = 'aa', magazine = 'aa' --> true", () => {
  expect(maxSubArray("aa", "aa")).toEqual(true);
});
