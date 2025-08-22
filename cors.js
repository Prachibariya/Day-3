const express = require('express');
const cors = require('cors');
const app = express();

// Allow all origins (not secure for production)
app.use(cors());

// Example route
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
