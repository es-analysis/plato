"use strict";

var cr = require('complexity-report');

exports.process = function(source, options, reportInfo) {
  var report = cr.run(source, options);
  report.module = reportInfo.fileShort;
  return report;
};