"use client";
import {useState} from "react";
import styles from "./page.module.css";

export default function Home() {
  // Variables
  const [cellsInEachBoard, setCellsInEachBoard] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(cellsInEachBoard);

  // Start Button logic
  const [clicked, setClicked] = useState(false);

  function handleStartButton() {
    setClicked(!clicked);
  }
  function handleReloadButton() {
    location.reload();
  }

  // Handle a cell click
  function handleCellClick(index) {
    if (cellsInEachBoard[index] || winner) {
      return;
    }

    const newCells = [...cellsInEachBoard];
    newCells[index] = isXNext ? "X" : "O";
    setCellsInEachBoard(newCells);
    setIsXNext(!isXNext);
  }

  // Calculate the winner
  function calculateWinner(cells) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }

    return null;
  }

  // Rendering the game board
  const renderCell = (index) => {
    return (
      <div key={index} className={styles.box} onClick={() => handleCellClick(index)}>
        {cellsInEachBoard[index]}
      </div>
    );
  };

  const renderBoard = () => {
    return <div id={styles.board}>{cellsInEachBoard.map((box, index) => renderCell(index))}</div>;
  };

  return (
    <>
      <div>
        <h1>Tic-Tac-Toe with NextJS</h1>
      </div>
      <div id={winner ? styles.winner : styles.infoDisplay}>
        <h3> {clicked ? (winner ? `Winner: ${winner}` : cellsInEachBoard.every((cell) => cell) ? "It's a Draw!" : `Next player: ${isXNext ? "X" : "O"}`) : "Click on the START Button below."}</h3>
      </div>

      <section className={styles.boardSection}>{clicked ? renderBoard() : null}</section>

      <div id={styles.buttonContainer}>
        <div id={styles.playButtonDiv}>
          <button id={styles.playButton} onClick={handleStartButton} disabled={clicked}>
            Start
          </button>
        </div>
        <div id={styles.reloadButtonDiv} hidden={!clicked}>
          <button id={styles.reload} onClick={handleReloadButton}>
            <span className="material-symbols-outlined"> replay </span>
          </button>
        </div>
      </div>
    </>
  );
}
