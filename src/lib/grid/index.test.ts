import {
  clearRow,
  clearRowsIfFilled,
  createEmptyGrid,
  createEmptyRow,
  fillGridWithPiecePosition,
  Grid,
} from ".";
import { Position } from "../collision";
import { PIECES } from "../pieces";

describe("createEmptyRow()", () => {
  it("should create an empty row", () => {
    expect(createEmptyRow(3)).toEqual([0, 0, 0]);
    expect(createEmptyRow(5)).toEqual([0, 0, 0, 0, 0]);
    expect(createEmptyRow(10)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});

describe("createEmptyGrid()", () => {
  it("should create an empty grid", () => {
    expect(createEmptyGrid(3, 3)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    expect(createEmptyGrid(5, 5)).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
    expect(createEmptyGrid(10, 10)).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});

describe("fillGridWithPiecePosition()", () => {
  describe("should fill grid with piece and position", () => {
    test("O, 0:0", () => {
      const filledGrid = fillGridWithPiecePosition(
        PIECES.O,
        [0, 0] as Position,
        createEmptyGrid(3, 3),
      );
      expect(filledGrid).toEqual([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
      ]);
    });
    test("L, 1:0", () => {
      const filledGrid = fillGridWithPiecePosition(
        PIECES.L,
        [1, 0],
        createEmptyGrid(3, 3),
      );
      expect(filledGrid).toEqual([
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
      ]);
    });
    test("Z, 0:0", () => {
      const filledGrid = fillGridWithPiecePosition(
        PIECES.Z,
        [0, 1],
        createEmptyGrid(3, 3),
      );
      expect(filledGrid).toEqual([
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1],
      ]);
    });
  });
});

describe("clearRow()", () => {
  describe("should clear row", () => {
    test("row 0", () => {
      const grid = [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0],
      ] as Grid;
      const clearedGrid = clearRow(grid, 0);
      expect(clearedGrid).toEqual([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]);
    });
    test("row 1", () => {
      const grid = [
        [0, 0, 0],
        [1, 1, 1],
        [1, 1, 1],
      ] as Grid;
      const clearedGrid = clearRow(grid, 1);
      expect(clearedGrid).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
      ]);
    });
    test("row 2", () => {
      const grid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1],
      ] as Grid;
      const clearedGrid = clearRow(grid, 3);
      expect(clearedGrid).toEqual([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [1, 1, 1, 0, 1],
      ]);
    });
  });
});

describe("clearRowsIfFilled()", () => {
  describe("should clear rows if they're filled", () => {
    test("row 0", () => {
      const grid = [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0],
      ] as Grid;
      const clearedGrid = clearRowsIfFilled(grid);
      expect(clearedGrid).toEqual([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]);
    });
    test("row 1", () => {
      const grid = [
        [0, 0, 0],
        [1, 1, 1],
        [1, 1, 1],
      ] as Grid;
      const clearedGrid = clearRowsIfFilled(grid);
      expect(clearedGrid).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    });
    test("row 2", () => {
      const grid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1],
      ] as Grid;
      const clearedGrid = clearRowsIfFilled(grid);
      expect(clearedGrid).toEqual([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [1, 1, 1, 0, 1],
      ]);
    });
  });
});
