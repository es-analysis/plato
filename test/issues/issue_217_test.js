'use strict';

var fs = require('fs-extra'),
    linter = require('../../lib/reporters/jshint');

exports['issue_217'] = {
  setUp: function(done) {
    done();
  },

  'expect async/await supported in jshint': function(test) {

    var file = "test/fixtures/issue_217.js",
        source = fs.readFileSync(file).toString().trim(),
        options = require('../fixtures/.jshintrc.json'),
        config = {
          options: Object.assign(options, {
            "esversion": 8,
            "unused": false
          })
        },
        report = linter.process(source, config, {});

    test.equal(report.messages.length, 0, "Report returned with messages");
    test.done();
  }
};
