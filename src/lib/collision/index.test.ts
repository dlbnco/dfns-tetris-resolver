import { isColliding } from ".";
import { Grid } from "../grid";
import { PIECES } from "../pieces";

const MOCK_GRID = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
] as Grid;

describe("isColliding()", () => {
  describe("should detect collision", () => {
    test("L, 0:0", () => {
      expect(isColliding(PIECES.L, [0, 0], MOCK_GRID)).toBe(false);
    });
    test("L, 2:2", () => {
      expect(isColliding(PIECES.L, [1, 2], MOCK_GRID)).toBe(true);
    });
    test("O, 1:2", () => {
      expect(isColliding(PIECES.O, [1, 2], MOCK_GRID)).toBe(true);
    });
    test("Z, 1:2", () => {
      expect(isColliding(PIECES.Z, [1, 2], MOCK_GRID)).toBe(false);
    });
  });
});
