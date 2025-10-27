import { isColliding, Position } from "../collision";
import {
  clearRowsIfFilled,
  createEmptyGrid,
  fillGridWithPiecePosition,
} from "../grid";
import { Piece, PIECES, PieceName } from "../pieces";

export const parseGameString = (game: string): Array<[Piece, number]> => {
  const splitString = game.split(",");
  const parsed: Array<[Piece, number]> = splitString.map((value) => [
    PIECES[value[0] as PieceName],
    parseInt(value[1]),
  ]);
  return parsed;
};

export const processGame = (
  game: string,
  width: number,
  height: number,
): number => {
  let grid = createEmptyGrid(width, height);
  const parsedGame = parseGameString(game);

  for (const round of parsedGame) {
    const piece = round[0];
    const initialX = round[1];
    const position: Position = [initialX, 0];
    for (let y = 0; y < height; y++) {
      const [x, y] = position;
      const newY = y + 1;
      if (isColliding(piece, [x, newY], grid)) {
        continue;
      }
      position[1] = newY;
    }
    grid = fillGridWithPiecePosition(piece, position, grid);
    grid = clearRowsIfFilled(grid);
  }
  grid = clearRowsIfFilled(grid);
  const tallestIndex = grid.findIndex((row) => row.some((cell) => cell === 1));
  if (tallestIndex === -1) return 0;
  return height - tallestIndex;
};
