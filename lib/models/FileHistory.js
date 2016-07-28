
'use strict';

var History = require('./History');

module.exports = FileHistory;

function FileHistory(data) {
  History.call(this, data);
}

FileHistory.prototype = Object.create(History.prototype);


FileHistory.prototype.addReport = function(report, date) {
  date = date || report.date || new Date().toUTCString();
  this.push({
    date : date,
    sloc : report.complexity.aggregate.sloc.physical,
    lloc : report.complexity.aggregate.sloc.logical,
    functions : report.complexity.methods.length,
    deliveredBugs : report.complexity.aggregate.halstead.bugs,
    difficulty: report.complexity.aggregate.halstead.difficulty,
    maintainability: report.complexity.maintainability,
    lintErrors : (report.jshint && report.jshint.messages.length) || []
  });
  return this;
};

