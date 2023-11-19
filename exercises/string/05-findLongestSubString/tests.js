const findLongestSubString = require("./index");

test("''  --> 0", () => {
  expect(findLongestSubString("")).toEqual(0);
});

test("'rithmschool'  --> 7", () => {
  expect(findLongestSubString("rithmschool")).toEqual(7);
});

test("'bbb'  --> 1", () => {
  expect(findLongestSubString("bbbb")).toEqual(1);
});

test("'bvb'  --> 2", () => {
  expect(findLongestSubString("bvb")).toEqual(2);
});
