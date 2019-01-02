![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Project Name

### Author: Student/Group Name

### Links and Resources
* [repo](http://xyz.com)
* [travis](http://xyz.com)
* [back-end](http://xyz.com)
* [front-end](http://xyz.com)

### Modules
#### `app.js`
#### `commands.js`
#### `dispatch.js`
#### `events.js`
#### `parse-buffer.js`
#### `socket.js`


###### Usage Notes & running the app
*Initialize npm: npm init
*install eslint
*`node chatroom.js` to start app
*`nc localhost:3001` to connect
*upon connection enter nickname by typing: @nickname 'nickname'


###### Commands
*@nickname 'nicknamd' --program asks you to set this first, may use this command to reset 
*@all hi --sends a message of hi to all users
*@list all --prints of list of all users connected
*@quit session --quits your session
*@dm 'user' message --sends the message to the user specified

### Setup
#### `.env` requirements
* `PORT` - 3001

#### Tests
* How to run tests:  npm run test -watch
* Assertions made: 
* * parseBuffer accurately parses a buffer
* * function dispatchAct runs a console log
* What assertions need to be / should be made:
* * commands work as intended
* * things are being emitted from the appropriate function
