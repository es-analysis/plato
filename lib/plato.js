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

// local lib
var util = require('./util');

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

  var commonBasePath = util.findCommonBase(files);

  var runReports = function(files,done) {
    var waitingOn = {};
    files.forEach(function(file) {
      if (options.r && fs.statSync(file).isDirectory()) {
        files = fs.readdirSync(file).map(function(innerFile){
          return path.join(file,innerFile);
        });
        runReports(files);
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
        waitingOn[outdir] = true;
        fs.mkdirp(outdir,function(){
          writeFileReport(outdir, report, source);
          delete (waitingOn[outdir]);
          if (Object.keys(waitingOn).length === 0) if (done) done();
        });
      }

    });
  };

  fs.mkdirp(fileDir,function(){
    runReports(files,function(){
      var reportFile = path.join(outputDir, 'report');
      var overview = path.join(outputDir, 'index.html');

      fs.copy(assets, path.join(outputDir, 'assets'), function(){
        writeReport(reportFile, getOverviewReport(reports));
        writeOverview(overview, reports);
        done();
      });
    });
  });
};

function writeFile(file, source) {
  console.log('Writing file "%s".', file);
  fs.writeFileSync(file, source, 'utf8');
}

function writeReport(outfile, report) {
  var formatted = util.formatJSON(report);

  writeFile(outfile + '.json', formatted);

  var module = '__report = ' + formatted;

  writeFile(outfile + '.js', module);
}

function writeOverview(outfile, report) {
  var overviewSource = fs.readFileSync(overviewTemplate).toString();
  var parsed = _.template(overviewSource, {
    report : report
  });
  writeFile(outfile, parsed);
}

function writeFileReport(outdir, report, source) {
  var overviewSource = fs.readFileSync(fileTemplate).toString();
  var parsed = _.template(overviewSource, {
    source : source,
    report : report
  });
  var indexPath = path.join(outdir,'index.html');
  writeFile(indexPath, parsed);
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
  });
  return overview;
}
