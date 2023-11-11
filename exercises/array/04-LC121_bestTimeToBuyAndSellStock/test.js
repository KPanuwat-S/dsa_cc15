const maxProfit = require("./index");

test("maxProfit([7, 1, 5, 3, 6, 4]) --> 5;", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
});

test("expect(maxProfit([7, 6, 4, 3, 1])) --> 0;", () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
});

test("expect(maxProfit([7, 6, 4, 3, 1, 10])) --> 9;", () => {
  expect(maxProfit([7, 6, 4, 3, 1, 10])).toEqual(9);
});
