import * as movement from './movement';
import initialSetup from './InitialSetup';

function rootGame(state = initialSetup, movement){
    switch (movement.type){
        case movement.UPDATE_STATE:

        return state;
        case movement.UPDATE_MOVE:
            let currMap = state.game.CurrMap.slice();
            let history = state.game.history.slice();
            history.push(currMap.slice());
            let currPlayer = state.game.currPlayer;
            if (currPlayer ===1){
                currMap[movement.payload] = "X";
                currPlayer = 2;
            } else {
                currMap[movement.payload] = "O";
                currPlayer = 1;
            }
            let newState = Object.assign({}, state, { game: {
                currMap: currMap,
                currPlayer: currPlayer,
                history: history
            }});
            return newState;
            default: 
            return state;
        
    }
}

export default rootGame;
