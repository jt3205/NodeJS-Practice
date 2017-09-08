var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

client.connect('8124', 'localhost', function() {
	console.log('서버로 연결합니다');
	client.write('클라이언트 와써여! 뿌우!');
});

process.stdin.resume();

process.stdin.on('data', function (data) {
	client.write(data);
});

client.on('data', function (msg) {
	console.log(msg);
});

client.on('error', function (err) {
	if(err.code === 'ECONNRESET'){
		console.log('서버 연결 종료');
	}
});