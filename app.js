// const http = require('http');
// const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const port = 3000;
// const app = express.createServer();
// var io = require("socket.io").listen(server);
var devices = new Array;
// var server = app.listen(port);
var midi = require('midi');
// var gameport = process.env.PORT || 3000;
// var UUID = require('node-uuid');
// var verbose = false;

var gameport = process.env.PORT || 3000;
var io = require('socket.io')({
  transports  : [ 'websocket' ]
});
var express = require('express');
var UUID = require('node-uuid');
var verbose = false;
const app = express();
app.listen(3000)



var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('/index.html');
});

var input = new midi.input();

input.getPortCount();

input.getPortName(0);

input.on('message', function(deltaTime, message){
	console.log('m: ' + message + ' d: ' + deltaTime)
})

input.openPort(0);

input.ignoreTypes(false, false, false);

input.closePort();


// var sio = io.listen(port);

// sio.use(function(socket, next){
// 	var handshake =
// })

app.use(function(socket, next) {
    var handshake = socket.request;

    if (!handshake) {
        return next(new Error('[[error:not-authorized]]'));
    }

    cookieParser(handshake, {}, function(err) {
        if (err) {
            return next(err);
        }

        var sessionID = handshake.signedCookies['express.sid'];

        db.sessionStore.get(sessionID, function(err, sessionData) {
            if (err) {
                return next(err);
            }
            console.log(sessionData);

            next();
        });
    });
});





// sio.sockets.on('connection', function (client) {
        
//             //Generate a new UUID, looks something like 
//             //5b2ca132-64bd-4513-99da-90e838ca47d1
//             //and store this on their socket/connection
//         client.userid = UUID();

//             //tell the player they connected, giving them their id
//         client.emit('onconnected', { id: client.userid } );

//             //Useful to know when someone connects
//         console.log('\t socket.io:: player ' + client.userid + ' connected');
        
//             //When this client disconnects
//         client.on('disconnect', function () {

//                 //Useful to know when someone disconnects
//             console.log('\t socket.io:: client disconnected ' + client.userid );

//         }); //client.on disconnect
     
//     }); //sio.sockets.on connection

// io.sockets.on('connection', function(){
// 	sockets.on(function(message){
// 		console.log("socket on")
// 	})
// })

// port.on('open', function(){
// 	port.on('data', function(data){
// 		console.log((data));
// 	})

// })

// port.on('error', function(err){
// 	console.log(err.message);
// })

// const server = http.createServer(app);
// server.listen(port, () => {
// 	console.log("Server running at http://localhost:"+port);
// })