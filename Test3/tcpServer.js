var net = require('net');

var server = net.createServer(function(conn) {
	console.log("연결설정이 완료되었습니다");
	conn.on('data', function (data) {
		console.log(data + ' from ' + conn.remoteAddress + ' ' + conn.remortPort);
		conn.write('에코 : ' + data);
	});

	conn.on('error', function(err) {
		if(err.code === 'ECONNRESET'){
			console.log('클라이언트 연결 종료');
		}
	});
});

server.listen(8124, function() {
	console.log('서버가 8124포트에서 실행중입니다.');
});