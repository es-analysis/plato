"use strict";

var JSHINT = require("jshint").JSHINT;
var jsHintCli = require("jshint/src/cli.js");

exports.process = function (source, options/*, reportInfo */) {
  if (options == null || Object.getOwnPropertyNames(options).length === 0) {
    options = { options : {}, globals : {}};
    var jsHintOptions = jsHintCli.getConfig(source);
    delete jsHintOptions.dirname;
    if (jsHintOptions != null && Object.getOwnPropertyNames(jsHintOptions).length > 0) {
      if (jsHintOptions.globals) {
        options.globals = jsHintOptions.globals;
        delete jsHintOptions.globals;
      }
      options.options = jsHintOptions;
    }
  }

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
