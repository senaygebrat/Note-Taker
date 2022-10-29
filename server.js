//dependencies
const express = require('express');
const { fstat } = require('fs');
const path = require('path');
const htmlRoutes = require("./routes/htmlRoute");
const apiRoutes = require("./routes/apiRoute");

//sets up the express app
const app = express();
const PORT = 3000;

//added a static middleware for serving assets in the public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
