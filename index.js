//Require Moduli
const express = require("express");
var app = express();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
Observer = require("./lib/Observer").Observer;
//State = require("./lib/State").State;
//List = require("./lib/List").List;

// Instanzio le classi
//const appState = new State();
//const namesList = new List();
//Observer.update();

app.get('/', function (req, res) {

});

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])

app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files(String -> Array);  /*is an object*/ //where fieldname is the key, and the value is array of files
  //
  // e.g.
//    req.files['avatar'][0] -> File
//    req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
})

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
