var express  = require('express');
var socket   = require('socket.io');
var firebase = require('firebase');
var http = require('http');

var app = express();
var server = app.listen(1111, function(){
    console.log('listening for requests on port 1111,');
// console.log(dt.datetime);

});

// Static files
app.use(express.static('public'));



var uiData =['rohti@rdmuniversal.com','rohti','male'];
// ref.push(uiData);


// connection to the firebase 
firebase.initializeApp({
    serviceAccount:"./chatapp-1048c-firebase-adminsdk-evdbd-092fb3a431.json",
    databaseURL: "https://chatapp-1048c.firebaseio.com/"
    });
    var ref=firebase.database().ref('chatapp');
