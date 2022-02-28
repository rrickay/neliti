const f = require("./numericAlgorithm");

test("Verify number", () => {
  const [result] = f([1, 4], 0, 5, []);
  expect(result).toBe(`5 = 1 + 4`);
});
