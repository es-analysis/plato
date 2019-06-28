
"use strict";

module.exports = Logger;

function Logger(level) {
  this.level = level;
}

var levels = [
  'TRACE',
  'DEBUG',
  'INFO',
  'WARNING',
  'ERROR'
];
var apiMap = {
  'TRACE': 'trace',
  'DEBUG': 'log',
  'INFO': 'info',
  'WARNING': 'warn',
  'ERROR': 'error'
};

levels.forEach(function(level, i){
  Logger[level] = i;
  Logger.prototype[level.toLowerCase()] = function() {
    if (i >= this.level) console[apiMap[level]].apply(console,arguments);
  };
});
