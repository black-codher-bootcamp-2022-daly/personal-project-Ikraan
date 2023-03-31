require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


// IMPORT YOUR SCHEMAS HERE
// require("./models/Profiles"); //This is just an example. Don't forget to delete this

const app = express();

// This is where your API is making its initial connection to the database
// mongoose.Promise = global.Promise;
// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
//   useNewUrlParser: true,
// });

app.use(bodyParser.json());

// IMPORT YOUR API ROUTES HERE
// Below is just an example. Don't forget to delete it. 
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
// require("./routes/profilesRoutes")(app); 
// app.post("/signup"), async (req, res) =>{
  try{
  const {firstName, lastName, username, password} = req.body
  const userId = uuidv4();
  const hashedPassword = await bcrypt.hash(password, 10);
  const token = createToken(userId);
  res.json({ token, userId, firstName, lastName,username, hashedPassword})
} catch (error) {
  res.json(error);
}
app.post("/login", async (req, res) => {
  try {
  const {username, password} = req.body;
  const {users} = users.queryUsers({ name: username })
  if (users.length === 0) return res.json({message: "User not found"});
  
  const token = users.createToken(userId);
  const passwordMatch = await bcrypt.compare(password, users[0].hashedPassword);
  if (passwordMatch){
    res.json({
      token, 
      firstName: users[0].firstName,
      lastName: users[0].lastName,
      username,
      userId: users[0].id,
  });
  }
} catch (error){
  res.json(error);
}
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
})
// })}
