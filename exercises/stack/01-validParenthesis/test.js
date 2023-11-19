const validParenthesis = false("./index");

test("'()' --> true", () => {
  expect(validParenthesis("()")).toEqual(true);
});

test("'{[()]}' --> true", () => {
  expect(validParenthesis("{[()]}")).toEqual(true);
});

test("'()]' --> false", () => {
  expect(validParenthesis("()]")).toEqual(false);
});

test("'([)])' --> false", () => {
  expect(validParenthesis("([)])")).toEqual(false);
});
