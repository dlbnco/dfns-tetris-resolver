import { Piece, PIECES } from "./pieces";

export const parseGameString = (game: string): Array<[Piece, number]> => {
  const splitString = game.split(",");
  const parsed: Array<[Piece, number]> = splitString.map((value) => [
    PIECES[value[0]],
    parseInt(value[1]),
  ]);
  return parsed;
};
