"use strict";

var ESLINT = require("eslint");

exports.process = function (source, options/*, reportInfo */) {
  var results = lint(source, options);
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
      line     : result.line,
      column   : result.column,
      message  : result.message,
      source   : result.source
    });
  });

  return out;
}

function lint(source, config) {
  config = config || {};

  var results = [];
  var data = [];

  // Remove potential Unicode BOM.
  source = source.replace(/^\uFEFF/, "");

  var cli = new ESLINT.CLIEngine({
      configFile: config
  });
  var messages = cli.executeOnText(source);

  if(messages && messages.results && messages.results.length && messages.results[0].messages)
    results = results.concat(messages.results[0].messages);

  return {
    results : results,
    data : data
  };
}

