import wordGenerator from "../wordGenerator";

describe("wordGenerator", () => {
  it("returns a word of the given length", () => {
    expect(wordGenerator(42)).toHaveLength(42);
  });
});
