const router = require("express").Router();
const { v4: uuidv4 } = require('uuid'); //for unique ids
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//function that reads file asynchronously and second argument makes sure it'll be compatible across multiple OS
function returnNote(){
  return readFileAsync("./db/db.json", "utf8");
}

router.get("/notes", (req, res) => {
 returnNote().then(note => {
  res.json(JSON.parse(note))
  console.log(note)
 })
});

router.post("/notes", (req, res) => {     
returnNote().then(note => {
  console.log(note)
  note = JSON.parse(note);
  console.log(note);

  // console.log(req.body);

  //add new values to the object, from the body of the request, for the title, text, and id
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(), //for generating random id
  };
  // console.log(newNote);

//push new note into database
  note.push(newNote);

//after stringifying, add the note to the database
  writeFileAsync("./db/db.json", JSON.stringify(note)).then(res.json(newNote));
    console.log(note)
  });
});


// --------------------delete note --------------------------------
//started to work on the delete aspect, I would love some advice on how to execute!!!!!!

// router.delete('/notes/:id', (req, res) => {
//   returnNote();
// req.params
//   })


module.exports = router;


