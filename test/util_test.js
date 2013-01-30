'use strict';

var fs = require('fs');

var util = require('../lib/util');

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

exports['awesome'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'common prefix': function(test) {
    test.expect(3);

    var files = [
      '/lib/foo/bar/a.js',
      '/lib/foo/bar/baz/b.js',
      '/lib/foo/bar/qux/c.js',
    ];

    test.equal(util.findCommonBase(files), '/lib/foo/bar/', 'should find common prefix');

    files = [
      'single/file/foo.js'
    ];
    test.equal(util.findCommonBase(files), '', 'should not find common prefix for one file');

    files = [
      'single/file/foo.js',
      'no/common/prefix.js'
    ];
    test.equal(util.findCommonBase(files), '', 'should not find a prefix for files with no prefix');

    test.done();
  },
  'strip comments': function(test) {
    test.expect(1);

    var source = fs.readFileSync('test/fixtures/.jshintrc').toString();
    test.doesNotThrow(function(){JSON.parse(util.stripComments(source));}, "Comments should be stripped and JSON parsable");

    test.done();
  },
};
