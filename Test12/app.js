var express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views')

app.use(express.static('public'));

app.get('/form', function (req, res) {
	res.render('form');
});

app.get('/form_receiver', function (req, res) {
	var title = req.query.title;
	var description = req.query.description;
	res.send(title+', '+description);
})

app.get('/topic', function (req, res) {
	var topics = [
		'NodeJS is...',
		'Express is...',
		'JavaScript is...'
	];
	var output = `
	<a href="/topic?id=0">NodeJS</a><br>
	<a href="/topic?id=1">Express</a><br>
	<a href="/topic?id=2">JavaScript</a><br><br>
	${topics[req.query.id]}
	`
	res.send(output);
});

app.get('/template', function (req, res) {
	res.render('temp',{time : Date(), title:'Jade'});
});

app.get('/', function (req, res) {
	res.send('Hello home page');
});

app.get('/route', function (req, res) {
	res.send('Hello router, <img src="route.jpg">')
});

app.get('/login', function (req, res) {
	res.send('<h1>Login please</h1>');
});

app.listen(3000,function () {
	console.log('3000번 포트에 연결되었습니다.');
});