/**
 * The grid is a 2D array (Y x X) that represents the playing field.
 * Each cell contains a 0 or 1 for either empty or filled states, respectively.
 */

import { Position } from "../collision";
import { Piece } from "../pieces";

export const DEFAULT_GRID_WIDTH = 10;
export const DEFAULT_GRID_HEIGHT = 100;

export type Grid = (0 | 1)[][];

export const createEmptyRow = (length: number) => Array(length).fill(0);

export const createEmptyGrid = (width: number, height: number): Grid =>
  Array(height)
    .fill(null)
    .map(() => createEmptyRow(width));

export const fillGridWithPiecePosition = (
  piece: Piece,
  position: Position,
  grid: Grid,
): Grid => {
  const [x, y] = position;
  const newGrid = [...grid];

  for (const block of piece) {
    const [blockX, blockY] = block;
    newGrid[y + blockY][x + blockX] = 1;
  }
  return newGrid;
};

export const clearRow = (grid: Grid, index: number): Grid => {
  const newGrid = [...grid];
  newGrid.splice(index, 1);
  newGrid.splice(0, 0, createEmptyRow(grid[0].length));
  return newGrid;
};

export const clearRowsIfFilled = (grid: Grid): Grid => {
  const indicesToClear = grid.reduce<number[]>((acc, item, index) => {
    if (item.every((cell) => cell === 1)) acc.push(index);
    return acc;
  }, []);
  let newGrid = [...grid];
  for (let i = 0; i < indicesToClear.length; i++) {
    newGrid = clearRow(newGrid, indicesToClear[i]);
  }
  return newGrid;
};
