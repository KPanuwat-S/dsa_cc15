const maxSubArray = require("./index");

test("'abba','dog cat cat dog' --> true", () => {
  expect(maxSubArray("abba", "dog cat cat dog")).toEqual(true);
});

test("'abba','dog cat cat fish' --> false", () => {
  expect(maxSubArray("abba", "dog cat cat dog")).toEqual(false);
});

test("'aaaa','dog cat cat dog' --> false", () => {
  expect(maxSubArray("aaaa", "dog cat cat dog")).toEqual(false);
});
