'use strict';

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
    test.expect(2);

    var files = [
      '/lib/foo/bar/a.js',
      '/lib/foo/bar/baz/b.js',
      '/lib/foo/bar/qux/c.js',
    ];

    test.equal(util.findCommonBase(files), '/lib/foo/bar/', 'should find common prefix');

    files = [
      'single/file/foo.js'
    ];
    test.equal(util.findCommonBase(files), '', 'should nto find common prefix for one file');

    test.done();
  },
};
