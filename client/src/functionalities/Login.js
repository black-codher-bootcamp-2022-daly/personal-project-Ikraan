// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';
// import openSocket from 'socket.io-client';


// const socket = openSocket('http://localhost:8080');

// function Login(props) {
  
//   const navigate = useNavigate();
//   const [tempUsername, setTempUsername] = useState('');
//   const [tempPieceType ] = useState('X'); // set a default value for tempPieceType
//   const [gameID, setGameID] = useState('');
//   const [currentTime, setCurrentTime] = useState(''); // add a missing state variable for currentTime
//   const { username, setUsername } = props; // use destructuring to get the username and setUsername props

//   // If there is no username, redirect to the start page
//   useEffect(() => {
//     if (!username) {
//       navigate('/');
//     }
//   }, [username, navigate]);

//   // Get the current machine's date and time when the component mounts
//   useEffect(() => {
//     const date = new Date();
//     const hour = date.getHours();
//     const minute = date.getMinutes();
//     const second = date.getSeconds();
//     const time = `${hour}${minute}${second}`;
//     setCurrentTime(time);
//   }, []);

//   // Make a new variable called gameID that is made of the currentTime, the tempPieceType, and the username
//   useEffect(() => {
//     const tempGameID = `${currentTime}${tempPieceType}${username}`;
//     setGameID(tempGameID);
//   }, [currentTime, tempPieceType, username]);

//   // When the player wants to create the game, send it to the database and redirect them to the waiting page
//   async function handleNext() {
//     console.log('Attempting to create game');
//     try {
//       socket.emit('createGame', {
//         username,
//         pieceTypeO: tempPieceType,
//         gameID,
//         player1Piece: tempPieceType,
//       });
//       navigate('/');
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   function defineUsername() {
//     setUsername(tempUsername);
//   }

//   return (
//     <>
//       {username ? (
//         <>
//           <h1>Hello {username}! </h1>
//           <h1>How would you like to play?</h1>

//           <button
//             style={{ fontWeight: 'bold', textDecoration: 'underline' }}
//             onClick={handleNext}>
//             Join Game
//           </button>

//           <button onClick={() => window.location.reload()}>CHANGE NAME</button>
//         </>
//       ) : (
//         <>
//           <h1>Welcome to Iki's Tic-Tac-Toe!</h1>
//           <input onChange={(e) => setTempUsername(e.target.value)} type='text' className='input-text' placeholder='Enter your name...' />
//           <button onClick={defineUsername}>SUBMIT</button>
//         </>
//       )}
//     </>
//   );
// }

// export default Login;
