# Note-Taker
![Note Taker Preview](./public/assets/img/Note%20Taker.gif)

## About Note-Taker
Note-Taker is an app that upon opening, allows a user to enter a titled note of their choice with the ability to save.

## Code Snippet
Below is a copy of how the new values are being added for the new note upon save

```
router.post("/notes", (req, res) => {
returnNote().then(note => {
  console.log(note)
  note = JSON.parse(note);
  console.log(note);

  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(), //for generating random id
  };

  note.push(newNote);
```

## Technologies Used

HTML, CSS, JavaScript, Node, Express

## Author Links

[LinkedIn](https://www.linkedin.com/in/senayg/)
[Github](https://github.com/senaygebrat)
