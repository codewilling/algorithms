function isValidSudoku(board: string[][]): boolean {
  let isValid = true;
  //iterate through each row in array, and check for more than one digit
  for (let i = 0; i < board.length; i++) {
    const currentSet = new Set<string>([]);
    for (let j = 0; j < board[i].length; j++) {
      const currentVal: string = board[i][j];
      if (currentVal !== ".") {
        if (currentSet.has(currentVal)) {
          isValid = false;
        } else {
          currentSet.add(currentVal);
        }
      }
    }
  }

  //next iterate through each column in array and check for more than one digit
  for (let i = 0; i < board.length; i++) {
    const currentSet = new Set<string>([]);
    for (let j = 0; j < board[i].length; j++) {
      const currentVal: string = board[j][i];
      if (currentVal !== ".") {
        if (currentSet.has(currentVal)) {
          isValid = false;
        } else {
          currentSet.add(currentVal);
        }
      }
    }
  }

  const squareValues = new Map<string, string[]>();

  //next iterate add values of index 1-3 to a key a, add values of index 4-6 to key b, add values 7-9 to key c,
  //next add values at index 1-3 to a, and repeat above process
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        if (i === 0 || i === 1 || i === 2) {
          if (j === 0 || j === 1 || j === 2) {
            // console.log("j", j);
            squareValues.has("a")
              ? squareValues.get("a")?.push(board[i][j])
              : squareValues.set("a", [board[i][j]]);
            // console.log("a", squareValues.get("a"));
          }
          if (j === 3 || j === 4 || j === 5) {
            // console.log("j", j);

            squareValues.has("b")
              ? squareValues.get("b")?.push(board[i][j])
              : squareValues.set("b", [board[i][j]]);
          }
          if (j === 6 || j === 7 || j === 8) {
            squareValues.has("c")
              ? squareValues.get("c")?.push(board[i][j])
              : squareValues.set("c", [board[i][j]]);
          }
        }
        if (i === 3 || i === 4 || i === 5) {
          if (j === 0 || j === 1 || j === 2) {
            // console.log("j", j);
            squareValues.has("d")
              ? squareValues.get("d")?.push(board[i][j])
              : squareValues.set("d", [board[i][j]]);
            // console.log("a", squareValues.get("a"));
          }
          if (j === 3 || j === 4 || j === 5) {
            // console.log("j", j);

            squareValues.has("e")
              ? squareValues.get("e")?.push(board[i][j])
              : squareValues.set("e", [board[i][j]]);
          }
          if (j === 6 || j === 7 || j === 8) {
            squareValues.has("f")
              ? squareValues.get("f")?.push(board[i][j])
              : squareValues.set("f", [board[i][j]]);
          }
        }
        if (i === 6 || i === 7 || i === 8) {
          if (j === 0 || j === 1 || j === 2) {
            // console.log("j", j);
            squareValues.has("g")
              ? squareValues.get("g")?.push(board[i][j])
              : squareValues.set("g", [board[i][j]]);
            // console.log("a", squareValues.get("a"));
          }
          if (j === 3 || j === 4 || j === 5) {
            // console.log("j", j);

            squareValues.has("h")
              ? squareValues.get("h")?.push(board[i][j])
              : squareValues.set("h", [board[i][j]]);
          }
          if (j === 6 || j === 7 || j === 8) {
            squareValues.has("i")
              ? squareValues.get("i")?.push(board[i][j])
              : squareValues.set("i", [board[i][j]]);
          }
        }
      }
    }
  }
  console.log(squareValues);

  squareValues.forEach((val: string[], key, map) => {
    const isNotValid = new Set(val).size !== val.length;
    if (isNotValid) {
      isValid = false;
    }
  });
  return isValid;
}

const board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

// const board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

console.log(isValidSudoku(board));
