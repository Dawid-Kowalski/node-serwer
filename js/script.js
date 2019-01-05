const http = require("http");
const fs = require("fs");

const server = http.createServer();

let indexHTML = "...";

fs.readFile("../index.html", function(err, response){
	indexHTML = response;
})

let errImage = "...";

fs.readFile("../images/blad.jpg", function(err, response){
	errImage = response;
})

server.on("request", function(request, response){
	if(request.method === "GET" && request.url === "/"){
		response.write(indexHTML);
		response.end();
	} else {
		response.write(errImage);
		response.end();
	}
});

server.listen(9010);
