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
    Logger = require('./logger'),
    reporters = {
      complexity : require('./reporters/complexity'),
      jshint : require('./reporters/jshint')
    };

var overviewTemplate = __dirname + '/templates/overview.html',
    displayTemplate = __dirname + '/templates/display.html',
    fileTemplate = __dirname + '/templates/file.html',
    assets = __dirname + '/assets/',
    fileDir = 'files';

var log = new Logger(Logger.WARNING);

exports.inspect = function(files, outputDir, options, done) {

  var flags = {
    complexity : {
      logicalor : true,
      switchcase : true,
      forin : false,
      trycatch : false,
      newmi : true
    },
    jshint : {
      options : {},  // use jshint defaults
      globals : {}
    }
  };

  Object.keys(flags).forEach(function(flag){
    if (options[flag]) flags[flag] = _.clone(options[flag]);
  });

  if (options.q) log.level = Logger.ERROR;

  var reports = [];

  var fileOutputDir = path.join(outputDir,fileDir);

  var commonBasePath = util.findCommonBase(files);

  var runReports = function(files,done) {
    files.forEach(function(file) {
      if (options.exclude && options.exclude.test(file)) return;

      if (options.recurse && fs.statSync(file).isDirectory()) {
        files = fs.readdirSync(file).map(function(innerFile){
          return path.join(file,innerFile);
        });
        runReports(files);
      } else if (file.match(/\.js$/)) {
        log.info('Reading "%s"', file);

        var fileShort = file.replace(commonBasePath, '');
        var fileSafe = fileShort.replace(/[^a-zA-Z0-9]/g,'_');
        var source = fs.readFileSync(file).toString().trim();
        if (!source) {
          log.info('Not parsing empty file "%s"', file);
          return;
        }
        var report = {
          info : {
            file : file,
            fileShort : fileShort,
            fileSafe : fileSafe,
            link : fileDir + '/' + fileSafe + '/index.html'
          }
        };

        var error = false;
        _.each(reporters,function(reporter, name){
          try {
            report[name] = reporter.process(source, flags[name], report.info);
          } catch(e) {
            error = true;
            log.error('Error reading file : ', e.toString());
            log.error(e.stack);
            return;
          }
        });

        if (error) return;
        reports.push(report);
        if (outputDir) {
          var outdir = path.join(fileOutputDir, report.info.fileSafe);
          if (!fs.existsSync(outdir)) fs.mkdirSync(outdir);
          writeFileReport(outdir, report, source);
        }
      }
    });
    if (done) done();
  };

  if (!outputDir) {
    runReports(files,function(){
      done(reports);
    });
  } else {
    fs.mkdirp(fileOutputDir,function(){
      runReports(files,function(){
        var reportFile = path.join(outputDir, 'report'),
            overview = path.join(outputDir, 'index.html'),
            display = path.join(outputDir, 'display.html');

        fs.copy(assets, path.join(outputDir, 'assets'), function(){
          var overviewReport = exports.getOverviewReport(reports);
          writeReport(reportFile, overviewReport);
          writeOverview(overview, display, overviewReport, {
            title : options.title,
            flags : flags
          });
          done(reports);
        });
      });
    });
  }
};

// Filters out information unused in the overview for space/performance
exports.getOverviewReport = function (reports) {
  var culledReports = [];

  var summary = {
    total : {
      sloc : 0,
      maintainability : 0,
    },
    average : {
      sloc : 0,
      maintainability : 0,
    }
  };

  reports.forEach(function(report){
    // clone objects so we don't have to worry about side effects
    summary.total.sloc += report.complexity.aggregate.complexity.sloc.physical;
    summary.total.maintainability += report.complexity.maintainability;

    var aggregate = _.cloneDeep(report.complexity.aggregate);
    culledReports.push({
      info : report.info,
      jshint : {
        messages : report.jshint.messages.length
      },
      complexity : {
        aggregate : aggregate,
        module : report.complexity.module,
        module_safe : report.complexity.module_safe,
        maintainability : _.cloneDeep(report.complexity.maintainability)
      }
    });
  });

  summary.average.sloc = ~~(summary.total.sloc / reports.length);
  summary.average.maintainability = (summary.total.maintainability / reports.length).toFixed(2);

  return {
    summary : summary,
    reports : culledReports
  };
};

function writeFile(file, source) {
  log.info('Writing file "%s".', file);
  fs.writeFileSync(file, source, 'utf8');
}

function writeReport(outfile, report) {
  var formatted = util.formatJSON(report);

  writeFile(outfile + '.json', formatted);

  var module = '__report = ' + formatted;

  writeFile(outfile + '.js', module);
}

function writeOverview(indexFile, displayFile, report, options) {
  var overviewSource = fs.readFileSync(overviewTemplate).toString(),
      displaySource = fs.readFileSync(displayTemplate).toString(),
      parsed;

  parsed = _.template(overviewSource, {
    report : report,
    options : options
  });
  writeFile(indexFile, parsed);
  
  parsed = _.template(displaySource, {
    report : report,
    options : options
  });
  writeFile(displayFile, parsed);

  return;
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

