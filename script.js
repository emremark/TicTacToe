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


/*function gameBoard() {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  const move = (p, turn) => {
    if (board[p] === "") {
      board[p] = turn.name;
    }
  }

  return {getBoard, move}
}

function gameControler() {
  const board = gameBoard();

  const players = [
    {name: "X", score: 0}, 
    {name: "O", score: 0}
  ]
  let turn = players[0];

  const addpoint = () => {
    turn.score += 1;
  }

  const getTurnName = () => turn.name;

  const switchTurn = () => {
    turn = turn === players[0] ? players[1] : players[0];
  }
  const getTurn = () => turn;

  return {addpoint, getTurnName, switchTurn, getTurn}
}

function screenControler() {
  const game = gameControler();
  const board = gameBoard();
  const bdiv = document.querySelector(".gboard");
  const next = document.querySelector(".turn")

  const updateScreen = () => {
    bdiv.textContent = "";

    const brd = board.getBoard();
    const trn = game.getTurn();
    next.textContent = `${trn.name}'s turn`
    debugger

    brd.forEach((el, ind) => {
          debugger
          const btn = document.createElement("button");
          btn.dataset.p = ind;
          btn.innerHTML = el;
          bdiv.appendChild(btn);
      })
  }

  function whenClick(e) {
    const p = e.target.dataset.p;
    debugger
    board.move(p, game.getTurnName());
    debugger
    game.switchTurn();
    debugger
    updateScreen();
    debugger
  }
  bdiv.addEventListener("click", whenClick);

  updateScreen();
}

screenControler();





/*function gameBoard() {
  const board = [
      ["", "", ""], 
      ["", "", ""],
      ["", "", ""]
  ];

  const getBoard = () => board;

  const move = (r,p, turn) => {
    if (board[r][p] === "") {
      board[r][p] = turn.name;
    }
  }

  return {getBoard, move}
}

function gameControler() {
  const board = gameBoard();

  const players = [
    {name: "X", score: 0}, 
    {name: "Y", score: 0}
  ]
  let turn = players[0];

  const addpoint = () => {
    turn.score += 1;
  }

  const switchTurn = () => {
    turn = turn === players[0] ? players[1] : players[0];
  }
  const getTurn = () => turn;

  getBoard();

  return {addpoint, switchTurn, getTurn}
}

function screenControler() {
  const game = gameControler();
  const board = gameBoard();
  const bdiv = document.querySelector(".gboard");
  const next = document.querySelector(".turn")

  const updateScren = () => {
    bdiv.textContent = "";

    const brd = board.getBoard();
    const trn = game.getTurn();
    next.textContent = `${trn.name}'s turn`

    board.forEach(row => {
      row.forEach((position, index) => {
          const btn = document.createElement("button");
          btn.dataset.r = row;
          btn.dataset.p = index;
          bdiv.appendChild(btn);
      })
    })
  }

  function whenClick(e) {
    const r = e.target.dataset.r;
    const p = e.target.dataset.p;

    game.board.move(r,p, game.getTurn());
    game.switchTurn();
    updateScren();
  }
  bdiv.addEventListener("click", whenClick);

  updateScren();
}

screenControler();
*/