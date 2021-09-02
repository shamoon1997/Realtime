//client.js
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected!');
});

socket.emit('CH01', 'me', 'test msg')

socket.on('NewRecord', function (socket) {
    console.log('New Record was added in database on server side !');
});

