var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response){

	response.end("It Works! Path Hit: " + request.url);

}

function handleRequest2(request, response){

	response.end("You are such a great coder!");
	console.log(request.url);

}

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function(){
	console.log("You wish you were a great coder!" + PORT1);

});

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){

	console.log("Server listening on: http://localhost:" + PORT2);
});