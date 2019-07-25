"use strict";

// @see http://www.phpied.com/using-eslint-in-a-script/
// @see https://eslint.org/docs/developer-guide/nodejs-api#cliengine
var CLIEngine = require("eslint").CLIEngine;

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

  var cli = new CLIEngine(config);
  var messages = cli.executeOnText(source).results[0].messages;
  results = results.concat(messages);

  return {
    results : results,
    data : data
  };
}

