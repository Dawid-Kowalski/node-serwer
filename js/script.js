const http = require("http");

const server = http.createServer();

server.on("request", function(request, response){
	response.write("works");
	response.end();
});

server.listen(9010);
