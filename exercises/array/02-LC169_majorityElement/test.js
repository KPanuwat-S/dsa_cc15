const majorityElement = require("./index");

test("majorityElement([1,2,3,3,3,4]) --> 3 ", () => {
  expect(majorityElement([1, 2, 3, 3, 3, 4]).toEqual(3));
});

test("majorityElement([2,2,1,1,1,2,2]) --> 2 ", () => {
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2]).toEqual(2));
});

test("majorityElement([2,2,2,1,1,1]) --> null ", () => {
  expect(majorityElement([2, 2, 2, 1, 1, 1]).toEqual(null));
});
