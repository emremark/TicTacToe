const gameB = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const move = (p, turn) => {
    if (board[p] === "") {
      board[p] = turn.name;
    }
  }

  const checkWin = (board, turn) => {
    winComb = [
      [0, 1, 2],
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6]
    ]

    return winComb.some(combo => combo.every(index => board[index] === turn));
  }
  
  const checkDraw = (board) => {
    for (let n of board) {
      if (n === "") {
        return false
      }
    }
    return true
  }
   
  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  }

  return {getBoard, move, checkWin, checkDraw, resetBoard}

})();

const gameC = (function () {

  const players = [
    {name: "X", score: 0}, 
    {name: "O", score: 0}
  ]

  let turn = players[0];

  const addpoint = () => {
    turn.score += 1;
  }

  const getScoreX = () => players[0].score;
  const getScoreO = () => players[1].score;

  const switchTurn = () => {
    turn = turn === players[0] ? players[1] : players[0];
  }
  const getTurn = () => turn;

  const resetTurn = () => {
    turn = players[0]
  }

  return {addpoint, getScoreX, getScoreO, switchTurn, getTurn, resetTurn}
})();

function screenControler(gameB,gameC) {
  const bdiv = document.querySelector(".gboard");
  const next = document.querySelector(".turn")
  const strt = document.querySelector("#reset")
  let xp = document.querySelector("#xnu");
  let op = document.querySelector("#onu");

  const updateScreen = () => {
    bdiv.textContent = "";

    const brd = gameB.getBoard();
    const trn = gameC.getTurn();
    next.textContent = `${trn.name}'s turn`;

    brd.forEach((el, ind) => {
          const btn = document.createElement("button");
          btn.dataset.p = ind;
          btn.classList = "dugme";
          btn.textContent = el;
          bdiv.appendChild(btn);
      })
  }

  const updateScore = () => {
    xp.textContent = gameC.getScoreX();
    op.textContent = gameC.getScoreO();
  }

  function whenClick(e) {
    const p = e.target.dataset.p;
    gameB.move(p, gameC.getTurn());
    if (gameB.checkDraw(gameB.getBoard())) {
      alert("Draw!")
      return
    }
    if (gameB.checkWin(gameB.getBoard(), gameC.getTurn().name)) {
      updateScreen();
      gameC.addpoint();
      updateScore();
      alert(`${gameC.getTurn().name} wins!`);
      return
    }
    else {
      gameC.switchTurn();
      updateScreen();
    }
  }
  bdiv.addEventListener("click", whenClick);
  strt.addEventListener("click", () => {
    gameB.resetBoard();
    gameC.resetTurn();
    updateScreen();
  });
  updateScreen();
}

screenControler(gameB, gameC);

