# DFNS Tetris Resolver

## Requirements

- Node.js >=16
- Yarn

## Setup

1. Install dependencies:
```bash
yarn
```

2. Build the project:
```bash
yarn build
```

This will compile the TypeScript source files from `src/` into JavaScript in the `dist/` directory.

## Usage

>One line in this file represents 1 full game. As an example, a line looks like this: “L2,J4,O1,L6,J8”. Each letter represents a piece, and the digit represents its corresponding starting X coordinate.

```bash
./tetris < games.txt

## or
./tetris < games.txt > output.txt
```
