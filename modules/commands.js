'use strict';

const events = require('./events.js');
const commands = {};
const socket = require('./app.js');

module.exports = {commands};

/**
 *
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */

events.on('@all', sendToAll);

function sendToAll(data, userId, socketPool){
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }  
}

    
/**
 *
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */

 events.on('@nickname', changeNick);
 function changeNick(data, userId, socketPool){
    socketPool[userId].nickname = data.target;

 }



/**
 *
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 */
events.on('@quit', quit);
function quit(data, userId, socketPool){
    let user = socketPool[userId];
  user.socket.end();  
}

// commands['@quit'] = (data, userId, socketPool)=>{
//   let user = socketPool[userId];
//   user.socket.end();
// };

/**
 *
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 * @param {*} socketArr
 */

events.on('@list', listAll);
funciton listAll(data, userId, socketPool, socketArr){
    let users = '';
    for(let i = 0; i<socketArr.length; i++){
      console.log('the names, ', socketArr[i].nickname);
      users += ' ' + socketArr[i].nickname;
    }
    let user = socketPool[userId];
    user.socket.write(`<${'users'}>: ${users}\n`);
    console.log('socketPool', socketPool);  
}

// commands['@list'] = (data, userId, socketPool, socketArr)=>{
//   let users = '';
//   for(let i = 0; i<socketArr.length; i++){
//     console.log('the names, ', socketArr[i].nickname);
//     users += ' ' + socketArr[i].nickname;
//   }
//   let user = socketPool[userId];
//   user.socket.write(`<${'users'}>: ${users}\n`);
//   console.log('socketPool', socketPool);
// };


/**
 *
 *
 * @param {*} data
 * @param {*} userId
 * @param {*} socketPool
 * @param {*} socketArr
 */

 events.on('@dm', sendDm);
 function sendDm(data, userId, socketPool, socketArr){
    for( let connection in socketArr ) {
        let user = socketArr[connection];
        if ( user.nickname === data.target ) {
          user.socket.write(`    <<<${socketPool[userId].nickname}>>> ${data.message}\n`);
        }
      }   
 }

// commands['@dm'] = (data, userId, socketPool, socketArr) =>{
//   for( let connection in socketArr ) {
//     let user = socketArr[connection];
//     if ( user.nickname === data.target ) {
//       user.socket.write(`    <<<${socketPool[userId].nickname}>>> ${data.message}\n`);
//     }
//   }
// };



