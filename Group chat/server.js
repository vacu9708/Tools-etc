const express = require('express');
const backend = express();
var server = require('http').createServer(backend);
var socket = require('socket.io')(server);

backend.use('/node_modules/socket.io/client-dist', express.static(__dirname+'/node_modules/socket.io/client-dist'))

backend.get('/', (req, res)=>{
  res.sendFile(__dirname+'/public/index.html');
});

socket.on('connection', (connected)=>{
  console.log('A user connected');
  connected.broadcast.emit('chat message', 'A user connected');

  connected.on('disconnect', ()=>{
    console.log('A user disconnected');
    connected.broadcast.emit('chat message', 'A user disconnected');
  });

  connected.on('chat message', (data)=>{ // Emit a message from a user to all users
    socket.emit('chat message', data);
  });
});

server.listen(3000, ()=>{
  console.log('listening on: 3000');
});