const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
// let note = readFileAsync("./db/db.json", "utf8");

function returnNote(){
  return readFileAsync("./db/db.json", "utf8");
}
router.get("/notes", (req, res) => {
 returnNote().then(notes => {
  console.log(notes)
 })
  

});

router.post("/notes", (req, res) => {     
  let note = readFileAsync("./db/db.json", "utf8");
  note = JSON.parse(note);

  console.log(req.body);

  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  console.log(newNote);

  note.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(note));
  res.json(note);

});

module.exports = router;


