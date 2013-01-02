/*
 * plato
 * https://github.com/joverson/plato
 *
 * Copyright (c) 2012 Jarrod Overson
 * Licensed under the MIT license.
 */

'use strict';

// node api
var path = require('path');

// node api with sugar
var fs = require('fs-extra');

// vendor
var cr = require('complexity-report'),
    _ = require('lodash');

var overviewTemplate = __dirname + '/templates/overview.html',
    fileTemplate = __dirname + '/templates/file.html',
    assets = __dirname + '/assets/',
    fileDir = 'files';

exports.inspect = function(files, outputDir, options, done) {

  var flags = {
    logicalor : true,
    switchcase : true,
    forin : false,
    trycatch : false
  };

  var reports = [];

  fileDir = path.join(outputDir,fileDir);

  var commonBasePath = findCommonBase(files);

  fs.mkdirp(fileDir,function(){
    var runReports = function(files) {
      files.forEach(function(file) {
        if (options.r && fs.statSync(file).isDirectory()) {
          runReports(fs.readdirSync(file).map(function(innerFile){return path.join(file,innerFile)}))
        } else if (file.match(/\.js$/)) {
          console.log('Reading "%s"', file);

          var report, source = fs.readFileSync(file);
          try {
            report = cr.run(source.toString(), flags);
          } catch(e) {
            console.log('Error reading file : ', e.toString());
            return;
          }

          file = file.replace(commonBasePath, '');
          report.module = file;
          report.module_safe = file.replace(/[^a-zA-Z0-9]/g,'_');

          reports.push(report);
          var outdir = path.join(fileDir, report.module_safe);

          fs.mkdirp(outdir,function(){
            writeFileReport(outdir, report, source);
          });
        }

      });
    }
    runReports(files);
    var reportFile = path.join(outputDir, 'report');
    var overview = path.join(outputDir, 'index.html');

    fs.copy(assets, path.join(outputDir, 'assets'), function(){
      writeReport(reportFile, getOverviewReport(reports));
      writeOverview(overview, reports);
    });
  });
};

function findCommonBase(files) {
  var first = files[0];
  var prefixlen = first.length;
  files.forEach(function(file){
    for (var i = prefixlen; i > 0; i--) {
      if (file.substr(0,i) === first.substr(0,i)) {
        prefixlen = i;
        break;
      }
    }
  });
  return first.substr(0,prefixlen);
}

function writeReport(outfile, report) {
  var formatted = formatReportJSON(report);

  fs.writeFileSync(outfile + '.json', formatted, 'utf8');

  var module = '__report = ' + formatted;

  fs.writeFileSync(outfile + '.js', module, 'utf8');
}

function writeOverview(outfile, report) {
  var overviewSource = fs.readFileSync(overviewTemplate).toString();
  var parsed = _.template(overviewSource, {
    report : report
  });
  fs.writeFileSync(outfile, parsed, 'utf8');
}

function writeFileReport(outdir, report, source) {
  var overviewSource = fs.readFileSync(fileTemplate).toString();
  var parsed = _.template(overviewSource, {
    source : source,
    report : report
  });
  fs.writeFileSync(path.join(outdir,'index.html'), parsed, 'utf8');
  writeReport(path.join(outdir,'report'), report);
}

function getOverviewReport(reports) {
  var overview = [];
  // clone objects so we don't have to worry about side effects
  reports.forEach(function(report){
    var aggregate = _.cloneDeep(report.aggregate);
    overview.push({
      aggregate : aggregate,
      module : report.module,
      module_safe : report.module_safe,
      maintainability : _.cloneDeep(report.maintainability)
    });
  })
  return overview;
}

function formatReportJSON(report) {
  return JSON.stringify(report, function(k,v){
    if (k === 'identifiers') return ['__stripped__'];
    return v;
  },2);
}