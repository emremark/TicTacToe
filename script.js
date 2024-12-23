function gameBoard() {
    const board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  
    const getBoard = () => board;
  
    const makeMove = (r, p, mark) => {
      if (board[r][p] === "") {
      board[r][p] = mark
      return true
      }
    }
  
    const check = () => {
    for (let row = 0; row < 3; row++) {
      if ((board[row][0] === "X" && board[row][1] === "X" && board[row][2] === "X") || (board[row][0] === "Y" && board[row][1] === "Y" && board[row][2] === "Y")) {
        return true
      }
    }
      //check col
    for (let col = 0; col < 3; col++) {
      if ((board[col][0] === "X" && board[col][1] === "X" && board[col][2] === "X") || (board[col][0] === "Y" && board[col][1] === "Y" && board[col][2] === "Y")) {
        return true
      }
    }
    //check diag
    if ((board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") || (board[0][0] === "Y" && board[1][1] === "Y" && board[2][2] === "Y")) {
      return true
    }
    //check diag
    if ((board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") || (board[0][2] === "Y" && board[1][1] === "Y" && board[2][0] === "Y")) {
      return true
    }
    }
  
    return {getBoard, makeMove, check}
  }
  
  function gameFlow() {
    const {getBoard, makeMove, check} = gameBoard();
    let turn = "X";
    let victor = ""
  
    const play = (r,p) => {
      if (makeMove(r,p,turn)) {
        turn = turn === "X" ? "O" : "X";
      };
      console.log(getBoard());
      victor = check();
      if (victor) {console.log(`${turn} wins`)}
    }
    
  
    return {play}
  }
  //check if position is empty, check if draw...
  
  
  const game = gameFlow()
  console.log(game.play(0,0));
  
  