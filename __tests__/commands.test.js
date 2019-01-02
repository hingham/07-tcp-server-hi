'use strict';

const dispatch = require('../modules/dispatch.js');
const action = require('../modules/commands.js');
const socketPool = require('../modules/socket.js');
const events = require('../modules/events.js'); 

describe('chat', () =>{
  describe('spys functions', () =>{

    it('logSocket runs a console.log', () =>{
      const spy = jest.spyOn(console, 'log');
      socketPool.logSocet();
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
    
    it('dispatch runs a console.log', () =>{
      let commandObject = {
        commands: '@dm',
        target: 'none',
        message: 'hello',
      };
      const spy = jest.spyOn(console, 'log');
      dispatch.dispatchAct(commandObject, 1, socketPool);
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
      
  });
    
  describe('commands action', () =>{
    it('sends nothing if the target user is not valid', () =>{
      let commandObject = {
        commands: '@dm',
        target: 'none',
        message: 'hello',
      };
      action.commands['@dm'](commandObject,1, socketPool);
      expect(socketPool.write).not.toHaveBeenCalled();
    });
  });
});
