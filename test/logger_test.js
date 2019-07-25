'use strict';
var Logger = require('../lib/logger');

exports['logger'] = {
  setUp: function(done) {
    // setup here
    this._console = console;
    console = {
      msg: {},
      trace: function(msg) {
        this.msg.trace = msg;
      },
      log: function(msg) {
        this.msg.log = msg;
      },
      info: function(msg) {
        this.msg.info = msg;
      },
      warn: function(msg) {
        this.msg.warn = msg;
      },
      error: function(msg) {
        this.msg.error = msg;
      }
    };
    done();
  },
  tearDown: function (done) {
    // clean up
    console = this._console;
    done();
  },
  'TRACE LEVEL': function(test) {
    var message = "called";
    var log = new Logger(Logger.TRACE);

    test.expect(5);

    log.trace(message);
    log.debug(message);
    log.info(message);
    log.warning(message);
    log.error(message);

    test.equal(console.msg.trace, message, 'should trace message');
    test.equal(console.msg.log, message, 'should log message');
    test.equal(console.msg.info, message, 'should info message');
    test.equal(console.msg.warn, message, 'should warn message');
    test.equal(console.msg.error, message, 'should error message');

    test.done();
  },
  'DEBUG LEVEL': function(test) {
    var message = "called";
    var log = new Logger(Logger.DEBUG);

    test.expect(5);

    log.trace(message);
    log.debug(message);
    log.info(message);
    log.warning(message);
    log.error(message);

    test.equal(console.msg.trace, undefined, 'should not trace message');
    test.equal(console.msg.log, message, 'should log message');
    test.equal(console.msg.info, message, 'should info message');
    test.equal(console.msg.warn, message, 'should warn message');
    test.equal(console.msg.error, message, 'should error message');

    test.done();
  },
  'INFO LEVEL': function(test) {
    var message = "called";
    var log = new Logger(Logger.INFO);

    test.expect(5);

    log.trace(message);
    log.debug(message);
    log.info(message);
    log.warning(message);
    log.error(message);

    test.equal(console.msg.trace, undefined, 'should not trace message');
    test.equal(console.msg.log, undefined, 'should not log message');
    test.equal(console.msg.info, message, 'should info message');
    test.equal(console.msg.warn, message, 'should warn message');
    test.equal(console.msg.error, message, 'should error message');

    test.done();
  },
  'WARNING LEVEL': function(test) {
    var message = "called";
    var log = new Logger(Logger.WARNING);

    test.expect(5);

    log.trace(message);
    log.debug(message);
    log.info(message);
    log.warning(message);
    log.error(message);

    test.equal(console.msg.trace, undefined, 'should not trace message');
    test.equal(console.msg.log, undefined, 'should not log message');
    test.equal(console.msg.info, undefined, 'should not info message');
    test.equal(console.msg.warn, message, 'should warn message');
    test.equal(console.msg.error, message, 'should error message');

    test.done();
  },
  'ERROR LEVEL': function(test) {
    var message = "called";
    var log = new Logger(Logger.ERROR);

    test.expect(5);

    log.trace(message);
    log.debug(message);
    log.info(message);
    log.warning(message);
    log.error(message);

    test.equal(console.msg.trace, undefined, 'should not trace message');
    test.equal(console.msg.log, undefined, 'should not log message');
    test.equal(console.msg.info, undefined, 'should not info message');
    test.equal(console.msg.warn, undefined, 'should not warn message');
    test.equal(console.msg.error, message, 'should error message');

    test.done();
  }
};
