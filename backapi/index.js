const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Use cors middleware
app.use(cors());

// Mock API data
const apiData = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hello, I am live!");
});

app.get("/services", (req, res) => {
  res.json(apiData); // Send JSON data
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
