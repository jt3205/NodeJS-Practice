var express = require('express');
var app = express();
var router = express.router();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.text());

// app.post('/login', function (req, res) {
// 	var id = req.body.id;
// 	var password = req.body.password;
// 	console.log(id);
// 	console.log(password);
// });