//dependencies
const express = require('express');
const path = require('path');

//sets up the express app
const app = express();
const PORT = 3000;

app.use(express.static('./Develop/public'));

// app.get('./add', (req, res) => res.sendFile(path.join(__dirname, './notes.html')));
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname + '/Develop/public', 'notes.html')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/Develop/public', 'index.html')));








app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
