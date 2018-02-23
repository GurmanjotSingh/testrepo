const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000 ;
var app = express();
var server = http.createServer(app);
//var server = app.listen(1337);
//var io = require('socket.io').listen(server);
var io = require('socket.io').listen(server);


app.use(express.static(publicPath)); // middle ware config

 io.on('connection',(socket) => {
     console.log('User was Connected');

   socket.emit('newEmail' , {
       from: 'mike@example.com',
       text: 'Hey, Whts going on ?',
       createdAt: 123
   });

 socket.on('disconnect',(socket) => {
    console.log('User was Disconnected');
})

socket.on('createEmail' , (newEmail) => {
  console.log('createEmail',newEmail);
 });
 });

server.listen(port , () => {
    console.log(`Server is up at port ${port}`);
})
