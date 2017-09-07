var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.end('<h1>Hello World!</h1>');
}).listen(52273, function() {
	console.log("서버가 52273번 포트에서 실행중입니다.");
});