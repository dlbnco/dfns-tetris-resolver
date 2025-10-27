import { parseGameString, processGame } from ".";
import { DEFAULT_GRID_HEIGHT, DEFAULT_GRID_WIDTH } from "../grid";
import { PIECES } from "../pieces";

describe("parseGameString()", () => {
  describe("should parse correctly", () => {
    test("O0,O2,O4,O6,O8", () => {
      expect(parseGameString("O0,O2,O4,O6,O8")).toEqual([
        [PIECES.O, 0],
        [PIECES.O, 2],
        [PIECES.O, 4],
        [PIECES.O, 6],
        [PIECES.O, 8],
      ]);
    });
    test("L0,J2,O4,L6,J8", () => {
      expect(parseGameString("L0,J2,O4,L6,J8")).toEqual([
        [PIECES.L, 0],
        [PIECES.J, 2],
        [PIECES.O, 4],
        [PIECES.L, 6],
        [PIECES.J, 8],
      ]);
    });
    test("T0,Z3,T5,J8", () => {
      expect(parseGameString("T0,Z3,T5,J8")).toEqual([
        [PIECES.T, 0],
        [PIECES.Z, 3],
        [PIECES.T, 5],
        [PIECES.J, 8],
      ]);
    });
    test("T0,Z3,T5,O2,O8", () => {
      expect(parseGameString("T0,Z3,T5,O2,O8")).toEqual([
        [PIECES.T, 0],
        [PIECES.Z, 3],
        [PIECES.T, 5],
        [PIECES.O, 2],
        [PIECES.O, 8],
      ]);
    });
  });
});

describe("processGame()", () => {
  describe("should process correctly", () => {
    test("O0,O2,O4,O6,O8", () => {
      expect(
        processGame("O0,O2,O4,O6,O8", DEFAULT_GRID_WIDTH, DEFAULT_GRID_HEIGHT),
      ).toEqual(0);
    });
    test("L0,J2,O4,L6,J8", () => {
      expect(
        processGame("L0,J2,O4,L6,J8", DEFAULT_GRID_WIDTH, DEFAULT_GRID_HEIGHT),
      ).toEqual(2);
    });
    test("T0,Z3,T5,J8", () => {
      expect(
        processGame("T0,Z3,T5,J8", DEFAULT_GRID_WIDTH, DEFAULT_GRID_HEIGHT),
      ).toEqual(3);
    });
    test("T0,Z3,T5,O2,O8", () => {
      expect(
        processGame("T0,Z3,T5,O2,O8", DEFAULT_GRID_WIDTH, DEFAULT_GRID_HEIGHT),
      ).toEqual(3);
    });
  });
});
