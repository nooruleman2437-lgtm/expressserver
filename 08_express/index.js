const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to read JSON data
app.use(express.json());

// POST route
app.post("/user", (req, res) => {
  console.log("POST data:", req.body);
  res.send("User created!");
});

// PUT (update)route
app.put("/user", (req, res) => {
  const { name, email } = req.body;
  // handle the update logic here
  res.json({ message: "User updated", name, email });
});

// 404 route
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Start server
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});