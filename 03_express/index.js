// Importing express library from express module
const express = require("express");

// Developing an express application
const app = express();

// Listening to the port 5500
const PORT = 5500;

// Defining a route for the root URL
app.get("/", (req, res) => {
  res.send("my name is Eman");
});

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});