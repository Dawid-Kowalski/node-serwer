const http = require("http");
const fs = require("fs");

const server = http.createServer();

let indexHTML = "...";

fs.readFile("../index.html", function(err, response){
	indexHTML = response;
})

server.on("request", function(request, response){
	response.write(indexHTML);
	response.end();
});

server.listen(9010);
