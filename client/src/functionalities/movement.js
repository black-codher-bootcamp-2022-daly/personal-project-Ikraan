const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_MOVE= "UPDATE_MOVE";


function updateState (moveBox){
    return {
        type: UPDATE_STATE, payload: moveBox
    }
}

function updateMove (id){
    return {
        type: UPDATE_MOVE, payload: id
    }
}