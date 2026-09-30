// Post request in Express.js
// added middleware to read JSON data from the request body

const express = require("express"); // import the express module
const app = express(); // create an instance of express
const PORT = 3000; // define the port number

// Middleware to read JSON data
app.use(express.json()); // parse incoming JSON requests

// POST route
app.post("/user", (req, res) => { // handle POST request to /user
  console.log(req.body); // read the data sent in the request body
  res.send("User data received!"); // send a response back to the client
});

// Start server
app.listen(PORT, () => { // start the server and listen on the defined port
  console.log(`Server is running on port ${PORT}`); // log message when server starts
});