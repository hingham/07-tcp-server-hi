'use strict';

const events = require('./events.js');
const chatroom = require('../chatroom.js');

module.exports = {parseBuffer};


function parseBuffer(buffer){
    // console.log('in logger', buffer);
    // console.log(buffer.toString().trim());
  let text = buffer.toString().trim();
  if ( !text.startsWith('@') ) { return null; }
  let [command,payload] = text.split(/\s+(.*)/);
  let [target,message] = payload.split(/\s+(.*)/);
//   console.log( [command, payload] );
    events.emit('accept-buffer', {command,payload,target,message});
//   return {command,payload,target,message};
}

// function dispatchAct(userId, buffer){
//     let entry = app.parse(buffer);
//     if ( entry && typeof commands[entry.command] === 'function' ) {
//     commands[entry.command](entry, userId);
//     }
// }

// events.on('dispatch',)

events.on('parse-buffer', parseBuffer);
