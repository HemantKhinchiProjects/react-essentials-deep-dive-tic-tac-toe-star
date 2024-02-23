import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleSelectSquare = (rowIndex, cellIndex) => {
    setGameBoard((previousGameBoard) => {
      const newGameBoard = [...previousGameBoard.map((row) => [...row])];
      newGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
      return newGameBoard;
    });
    onSelectSquare();
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, cellIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
