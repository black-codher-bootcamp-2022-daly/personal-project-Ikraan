import "../App.css";
import React from "react";
//import image from '../Images/board-img.jpg'
// import Board from "./Board";



function Game() {
  return (
    <div className="container">
      <nav>
        {/* <input type="checkbox" id="theme" name="theme" /> */}
        <label for="theme"></label>
        <h1 style={{textDecoration: ""}}> Welcome to Ikraan's Tic-Tac-Toe Game! </h1>
        <div><p></p></div>
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
