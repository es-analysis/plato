'use strict';

// node api
var fs = require('fs');

// local lib
var Logger = require('./logger');

var log = new Logger(Logger.WARNING);

exports.findCommonBase = function(files) {
  if (!files || files.length === 1) return '';
  var first = files[0];
  var prefixlen = first.length;
  files.forEach(function(file){
    for (var i = prefixlen; i > 0; i--) {
      if (file.substr(0,i) === first.substr(0,i)) {
        prefixlen = i;
        return;
      }
    }
    prefixlen = 0;
  });
  return first.substr(0,prefixlen);
};

exports.formatJSON = function (report) {
  return JSON.stringify(report, function(k,v){
    if (k === 'identifiers') return ['__stripped__'];
    return v;
  });
};

exports.readJSON = function (file) {
  var result;
  log.debug('Parsing JSON from file %s', file);
  try {
    var src = fs.readFileSync(file);
    result = JSON.parse(src);
  } catch(e) {
    log.warning('Could not parse JSON from file %s', file);
  }
  return result;
};

exports.stripComments = function (str) {
  /*jshint regexp:false */
  str = str || '';

  var multiline = /\/\*(?:(?!\*\/)|.|\n)*?\*\//g;
  var singleline = /\/\/.*/g;

  return str.replace(multiline, '').replace(singleline, '');
};

