"use strict";

var JSHINT = require("jshint").JSHINT;

exports.process = function (source, options/*, reportInfo */) {
  var results = lint(source, options);
  var report = generateReport(results);
  return report;
};

function generateReport(data) {

  var globals, unuseds;
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

  data.data.forEach(function (result) {
    globals = result.implieds;
    unuseds = result.unused;

    if (globals) {
      globals.forEach(function (global) {
        out.messages.push({
          severity : 'warning',
          line     : global.line,
          column   : 0,
          message  : "Implied global '" + global.name + "'",
          source   : 'jshint.implied-globals'
        });
      });
    }

    if (unuseds) {
      unuseds.forEach(function (unused) {
        out.messages.push({
          severity : 'warning',
          line     : unused.line,
          column   : 0,
          message  : "Unused variable: '" + unused.name + "'",
          source   : 'jshint.implied-unuseds'
        });
      });
    }
  });

  return out;
}

function lint(source, config) {
  var globals;
  config = config || {};

  var results = [];
  var data = [];

  // Remove potential Unicode BOM.
  source = source.replace(/^\uFEFF/, "");

  if (config.globals) {
    globals = config.globals;
    delete config.globals;
  }

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