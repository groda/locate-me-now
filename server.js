// server.js

const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'public' folder
// This automatically serves index.html when visiting /
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Explicit root route (not strictly needed, but nice to have)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Catch-all for 404s (clean error response)
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Page not found' });
  // Or, if you make a 404.html later:
  // res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Port configuration
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});