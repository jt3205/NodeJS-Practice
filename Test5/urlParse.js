var dns = require('dns');

dns.lookup('gondr.iptime.org', function (err, ip) {
	if(err) throw err;
	console.log(ip);
});