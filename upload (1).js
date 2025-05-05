const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' })); // Data limit badha diya for image base64

app.post('/upload', (req, res) => {
  const images = req.body;

  fs.readFile('image.json', 'utf8', (err, data) => {
    let existing = [];

    if (!err && data) {
      try {
        existing = JSON.parse(data);
      } catch (e) {
        existing = [];
      }
    }

    existing.push(...images);

    fs.writeFile('image.json', JSON.stringify(existing, null, 2), err => {
      if (err) {
        res.status(500).send('Failed to save images');
      } else {
        res.send('Images saved to image.json successfully');
      }
    });
  });
});

app.get('/upload', (req, res) => {
  fs.readFile('image.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Failed to read file');
    } else {
      try {
        const json = JSON.parse(data);
        res.json(json);
      } catch (e) {
        res.status(500).send('Invalid JSON');
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});