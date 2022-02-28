const manipulation = require("./stringManipulation");

test("String manipulation", () => {
  const beginWord = "hit";
  const endWord = "cog";
  const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

  const result = manipulation(beginWord, endWord, wordList);

  expect(result).toBe([
    ["hit", "hot", "dot", "dog", "cog"],
    ["hit", "hot", "lot", "log", "cog"],
  ]);
});
