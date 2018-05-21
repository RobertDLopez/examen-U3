var app = require ('express')();
var http = require ('http').Server(app);
var express = require ('express');
app.use(express.static(__dirname+"/"));


var io = require('socket.io')(http);//recien agregado

app.get('/', function(req, res){
	res.sendFile(__dirname + '/pizarron/index.html');
});

	http.listen(3000, function(){
	console.log('listening on *:3000');
});