'use strict';

const events = require('./events.js');
const socket = require('./socket.js');
const app = require('./app.js');

const actions = require('./commands.js');
const parse = require('./parse-buffer.js');


module.exports = {dispatchAct};

events.on('parse-buffer', doBufferThing);
events.on('send-parsed', dispatchAct);

function doBufferThing(buffer, userId, socketPool){
  // app.parseBuffer(buffer, userId, socketPool);
  events.emit('parse', buffer, userId, socketPool);
}

function dispatchAct(entry, userId, socketPool){
  console.log('inside dispatch');
  if ( entry && typeof actions.commands[entry.command] === 'function' ) {
    actions.commands[entry.command](entry, userId, socketPool);
    console.log('inside conditional', entry);
  }
}


