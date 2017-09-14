var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.text());

app.get('/', function (req, res, next) {
	res.render('login');
});

app.post('/login', function (req, res) {
	var conn = getConnection();
	conn.query('select password from user where id=\''+req.body.id+'\';' , function (err, result, field) {
		if(result[0].password === req.body.password){
			res.render('boards');
		}
		else{
			res.render('login');
		}
		console.log(result[0]);
	});
});

app.get('/write', function (req, res) {
	res.render('writeBoard')
});

app.listen(3000,function () {
	console.log('3000번 포트에 연결되었습니다.');
});

function getConnection() {
	var conn = mysql.createConnection({
		host : '',
		user : '',
		password : '',
		database : ''
	});

	conn.connect(function (err) {
		console.log("############################################");
		console.log('DB Conn!');
		console.log("############################################");
		// conn.query('select * from user', function (err, results, field) {
		// 	if (err) {throw err;}
		// });
	});
	return conn;
}