//Require Moduli
const express = require("express");
var app = express();
const mongoose = require("mongoose");
var md5 = require('md5');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const settings = require('./config/app-settings.js');
const uploader = require("./lib/uploader");
const func = require("./lib/update");
const upload = require("./lib/uploader").upload;
Observer = require("./lib/Observer").Observer; // Require dell oggetto observer
Subject  = require("./lib/Subject").Subject; // Require dell oggetto Subject

Object.create(Observer);
Object.create(Subject);

State = require("./lib/State").State;
List = require("./lib/List").List;

// Instanzio le classi
lista = Object.create(List);
stato = Object.create(State);


const dom = new JSDOM(``, {
  url: "localhost:3000",
  referrer: "https://example.com/",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000
});



mongoose.connect(settings.mongoConnString, {useNewUrlParser: true});
uploader.setstorage();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  var nameEncripted = "";
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
    nameEncripted = md5(file);
    console.log('file uploaded');

})


/*
API di caricamento
 - Permette di caricare un nuovo file.
 - Permette di caricare una nuova versione di un file esistente di cui specifico un ID
 - Se setto un flag a true, permette di caricare una nuova versione di un file esistente,
   la cui esistenza viene controllata tramite MD5
   (l'MD5 delle versioni caricate viene salvato a livello di record DB.
   FA SEMPRE FEDE L'ULTIMA VERSIONE CARICATA).*/

app.post('/uploadfileid', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
    // Non riesco a connettermi al db
    if(dom.window.document.querySelector('.checkbox').checked) {
    var encript = md5(file.originalname);
    console.log('file uploaded\n' + file.originalname + "\n" + encript);
  }
  else {
    onsole.log('file uploaded\n');
  }

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



app.listen(3000, function () {
  console.log('listening on port 3000!');
});
