import './App.css';
import React from "react";
import { navigate, Route, Router, Routes} from "react-router-dom";
import Board from "./Board";
import Login,{AuthWrapper} from "./Login";

function Start(props) {
    const username = props.username;
    const setUsername = props.setUsername;
    const [tempUsername, setTempUsername] = props.useState("");
    function defineUsername (){
        setUsername(tempUsername);
    }

    return (
        <div className="main-div">
            <div className="container">
                <div className="textDiv" style={username ? { display: "none"} : {}}>
                    <h1>Welcome to Ikraan's Tic-Tac-Toe Game!</h1>
                    <input onChange={(e) => setTempUsername(e.target.value)} type='text' className="textInput" placeholder="Enter your name..." />
                    <button onClick={defineUsername}>Submit</button>
                </div>
                <div className="secondDiv" style={username ?{} : {display: "none"}}>
                    <h1>Hello {username}!</h1>
                    <h1>How would you like to play?</h1>
                    <div className="buttons">
                        <button style={{ fontWeight: "bold", textDecoration: "underline"}} onClick={() => navigate(`/joingame`)} type='button' className="startBtn">Join Game</button>
                        <button onClick={() => navigate(`/Start`)} type='button' className="startBtn">Join Game</button>
                    </div>
                    <button onClick={() => window.location.reload()}>Change Name</button>
                </div>
    <Router>
    <Routes>
        <Route element={<AuthWrapper />}>
            <Route path="/" element={<Board />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<navigate to="/" replace />} />
    </Routes>
</Router>
            </div>
        </div>
    )
}




export default Start;