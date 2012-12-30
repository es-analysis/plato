'use strict';

// External libs.
var getopt = require('posix-getopt');

var plato = require('./plato');

exports.exec = function(options, done) {
  if (options) {
    Object.keys(options).forEach(function(key) {
      if (!(key in exports.args)) exports.args[key] = options[key];
    });
  }

  var files     = exports.args.files;
  var outputDir = exports.args.d.value;
  var options   = exports.args;

  plato.inspect(files, outputDir, options, done);
};


exports.options = require('./cli/options');

exports.args = parseArgs(exports.options);

function parseArgs(options) {
  var optionString = '',
      required = [];

  Object.keys(options).forEach(function(option){
    var def = options[option];
    optionString += option;
    if (def.type === 'String') optionString += ':';
    if (def.long) optionString += '(' + def.long + ')';
    if (def.required) required.push(option);
  });

  var parser = new getopt.BasicParser(optionString, process.argv);
  var args = {}, option;

  while ((option = parser.getopt())) {
    var arg = args[option.option] || { count : 0};
    arg.count++;
    arg.value = option.optarg || true;

    args[option.option] = arg;
  }

  required.forEach(function(option) {
    if (!args[option] || !args[option].value) {
      console.log("Must specify a value for option %s (%s : %s)", option, options[option].long, options[option].desc);
      process.exit(1);
    }
  })

  // what's left in argv
  args.files = process.argv.slice(parser.optind());
  return args;
}