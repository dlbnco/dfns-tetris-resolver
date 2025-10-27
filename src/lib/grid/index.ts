import { Position } from "../collision";
import { Piece } from "../pieces";

/**
 * Given a length, creates an array with that length
 * where all values are 0.
 */
export const createEmptyRow = (length: number) => Array(length).fill(0);

/**
 * Given the dimensions, creates an 2D array
 * representing the game field.
 * The grid is a 2D array (Y x X) that represents the playing field.
 * Each cell contains a 0 or 1 for either empty or filled states, respectively.
 */
export const createEmptyGrid = (width: number, height: number): Grid =>
  Array(height)
    .fill(null)
    .map(() => createEmptyRow(width));

/**
 * Given a piece, its position, and a grid,
 * position the piece on the grid by updating
 * the corresponding coordinates to 1.
 */
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

/**
 * Given a grid and an index,
 * remove the corresponding row,
 * and create a new empty row at the top.
 */
export const clearRow = (grid: Grid, index: number): Grid => {
  const newGrid = [...grid];
  newGrid.splice(index, 1);
  newGrid.splice(0, 0, createEmptyRow(grid[0].length));
  return newGrid;
};

/**
 * Check whether any rows are fully filled,
 * and clears them.
 */
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

export const DEFAULT_GRID_WIDTH = 10;
export const DEFAULT_GRID_HEIGHT = 100;

export type Grid = (0 | 1)[][];
