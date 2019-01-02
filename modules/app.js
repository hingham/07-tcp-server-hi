'use strict';

const events = require ('./events.js');
const socket = require('./socket.js');

module.exports = {findSocket, parseBuffer};

/**
 *
 *
 * @param {*} socket
 */

function findSocket(socket){
  console.log('inside find Socket');
  events.emit('socket', socket);
}

function parseBuffer(buffer, id, socketPool){
  console.log('trying to parse');
  events.emit('parse', buffer, id, socketPool);
}

function getBuffer(buffer, id, socketPool){
  console.log('inside find getBuffer');
  events.emit('parse-buffer', buffer, id, socketPool);
}

