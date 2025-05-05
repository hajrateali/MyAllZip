const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST request to receive form data
app.post("/submit", (req, res) => {
  const newData = req.body;

  // Read existing data
  fs.readFile("01.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("File read error");

    let jsonData = [];
    try {
      jsonData = JSON.parse(data);
    } catch {
      jsonData = [];
    }

    // Push new data
    jsonData.push(newData);

    // Write updated data back to file
    fs.writeFile("01.json", JSON.stringify(jsonData, null, 2), (err) => {
      if (err) return res.status(500).send("File write error");
      res.send("Data saved successfully");
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});