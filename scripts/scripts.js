const boardGame = document.getElementById("board");
const gameButton = document.getElementById("playButton");
const cellsInEachBoard = ["", "", "", "", "", "", "", "", ""];

cellsInEachBoard.forEach((cell, index) => {
  const box = document.createElement("div");
  box.id = index;
  box.className = "box";
  boardGame.append(box);
});

function startGame() {
  gameButton.disabled = true;
  const boxes = document.getElementsByClassName("box");
  for (let box = 0; box < boxes.length; box++) {
    //CIRCLE
    const circle = document.createElement("div");
    //CROSS
    const cross = document.createElement("div");
    cross.className = "cross"
    cross.textContent = "X"

    //EVENT LISTENER
    boxes[box].addEventListener("click", (e) => {
      circle.className = "circle";
      boxes[box].append(circle);

      console.log(boxes[box]);
    });
  }
}
