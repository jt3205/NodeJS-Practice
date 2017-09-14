var mysql = require('mysql');

function getConnection() {
	var conn = mysql.createConnection({
		host : 'gondr.iptime.org',
		user : 'info3',
		password : '1234',
		database : 'info3'
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