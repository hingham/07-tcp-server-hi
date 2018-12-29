'use strict'

const uuid = require('uusid/v4'); //produces unique names world wide
const net = require('net');//the way to will work with TCP-built into node
const EventEmitter = require('events');

const port = process.env.PORT | 3000;
const server = net.createSertver();

const socketPool = {};
const commands = {};

server.on('connection', (socket)=>{//the way TCP works //nc localhost 3000 
    let id = uuid();
    socketPool[id]= {
        id: id,
        nickname: `User-${id}`,
        socket: socket,
    }

    socket.on('data', (buffer)=>{
        
        dispatchAction(id, buffer);
    });

    console.log('conenction from', socketPool[id]);
});

const dispatchAction = (userid, buffer) =>{
    let entry = parse(buffer);
    console.log(entry);

    if(entry && typeof commands[entry.command] ==='function'){
        // commands[entry.command](entry, userid);
    }
}

const parse = (buffer) => {
    let text = buffer.toString().trim();
    if(! text.startsWith('@') ){ return null; }
    let [command, payload] = text.split(/\s+(.*)/); //split text on the first white space
    let [target, message] = payload.split(/\s+(.*)/);
    return {command, payload, target, messaage};//command is a key, value will be the thing that command stores

};

commands['@all'] = (data, userid)=>{
    console.log(data);
    console.log(userid);
    for(let connection in socketPool ){
        let user = socketPool [connection];
        user.socket.write(`<${socketPool[userid].nickname}> ${data.payload}\n`);
    }
};

commands['@nick'] = (data, userid) =>{
    socketPool[user.id].nickname = data.target;
    
}
//People will connect in a chatroom
    //give them an ID
        //put them in a list 
        //be able to change name in a list

//people will talk
    //consume packets of data
    //interpret what they meant
        //@nickname Fred
        //@all Hi There
    //do something cool
        //either messing with the list 
        //sending out the words

server.listen(port, () =>{
    console.log(`server up on`, port);
});