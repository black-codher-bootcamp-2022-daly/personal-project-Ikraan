import React from "react";
//import image from '../Images/board-img.jpg'
// import Board from "./Board";

// function img () {
//   return (
//     <div className="img" style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat"}} />
//   )
// }


function Game() {
  return (
    <div className="container">
      <nav>
        {/* <input type="checkbox" id="theme" name="theme" /> */}
        <label for="theme"></label>
        <h1 style={{textDecoration: ""}}> Tic Tac Toe </h1>
        <div></div>
      </nav>
      <aside className="aside">
        <div id="gameContainer">
          <div>
            <h1 for="playerOne">Player 1 Name </h1>
            <input type="text" id="player-One" />
          </div>
          <div>
            <h1 for="playerTwo">Player 2 Name</h1>
            <input type="text" id="player-Two" />
          </div>
          <div className="buttons">
          {/* <button className="submit">Submit</button> */}
        </div>
        </div>
      </aside>
    </div>
  );
}

export default Game;
