'use strict';

var escomplex = require('escomplex-js'),
    _         = require('lodash');

exports.process = function(source, options, reportInfo) {
  var report = escomplex.analyse(source, options);
  // Make the short filename easily accessible
  report.module = reportInfo.fileShort;

  // Munge the new `escomplex-js` format to match the older format of
  // `complexity-report`
  report.aggregate.complexity = {
    cyclomatic : report.aggregate.cyclomatic,
    sloc       : report.aggregate.sloc,
    halstead   : report.aggregate.halstead
  };

  if (_.isArray(report.functions)) {
    _.each(report.functions, function (func) {
        func.complexity = {
            cyclomatic : func.cyclomatic,
            sloc       : func.sloc,
            halstead   : func.halstead
        };
    });
  }

  return report;
};
