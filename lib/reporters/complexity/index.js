'use strict';

var escomplex = require('escomplex-js');

exports.process = function(source, options, reportInfo) {
  var report = escomplex.analyse(source, options);
  // Make the short filename easily accessible
  report.module = reportInfo.fileShort;
  return report;
};
