const gameB = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const move = (p, turn) => {
    if (board[p] === "") {
      board[p] = turn.name;
    }
  }

  return {getBoard, move}

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

  const switchTurn = () => {
    turn = turn === players[0] ? players[1] : players[0];
  }
  const getTurn = () => turn;

  return {addpoint, switchTurn, getTurn}
})();

function screenControler(gameB,gameC) {
  const bdiv = document.querySelector(".gboard");
  const next = document.querySelector(".turn")

  const updateScreen = () => {
    bdiv.textContent = "";

    const brd = gameB.getBoard();
    const trn = gameC.getTurn();
    next.textContent = `${trn.name}'s turn`

    brd.forEach((el, ind) => {
          console.log(gameB.getBoard());
          const btn = document.createElement("button");
          btn.dataset.p = ind;
          btn.innerHTML = el;
          console.log(gameB.getBoard());
          bdiv.appendChild(btn);
      })
  }

  function whenClick(e) {
    const p = e.target.dataset.p;
    gameB.move(p, gameC.getTurn());
    gameC.switchTurn();
    updateScreen();
  }
  bdiv.addEventListener("click", whenClick);

  updateScreen();
}

screenControler(gameB, gameC);

