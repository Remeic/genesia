import {generateRandomWord} from "../utils/textGenerationUtils";

describe("generateRandomWord", () => {
  it("returns a word of the given length", () => {
    expect(generateRandomWord(42)).toHaveLength(42);
  });
});
