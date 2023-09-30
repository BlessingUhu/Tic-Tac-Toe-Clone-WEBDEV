const boardGame = document.getElementById("board");
const gameButton = document.getElementById("playButton");
const infoDisplay = document.getElementById("infoDisplay");

const cellsInEachBoard = ["", "", "", "", "", "", "", "", ""];

let nameOfSymbolClass = "circle";

function startGame() {
  gameButton.disabled = true;
  cellsInEachBoard.forEach((cell, index) => {
    const box = document.createElement("div");
    box.id = index;
    box.className = "box";
    boardGame.append(box);
    box.addEventListener("click", almostDone);
  });
}

function almostDone(e) {
  //CIRCLE OR CROSS
  let ticTacToeSymbols = document.createElement("div");

  displayTurn = "It is " + nameOfSymbolClass + "'s turn";
  infoDisplay.textContent = displayTurn;
  nameOfSymbolClass = nameOfSymbolClass === "circle" ? "cross" : "circle";

  ticTacToeSymbols.className = nameOfSymbolClass;
  e.target.append(ticTacToeSymbols);
  e.target.removeEventListener("click", almostDone);
  score();
}

function score() {
  const boxes = document.getElementsByClassName("box");
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
  winningCombos.forEach(combo=> 
    combo.every(num =>{
       
    }
        )
    )
}

// infoDisplay.textContent("Circle wins!");
// infoDisplay.style.backgroundColor = "green";
