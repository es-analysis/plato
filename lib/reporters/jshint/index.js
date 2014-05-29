"use strict";

var JSHINT = require("jshint").JSHINT;

exports.process = function (source, options/*, reportInfo */) {
  var results = lint(source, options.options, options.globals);
  var report = generateReport(results);
  return report;
};

function generateReport(data) {

  var out = {
    messages : []
  };

  data.results.forEach(function (result) {
    out.messages.push({
      severity : 'error',
      line     : result.error.line,
      column   : result.error.character,
      message  : result.error.reason,
      source   : result.error.raw
    });
  });

  return out;
}

function lint(source, config, globals) {
  config = config || {};

  var results = [];
  var data = [];

  // Remove potential Unicode BOM.
  source = source.replace(/^\uFEFF/, "");

  if (!JSHINT(source, config, globals)) {
    JSHINT.errors.forEach(function (err) {
      if (err) results.push({ error: err });
    });
  }

  var lintData = JSHINT.data();
  if (lintData) data.push(lintData);

  return {
    results : results,
    data : data
  };
}
