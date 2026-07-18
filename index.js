// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies (we will need this later for POST/PUT)
app.use(express.json());

// A simple hello world for now
app.get('/', (req, res) => {
  res.send('Hello, server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});