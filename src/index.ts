import { isColliding, Position } from "./lib/collision";
import { parseGameString } from "./lib/game";
import {
  clearRowsIfFilled,
  createEmptyGrid,
  drawGrid,
  fillGridWithPiecePosition,
} from "./lib/grid";

const DEFAULT_GRID_WIDTH = 10;
const DEFAULT_GRID_HEIGHT = 100;

const main = (
  game: string,
  width = DEFAULT_GRID_WIDTH,
  height = DEFAULT_GRID_HEIGHT,
) => {
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
  //console.log("Last row:", grid[height - 1]);
  //console.log(drawGrid(grid));
  const tallestIndex = grid.findIndex((row) => row.some((cell) => cell === 1));
  if (tallestIndex === -1) return 0;
  return height - tallestIndex;
};

console.log("Run 1", main("O0,O2,O4,O6,O8"));
console.log("Run 2", main("L0,J2,O4,L6,J8"));
console.log("Run 3", main("T0,Z3,T5,J8"));
console.log("Run 4", main("T0,Z3,T5,O2,O8"));
