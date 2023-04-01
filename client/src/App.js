import "./App.css";
 import React from "react-router-dom";
// import Cookies from "universal-cookie";
import Game from "./functionalities/Game";
// import Login from "./functionalities/Login";
// import Signup from "./functionalities/Signup";
import Board from "./functionalities/Board";


function App() {

  return ( 
    <div className="App">
      <Game />
      <Board /> 
    </div>
  )}
  
// const cookies = new Cookies();
// const [user, setUser] = useState(null);
// const [isAuth, setIsAuth] = useState(false);

// useEffect(() => {
// const token = cookies.get("token");
// if (!token) {
// setIsAuth(false);
// setUser(null);
// } else {
// const userData = {
// id: cookies.get("userId"),
// name: cookies.get("username"),
// firstName: cookies.get("firstName"),
// lastName: cookies.get("lastName"),
// hashedPassword: cookies.get("hashedPassword"),
// };
// user.connectUser(userData, token)
// .then((user) => {
// setIsAuth(true);
// setUser(user);
// })
// .catch((error) => {
// console.log(error);
// setIsAuth(false);
// setUser(null);
// });
// }
// }, [cookies, user]);

// const handleSignup = () => {
// setIsAuth(true);
// };

// const handleLogin = () => {
// setIsAuth(true);
// };

// return (
// <>
// {!isAuth && (
// <>


// </>
// )}
// {isAuth && user && (
// <>



// </>
// )}
// </>
// );


export default App;