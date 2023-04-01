import "../App.css"
import React from "react";


export function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [player, setPlayer] = React.useState("X");

  const handleClick = (i) => {
    play(i);
  };

  const play = (i) => {
    if (checkWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = [...squares];
    newSquares[i] = player === "X" ? "X" : "O";
    setSquares(newSquares);
    setPlayer(player);
    computerPlay(newSquares);
  };

  const computerPlay = (newSquares) => {
    const indexes = [];

    newSquares.forEach((square, index) => {
      if (!square) indexes.push(index);
    });

    if (indexes.length > 0) {
      const randomIndex = Math.floor(Math.random() * indexes.length);
      const computerMove = indexes[randomIndex];
      newSquares[computerMove] = player === "X" ? "O" : "X";
      setSquares(newSquares);
      setPlayer(player);
      const winner = checkWinner(newSquares);
      if (winner) {
        alert(`Congratulations ${winner} is the winner!`);
      }
    }
  };

  const winner = checkWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
    alert(`Congratulations ${winner} is the winner!`);
  } else {
    status = `Next player: ${player}`;
  }

  const handleRestart = () => {
    setPlayer("X");
    setSquares(Array(9).fill(null));
  };
  const handleChooseX = () => {
    setPlayer("X");
    setSquares(Array(9).fill(null));
  };
  const handleChooseO = () => {
    setPlayer("O");
    setSquares(Array(9).fill(null));
  };
  const renderSquare = (i) => {
    return (
      <Square
        className="square"
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  };

  return (
      (winner ? null : (
        <div>
          <button className="chooseX" onClick={() => handleChooseX()}>
            X
          </button>
          <button className="chooseO" onClick={() => handleChooseO()}>
O
</button>
</div>
),<div className="tableContainer">
<div className="container"><div>
  <span>
  <button onClick={() => setPlayer("X")}>X</button>
  <button onClick={() => setPlayer("O")}>O</button>
  </span>
  </div>
  <div className="status"><p>{status}</p></div>
  <div className="board-row">
    {renderSquare(0)}
    {renderSquare(1)}
    {renderSquare(2)}
  </div>
  <div className="board-row">
    {renderSquare(3)}
    {renderSquare(4)}
    {renderSquare(5)}
  </div>
  <div className="board-row">
    {renderSquare(6)}
    {renderSquare(7)}
    {renderSquare(8)}
  </div>
  
  <div>
  <button className="restart" onClick={handleRestart}>

    Restart Game
  </button>
  </div>
</div>
</div>
))
  }

export function checkWinner(squares) {
const winningPatterns = [
//horizontal winning patterns.
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
//vertical winning patterns.
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
//diagonal winning patterns.
[0, 4, 8],
[2, 4, 6],
];

for (let i = 0; i < winningPatterns.length; i++) {
const [a, b, c] = winningPatterns[i];

if (
squares[a] &&
squares[a] === squares[b] &&
squares[a] === squares[c]
) {
return squares[a];
}
}
}

export default Board;