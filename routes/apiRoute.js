const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

router.get("/notes", (req, res) => {
  let note = fs.readFileSync("db/db.json");
  note = JSON.parse(note);

  res.json(note);
});

router.post("/notes", (req, res) => {
  let note = fs.readFileSync("db/db.json");
  note = JSON.parse(note);

  console.log(req.body);

  // let newNote = {
  //   title: req.body.title,
  //   text: req.body.text,
  //   id: uuidv4(),
  // };

  // note.push(newNote);

  // fs.writeFileSync("db/db.json", JSON.stringify(note));

  // res.json(note);
  //res.json(note);

});

module.exports = router;


