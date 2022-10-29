const router = require("express").Router();
const { v4: uuidv4 } = require('uuid'); //for unique ids
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

function returnNote(){
  return readFileAsync("./db/db.json", "utf8");
}
router.get("/notes", (req, res) => {
 returnNote().then(notes => {
  res.json(JSON.parse(notes))
  console.log(notes)
 })
});

router.post("/notes", (req, res) => {     
returnNote().then(note => {
  console.log(note)
  note = JSON.parse(note);
  console.log(note);

  console.log(req.body);

  //add new values to the object
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(), //for generating random id
  };
  console.log(newNote);

  //push new note into db
  note.push(newNote);

//
  writeFileAsync("./db/db.json", JSON.stringify(note)).then(res.json(newNote));
    console.log(note)
  });
});

module.exports = router;


