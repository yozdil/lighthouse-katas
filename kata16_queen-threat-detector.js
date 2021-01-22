let whiteQueen = [0, 5];
let blackQueen = [5, 0];
const generateBoard = function (whiteQueen, blackQueen) {
  let board = [ //This is our empty board
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
  // Here on we run two different loops one for the black the other for the white queen.
  for (let i = 0; i < board.length; i++) {
    if (whiteQueen[0] === i) {
      board[i][whiteQueen[1]] = 1;
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (blackQueen[0] === i) {
      board[i][blackQueen[1]] = 1;
    }
  }
  return board;
}

const queenThreat = function (generatedBoard) {
  // First thing to verify is to check if the queens can attack each othe on the
  // diagonal. if abs(whiteRow – blackRow) = abs(whiteColumn – blackColumn) then it will be true.
  if (Math.abs(whiteQueen[0] - blackQueen[0]) === Math.abs(whiteQueen[1] - blackQueen[1])) {
    return true;
  } else {
    // This part will check if they can attack each other on the same row or column.
    for (let i = 0; i < generatedBoard.length; i++) {
      let columnCheck = 0;
      for (let j = 0; j < generatedBoard.length; j++) {
        if (generatedBoard[i][j] > 0) {
          generatedBoard[i][j] = 0;
          // For the first instance a queen is found we set it's value to 0 and
          // verify with indexOf to see if there is another queen on the same row.
          if (generatedBoard[i].indexOf(1) > -1) {
            return true;
          } else {
            // If they arent on the same row we store the value of the column
            // into columnCheck and we break out of our loop.
            generatedBoard[i][j] = 1;
            columnCheck = j;
            break;
          }
        }
      }
      // When we break out from the first loop, we can check for the given
      // column rest of the rows for the other queen.
      if (generatedBoard[i][columnCheck] === 1) {
        return true;
      }
    }
  }
}

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));