'use strict';

const events = require('./events.js');
const socket = require('./socket.js');
const app = require('./app.js');

const actions = require('./commands.js');
const parse = require('./parse-buffer.js');
let socketPoolArr = [];

module.exports = {dispatchAct};

events.on('socket-arry', getSocketArr);
events.on('parse-buffer', doBufferThing);
events.on('send-parsed', dispatchAct);

function getSocketArr(arr, socketPool){
  return arr.push(socketPool);
}

/**
 *
 *
 * @param {*} buffer
 * @param {*} userId
 * @param {*} socketPool
 */

function doBufferThing(buffer, userId, socketPool){
  // app.parseBuffer(buffer, userId, socketPool);
  events.emit('parse', buffer, userId, socketPool);
}



/**
 *
 *
 * @param {*} entry
 * @param {*} userId
 * @param {*} socketPool
 * @returns
 */

function dispatchAct(entry, userId, socketPool){
  console.log('inside dispatch');
  if(!socketPoolArr.includes(socketPool[userId])){
    socketPoolArr.push(socketPool[userId]);//create the array
  }
  console.log('trying to print arry', socketPoolArr);
  // events.emit('socket-arry', socketPoolArr);
  
  events.emit(entry.command, entry, userId, socketPool, socketPoolArr);

  // if (entry && typeof actions.commands[entry.command] === 'function' ) {
    
  //   actions.commands[entry.command](entry, userId, socketPool, socketPoolArr);
  //   console.log('inside conditional', entry);
  // }
  return true;
}