// Importing express library from express module
const express = require("express");

// Developing an express application
const app = express();

// Listening to the port 3000
const PORT = 3000;

// Defining a route for the root URL
app.get("/", (req, res) => {
  res.send("I am web developer");
});

// Starting the server and listening on the specified port
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});