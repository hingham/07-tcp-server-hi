'use strict';

const events = require ('./events.js');
const logger = require('./logger.js');

module.exports = {parse};

function parse (buffer) {
  console.log('in app.js', buffer);
  events.emit('parse-buffer', buffer);
}
  

// function dispatchAction(userId, buffer) {

//   events.emit('dispatch', {userId: userId, buffer: buffer});
 
// }
