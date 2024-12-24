function gameBoard() {
    const board = ["", "", "","", "", "", "", "", ""]

    const getBoard = () => board;
  
    const changeBoard = (index, mark) => {
      if (board[index] === "") {
      board[index] = mark
      return true
      }
    }
  
    const check = () => {
    if ((board[0] === "X" && board[1] === "X" && board[2] === "X") || (board[0] === "Y" && board[1] === "Y" && board[2] === "Y")) {
        return true
      }
    if ((board[3] === "X" && board[4] === "X" && board[5] === "X") || (board[3] === "Y" && board[4] === "Y" && board[5] === "Y")) {
        return true
      }
    if ((board[6] === "X" && board[7] === "X" && board[8] === "X") || (board[6] === "Y" && board[7] === "Y" && board[8] === "Y")) {
        return true
      }  
    if ((board[0] === "X" && board[3] === "X" && board[6] === "X") || (board[0] === "Y" && board[3] === "Y" && board[6] === "Y")) {
        return true
      }  
    }
  
    return {getBoard, changeBoard, check}
  }

  function domControl(gameBoard) {
    const elem = document.querySelectorAll(".in");
    const board = gameBoard.getBoard();

    elem.forEach((el, ind) => {
        el.addEventListener("click", () => {
            gameFlow.play(ind); 
        })
    })
    
    const render = () => {
       elem.forEach((el, ind) => {
        el.textContent = board[ind];
    })}   

    return {render}
  }

  function gameFlow() {
    const {getBoard, changeBoard, check} = gameBoard();
    const {render} = domControl(gameBoard);
    let turn = "X";
    let victor = ""
    let X = 0;
    let O = 0;
  
    const play = (p) => {
      if (changeBoard(p,turn)) {
        turn = turn === "X" ? "O" : "X";
      };
      render();
      victor = check();
      if (victor) {
        alert(`${turn} wins`);
        
    }
    }
    
  
    return {play}
  }


  
  
  const game = gameFlow()
  
  
  