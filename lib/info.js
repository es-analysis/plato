'use strict';

// Project metadata.
var pkg = require('../package.json');

exports.name    = pkg.name;
exports.version = pkg.version

exports.fatal = function(msg, code) {
  exports.help();
  console.log('Fatal error: %s\n', msg);
  process.exit(code);
};

exports.version = function() {
  console.log(pkg.version);
};

exports.help = function() {
  console.log('%s: %s (v%s)', pkg.name, pkg.description, pkg.version);

};
