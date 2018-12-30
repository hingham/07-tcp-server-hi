'use strict';
const app = require('./modules/app.js');
const socket = require('./modules/socket.js');
const events = require('./modules/events.js');

const net = require('net');


const port = process.env.PORT || 3001;
const server = net.createServer();

server.listen(port, () => {
  console.log(`Chat Server up on ${port}`);
});

server.on('connection', app.findSocket);



