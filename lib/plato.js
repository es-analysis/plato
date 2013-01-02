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
var _ = require('lodash');

// local lib
var util = require('./util'),
    reporters = {
      complexity : require('./reporters/complexity'),
      jshint : require('./reporters/jshint')
    };

var overviewTemplate = __dirname + '/templates/overview.html',
    fileTemplate = __dirname + '/templates/file.html',
    assets = __dirname + '/assets/',
    fileDir = 'files';

exports.inspect = function(files, outputDir, options, done) {

  var flags = {
    complexity : {
      logicalor : true,
      switchcase : true,
      forin : false,
      trycatch : false
    },
    jshint : {
      curly : true,
      eqeqeq : true,
      immed : true,
      latedef : false,
      newcap : true,
      noarg : true,
      sub : true,
      undef : true,
      unused : true,
      boss : true,
      eqnull : true,
      node : true,
      es5 : true
    }
  };

  Object.keys(flags).forEach(function(flag){
    if (options[flag]) flags[flag] = _.clone(options[flag]);
  });

  var reports = [];

  var fileOutputDir = path.join(outputDir,fileDir);

  var commonBasePath = util.findCommonBase(files);

  var runReports = function(files,done) {
    files.forEach(function(file) {
      if (options.recurse && fs.statSync(file).isDirectory()) {
        files = fs.readdirSync(file).map(function(innerFile){
          return path.join(file,innerFile);
        });
        runReports(files);
      } else if (file.match(/\.js$/)) {
        console.log('Reading "%s"', file);

        var fileSafe = file.replace(/[^a-zA-Z0-9]/g,'_');
        var source = fs.readFileSync(file).toString()
        var report = {
          info : {
            file : file,
            fileShort : file.replace(commonBasePath, ''),
            fileSafe : fileSafe,
            link : fileDir + '/' + fileSafe
          }
        };

        _.each(reporters,function(reporter, name){
          try {
            report[name] = reporter.process(source, flags[name], report.info)
          } catch(e) {
            console.log('Error reading file : ', e.toString());
            console.log(e.stack)
            return;
          }
        });

        reports.push(report);
        var outdir = path.join(fileOutputDir, report.info.fileSafe);
        if (!fs.existsSync(outdir)) fs.mkdirSync(outdir);
        writeFileReport(outdir, report, source);
      }
    });
    if (done) done()
  };

  fs.mkdirp(fileOutputDir,function(){
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

// Filters out information unused in the overview for space/performance
function getOverviewReport(reports) {
  var overview = [];

  reports.forEach(function(report){
    // only need complexity in the overview, for now.
    var complexity = report.complexity;
    // clone objects so we don't have to worry about side effects
    var aggregate = _.cloneDeep(complexity.aggregate);
    overview.push({
      info : report.info,
      complexity : {
        aggregate : aggregate,
        module : complexity.module,
        module_safe : complexity.module_safe,
        maintainability : _.cloneDeep(complexity.maintainability)
      }
    });
  });
  return overview;
}
