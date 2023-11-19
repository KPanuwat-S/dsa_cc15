const happyNumber = require("./index");

test("2 --> false", () => {
  expect(happyNumber(2)).toEqual(false);
});

test("19 --> true", () => {
  expect(happyNumber(19)).toEqual(true);
});
