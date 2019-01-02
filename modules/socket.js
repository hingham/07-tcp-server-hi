'use strict';
const uuid = require('uuid/v4');
const events = require('./events.js');
const dispatch = require('./dispatch.js');
const app = require('./app.js');
// const chatroom = require('../chatroom.js');

// const commands = {};
const socketPool = {};
let socketArr = [];

module.exports = {logSocket};

events.on('socket', logSocket);

// events.on('parse-buffer', app.getBuffer);

function logSocket (socket){
  let id = uuid();
  socketPool[id] = {
    id:id,
    nickname: `User-${id}`,
    socket: socket,
  };
  socket.write(`enter nickname: `);
  console.log('made a socket');
  // socketArr.push(socketPool[id].nickname);
  console.log('socket arry', socketArr);
  if(socket){
    socket.on('data', (buffer) => events.emit('parse-buffer', buffer, id, socketPool));  

  }
}




