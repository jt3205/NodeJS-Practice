var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<meta charset="utf-8"/><h1>노드JS와 함께하는 웹서버</h1>');
});

server.on('request',function () {
	console.log("클라이언트로부터 요청이 들어왔습니다.");
});

server.on('connection', function () {
	console.log("클라이언트와 연결되었습니다.");
});

server.on('close', function () {
	console.log("서버 연결이 종료되었습니다.");
});

server.listen(52273);