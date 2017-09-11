const http = require('http');

const port = 1337;
const hostname = 'localhost';

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hello World\n');
});
server.listen(port, hostname, function() {
	console.log(port+' 포트에서 서버가 동작중입니다.');
});