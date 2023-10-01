//MY VARIABLES
const boardGame = document.getElementById("board");
const gameButton = document.getElementById("playButton");
const infoDisplay = document.getElementById("infoDisplay");
const cellsInEachBoard = ["", "", "", "", "", "", "", "", ""];
let nameOfSymbolClass = "circle";
let gameWon = false;
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//--------------------------------FUNCTIONS---------------------------------
function startGame() {
  gameButton.disabled = true;
  cellsInEachBoard.forEach((cell, index) => {
    const box = document.createElement("div");
    box.id = index;
    box.className = "box";
    boardGame.append(box);
    box.addEventListener("click", makeGameWork);
  });
}


function makeGameWork(e) {
  if (!gameWon) {
    let ticTacToeSymbols = document.createElement("div");

    displayTurn = "It is " + nameOfSymbolClass + "'s turn";
    infoDisplay.textContent = displayTurn;
    nameOfSymbolClass = nameOfSymbolClass === "circle" ? "cross" : "circle";

    ticTacToeSymbols.className = nameOfSymbolClass;
    e.target.append(ticTacToeSymbols);

    e.target.removeEventListener("click", makeGameWork);
    const cellIndex = e.target.id;
    cellsInEachBoard[cellIndex] = nameOfSymbolClass;
    win();
  }
}


//WIN
function win() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    const symbolA = cellsInEachBoard[a];
    const symbolB = cellsInEachBoard[b];
    const symbolC = cellsInEachBoard[c];

    if (symbolA && symbolA === symbolB && symbolA === symbolC) {
      displayWinner(symbolA);
      gameWon = true;
      showReloadButton();
      return;
    }
  }

  if (!cellsInEachBoard.includes("")) {
    gameWon = true;
    showReloadButton();
    displayDraw();
  }
}

function displayWinner(winner) {
  infoDisplay.textContent = `${winner} wins!`;
  infoDisplay.style.backgroundColor = "green";
  infoDisplay.style.color = "white";
}

function displayDraw() {
  infoDisplay.textContent = "It's a draw!";
  infoDisplay.style.backgroundColor = "yellow";
  infoDisplay.style.color = "black";
}

function reloadPage() {
  location.reload();
}

function showReloadButton() {
  document.getElementById("reloadButtonDiv").hidden = false;
}
