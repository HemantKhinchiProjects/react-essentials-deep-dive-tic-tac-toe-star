import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleSelectSquare = (rowIndex, cellIndex, playerSymbol) => {
    setGameBoard((previousGameBoard) => {
      const newGameBoard = [...previousGameBoard.map((row) => [...row])];
      newGameBoard[rowIndex][cellIndex] = playerSymbol;
      return newGameBoard;
    });
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() =>
                    handleSelectSquare(rowIndex, cellIndex, playerSymbol)
                  }
                >
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
