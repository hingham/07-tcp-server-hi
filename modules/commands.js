'use strict';

const events = require('./events.js');
const commands = {};


module.exports = {commands};
// events.on('find-command', commands['@all']);

commands['@all'] = (data, userId, socketPool) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};
    
    
commands['@nick'] =  (data, userId, socketPool) => {
  socketPool[userId].nickname = data.target;
};


