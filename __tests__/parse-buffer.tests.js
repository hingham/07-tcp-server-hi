'use strict';

jest.mock('../modules/socket.js');
const action = require('../modules/commands.js');
const socketPool = require('../modules/socket.js');

const events = require('../modules/events.js');
const app = require('../modules/app.js');
const parse = require('../modules/parse-buffer');
const socket = require('../modules/socket.js');

describe('chat', () =>{
  describe('parse buffer', () =>{

    it('parse returns an object', () =>{
      let buf = Buffer.from('hello there');
      let result = parse.parseBuffer(buf);
      expect(typeof(result)).toEqual('object');
    });

    it('returns an object with a command, target, and message', () =>{
      let buf = Buffer.from('@list tim robbins');
      let result = parse.parseBuffer(buf);
      let commandObj = {
        command: '@list',
        message: 'robbins',
        payload: 'tim robbins',
        target: 'tim',
      };
      expect(result).toEqual(commandObj);
    });

    it('if no message is included, message is undefined', () =>{
      let buf = Buffer.from('@list tim');
      let result = parse.parseBuffer(buf);
      let commandObject = {
        command: '@list',
        message: undefined,
        payload: 'tim',
        target: 'tim',
      };
      expect(result).toEqual(commandObject);
    });
  });

});