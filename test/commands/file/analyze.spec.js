

import assert from 'assert';
import fs from 'fs';

import clapi from 'clapi';

import fileReport from '../../../src/commands/file/analyze';

describe('file/analyze', function(){
  var input, output;
  beforeEach(function(){
    input = {};
    output = {};
  });

  it('should read a file and output content', function(done) {
    input.args = {
      fileContents: fs.readFileSync('./fixtures/source/testa.js', {encoding:'utf-8'}),
      cwd: process.cwd(),
      reporter: require('../../../fixtures/reporters/test-reporter1')
    };
    fileReport.run([input, output], (err, input, output) => {
      var data = output.data.reports.pop();
      assert.equal(data.result.sloc, 3);
      done();
    });
  });
});

