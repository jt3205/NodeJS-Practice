var http = require('http');

var fs = require('fs');

var server = http.createServer(function (req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 200;

	var file = fs.createReadStream('./index.html');
	file.on("open", function () {
		file.pipe(res);
	});
	file.on("error", function (err) {
		console.log(err);
	});
});

server.listen(52273, function () {
	console.log("서버에서 52273번에서 실행중입니다.");
});