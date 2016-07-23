var express = require('express');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

var app = express();
var server = app.listen(1234);
var io = socketio.listen(server);

var staticDir = __dirname + '/public/';

var messages = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
	res.sendFile(staticDir + 'index.html');
});

app.get('/messages', function (req,res){
	res.json(messages);
});

app.post('/messages', function(req,res){
	messages.push(req.body);
	res.json(req.body);
});

app.get('/index_socket',function(req,res){
	res.sendFile(staticDir + 'index_socket.html')
});

io.on('connection',function(socket){
	console.log('Client connected');

	socket.on('disconnected', function(){console.log('Client disconnected')});
	socket.on('chat message', function(msg){
		messages.push(msg);
		io.emit('chat message', msg);
	});
	socket.emit('chat history', messages);
});