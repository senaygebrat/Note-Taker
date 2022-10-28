//dependencies
const express = require('express');
const { fstat } = require('fs');
const path = require('path');
// const db = require("./Develop/db/db.json");
const htmlRoutes = require("./routes/htmlRoute");
const apiRoutes = require("./routes/apiRoute");
// const uniqueId = require('unique-id'); 

//sets up the express app
const app = express();
const PORT = 3000;

//added a static middleware for serving assets in the public folder
app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// app.post("/api/notes", (req, res) =>{
//   console.log(req.body)
//   res.json(db)
// })

// app.get("/api/notes", (req, res) =>{
//   console.log(req.body)
//   res.json(db)
// })


//The following API routes should be created:
//GET /api/notes should read the db.json file and return all saved notes as JSON.
// app.post('/api/notes', (req, res) => res.json() => {
// });








// app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/Develop/public', 'index.html')));

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
