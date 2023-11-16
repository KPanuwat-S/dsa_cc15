const maxSubArray = require("./index");

test("[-2,1,-3,4,-1,2,1,-5,4], k = 2 --> 3", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4], 2)).toEqual(3);
});
