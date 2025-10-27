import { Grid } from "./grid";
import { Piece } from "./pieces";

export type Position = [number, number];

export const isColliding = (
  piece: Piece,
  piecePosition: Position,
  grid: Grid,
): boolean => {
  for (const block of piece) {
    // Calculate absolute position of this block
    const absX = piecePosition[0] + block[0];
    const absY = piecePosition[1] + block[1];

    // Check bottom boundary
    if (absY >= grid.length) {
      return true;
    }

    // Check if grid cell is already filled
    if (grid[absY][absX] === 1) {
      return true;
    }
  }

  return false;
};
