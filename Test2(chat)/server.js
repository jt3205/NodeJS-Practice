var app = require('express')();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	console.log('유저가 연결되었습니다.');
	socket.on('disconnect',function () {
		console.log('유저의 연결이 종료되었습니다.');
	});
	socket.on('chat message', function (msg) {
		console.log('message : ' + msg);
		io.emit('chat message', msg);
	});
});

http.listen(3000, function () {
	console.log('listening on *:3000');
});