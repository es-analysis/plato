'use strict';
/**
 * #182 the default behavior of JSHint is to look for ".jshintsrc" up the processed file's hierarchy.
 * The difference between `.jshintrc` and `test/fixtures/.jshintrc` is maxparams.
 * if jshint finds `test/fixtures/.jshintrc` then a maxparams error should occur.
 */
var fs = require('fs-extra'),
  linter = require('../../lib/reporters/jshint');

exports['issue_182'] = {
  setUp: function(done) {
    done();
  },

  'look for ".jshintsrc" up the processed file hierarchy': function(test) {

    var file = "test/fixtures/issue_182.js",
        source = fs.readFileSync(file).toString().trim(),
        options = {},
        reportInfo = {
          file : 'test/fixtures/issue_182.js',
          fileShort : '',
          fileSafe : '',
          link : ''
        },
        report;

    report = linter.process(source, options, reportInfo);
    test.equal(report.messages.length, 1, "a maxparams error should occur");

    report = linter.process(source, options, {});
    test.equal(report.messages.length, 0, "no error");

    test.done();
  }
};
