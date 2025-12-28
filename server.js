// server.js

const express = require('express');
const path = require('path');
const app = express();

console.log('Current directory:', __dirname); 
console.log('Looking for public folder at:', path.join(__dirname, 'public')); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {  // '0.0.0.0' — important for Render!
  console.log(`App running on port ${PORT}`);
});