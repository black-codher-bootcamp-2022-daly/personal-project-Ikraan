import React from 'react';


function Game (){
    return (
        <div id="gameContainer">
            <div>
                <h2>Player 1</h2>
            </div>
            <Board/>
            <div>
                <h2>Player 2</h2>
            </div>
        </div>
    )
}

export default Game;