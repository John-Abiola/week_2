require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("My week 3 API");
});


app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  res.send(`Hello, ${name}!`);
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({ error: "User ID not found." });
  }

  res.send(`User ${id} profile`);
});


app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});


app.listen(PORT, () => {
  console.log(`Server running on port $(PORT)`);
});
