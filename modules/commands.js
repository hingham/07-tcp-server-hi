'use strict';

const events = require('./events.js');
const commands = {};
const socket = require('./app.js');

module.exports = {commands};


commands['@all'] = (data, userId, socketPool) => {    
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
};
    
commands['@nickname'] =  (data, userId, socketPool) => {
  socketPool[userId].nickname = data.target;
};

commands['@quit'] = (data, userId, socketPool)=>{
  let user = socketPool[userId];
  user.socket.end();
};

commands['@list'] = (data, userId, socketPool, socketArr)=>{
  let users = '';
  for(let i = 0; i<socketArr.length; i++){
    console.log('the names, ', socketArr[i].nickname);
    users += ' ' + socketArr[i].nickname;
  }

  let user = socketPool[userId];
  user.socket.write(`<${'users'}>: ${users}\n`);
  console.log('socketPool', socketPool);
};


commands['@dm'] = (data, userId, socketPool, socketArr) =>{
  for( let connection in socketArr ) {
    let user = socketArr[connection];
    if ( user.nickname === data.target ) {
      user.socket.write(`    <<<${socketPool[userId].nickname}>>> ${data.message}\n`);
    }
  }
};

// events.on('@dm', dmUser);

// module.exports = dmUser;



