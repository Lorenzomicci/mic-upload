//Require Moduli
const express = require("express");
var app = express();
const uploader = require("./lib/uploader");
const mongoose = require("mongoose");
const upload = require("./lib/uploader").upload;
Observer = require("./lib/Observer").Observer;

//State = require("./lib/State").State;
//List = require("./lib/List").List;

// Instanzio le classi
//const appState = new State();
//const namesList = new List();
//Observer.update();


uploader.setstorage();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
    console.log('file uploaded');

})


//Uploading multiple files
app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  }

    res.send(files)

})

app.post('/upload', multipart(), async function(req, res, next) {
  req.findOne({}, {}, { sort: { 'created_at' : 1 } }, function(err, post) {
     console.log( post );
  });
}


app.listen(3000, function () {
  console.log('listening on port 3000!');
});
