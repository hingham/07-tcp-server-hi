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

function User(socket){
  let id = uuid();
  this.id = id;
  this.nickname = `User-${id}`;
  this.socket = socket;
}
/**
 *
 *
 * @param {*} socket
 */

function logSocket (socket){
  let user = new User(socket);
  // let id = uuid();
  // socketPool[user.id] = {
  //   id:id,
  //   nickname: `User-${id}`,
  //   socket: socket,
  // };
  socketPool[user.id] = user;
  socket.write(`enter nickname: `);
  console.log('made a socket');
  // socketArr.push(socketPool[id].nickname);
  console.log('socket arry', socketPool);
  if(socket){
    socket.on('data', (buffer) => events.emit('parse-buffer', buffer, user.id, socketPool));  

  }
}




