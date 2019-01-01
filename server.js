var express  = require('express');
var socket   = require('socket.io');
var firebase = require('firebase');
// var dt = require ('./public/froent_chat');

// App setup
var app = express();
var server = app.listen(1111, function(){
    console.log('listening for requests on port 1111,');
// console.log(dt.datetime);

});

// Static files
app.use(express.static('public'));

// Socket setup & pass server Establish the socket connection
var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);
    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
    ref.push(data);
        io.sockets.emit('chat', data);
    // ref.push(window.date);
    });

     // Handle typing event
     socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});

// connection to the firebase 
firebase.initializeApp({
    serviceAccount:"./chatapp-1048c-firebase-adminsdk-evdbd-092fb3a431.json",
    databaseURL: "https://chatapp-1048c.firebaseio.com/"
    });
    var ref=firebase.database().ref('chatapp');


