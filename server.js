const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static('public'));

app.post('/analyze', (req, res) => {
  const header = req.body.header;
  const lines = header.trim().split('\n');
  const result = {};

  for (let line of lines) {
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim();
      result[key] = value;
    }
  }

  res.json(result);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
