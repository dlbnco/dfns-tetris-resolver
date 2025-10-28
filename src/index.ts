import * as readline from "readline";
import { processGame } from "./lib/game";
import { DEFAULT_GRID_HEIGHT, DEFAULT_GRID_WIDTH } from "./lib/grid";

/**
 * Reads from each line (game) in STDIN,
 * calls `processGame` with that line,
 * and logs the result.
 */
const main = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  for await (const line of rl) {
    const height = processGame(line, DEFAULT_GRID_WIDTH, DEFAULT_GRID_HEIGHT);
    console.log(height);
  }
};

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
