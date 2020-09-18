var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	var fileName = "fil.html";
	fs.appendFile(fileName, '\n3rd line', function(err){		
		if(err) throw err;
		res.write("Appended");
		res.end();
	});
}).listen(8080);
