// Importing express library from express module
import express from "express";

// Developing an express application
const app = express();

// Listening to the port 5000
const PORT = 5000;

// Defining a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});