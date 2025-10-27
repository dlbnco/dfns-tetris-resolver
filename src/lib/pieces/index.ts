/**
 * Each piece is declared as an array of coordinates
 * relative to the pivot point where x and y cross
 * one row at a time.
 */

export type Piece = Array<[number, number]>;

export type PieceName = "O" | "I" | "S" | "Z" | "L" | "J" | "T";

export const PIECES: Record<PieceName, Piece> = {
  O: [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
  ],
  I: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  S: [
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
  ],
  Z: [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  L: [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ],
  J: [
    [1, 0],
    [1, 1],
    [0, 2],
    [1, 2],
  ],
  T: [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
  ],
};
