'use strict';
const express = require('express');
const cors = require('cors');
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer()
const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post("/api/fileanalyse", upload.single("upfile"),function(req, res) {
  const {file} = req;  
  const {buffer, fieldname, ...response} = file;
  res.json(response)
  })

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
