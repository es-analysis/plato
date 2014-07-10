'use strict';

var plato = require('../lib/plato');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['plato'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'test empty file' : function(test) {
    test.expect(1);

    var files = [
      'test/fixtures/a.js',
      'test/fixtures/b.js',
      'test/fixtures/empty.js'
    ];

    plato.inspect(files, null, {}, function(reports){
      test.equal(reports.length, 2, 'Should not attempt to report on empty files');
      test.done();
    });
  },
  'test report structure' : function(test) {
    test.expect(4);

    var files = [
      'test/fixtures/a.js',
      'test/fixtures/b.js'
    ];

    plato.inspect(files, null, {}, function(reports){
      reports.forEach(function(report){
        test.ok(report.complexity, 'Should contain a complexity report');
        test.ok(report.jshint, 'Should contain a jshint report');
      });
      test.done();
    });
  },
  'test overview report structure' : function(test) {

    var files = [
      'test/fixtures/a.js',
      'test/fixtures/b.js'
    ];

    test.expect((files.length * 2) + 1);

    plato.inspect(files, null, {}, function(reports){
      var overview = plato.getOverviewReport(reports);
      test.ok(overview.summary.total.sloc > 0, 'Should contain total sloc');
      test.ok(overview.summary.total.maintainability > 0, 'Should contain total maintainability');
      test.ok(overview.summary.average.sloc > 0, 'Should contain average sloc');
      test.ok(overview.summary.average.maintainability > 0, 'Should contain average maintainability');
      test.equal(overview.reports.length, files.length,'Should contain right number of reports');
      test.done();
    });
  },
  'test file with shebang' : function(test) {
    test.expect(1);

    var files = [
      'test/fixtures/a.js',
      'test/fixtures/b.js',
      'test/fixtures/shebang.js'
    ];

    plato.inspect(files, null, {}, function(reports){
      test.equal(reports.length, 3, 'Should report on files starting with a shebang');
      test.done();
    });
  },
  'test noempty line option' : function(test) {
    test.expect(1);

    var files = [
      'test/fixtures/multipleEmptyLines.js'
    ];

    plato.inspect(files, null, {noempty : true}, function(reports){
      var overview = plato.getOverviewReport(reports);
      test.ok(overview.summary.total.sloc === 10, 'Should contain total sloc without empty lines counted');
      test.done();
     });
  }
};
