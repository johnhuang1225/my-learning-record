// server/main.js
var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../app'));

app.get('/', function (req, res) {
  res.render('./../app/index.ejs');
});

app.listen(port);
