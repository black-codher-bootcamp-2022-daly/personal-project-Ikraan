import { process_params } from 'express/lib/router';
import React from 'react';


function Board () {

    function playerTurn(id){
        if (props.map[id] === null){
            props.onClickBox(id);
        } else {
            alert ('Not Allowed!');
        }
    }
    return (
        <div className='tableContainer'>
            <table>
                <tb>
                    <tr>
                        <td onClick ={ () => playerTurn(0)}> {props.map[0]}</td>
                        <td onClick ={ () => playerTurn(1)}> { props.map[1]}</td>
                        <td onClick ={ () => playerTurn(2)}> { props.map[2]}</td>
                    </tr>
                    <tr>
                        <td onClick ={ () => playerTurn(3)}> {props.map[3]}</td>
                        <td onClick ={ () => playerTurn(4)}> { props.map[4]}</td>
                        <td onClick ={ () => playerTurn(5)}> { props.map[5]}</td>
                    </tr>
                    <tr>
                        <td onClick ={ () => playerTurn(6)}> {props.map[6]}</td>
                        <td onClick ={ () => playerTurn(7)}> { props.map[7]}</td>
                        <td onClick ={ () => playerTurn(8)}> { props.map[8]}</td>
                    </tr>
                </tb>
            </table>
        </div>
    )
}

function mapState(state){
    return {
        map: state.game.map
    }
}

function mapDispatch(dispatch){
    return {
        onclickBox: (id) => { dispatch (updateMove(id))}
    }
}

export default Board;