// Import express
const express = require('express');

// Create app
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
