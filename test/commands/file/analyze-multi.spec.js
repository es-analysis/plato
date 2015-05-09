

import assert from 'assert';
import fs from 'fs';

import {Input, Output} from 'clapi';

import batchReports from '../../../src/commands/file/analyze-multi';

describe('file/analyze-multi', function(){
  var input, output;
  beforeEach(function(){
    input = Input.init();
    output = Output.init();
  });

  it('should batch multiple file reads and report runs', function(done) {
    input.merge('args', {
      cwd: process.cwd(),
      fileContents: fs.readFileSync('./fixtures/source/testa.js', {encoding : 'utf-8'}),
      reporters: ['./fixtures/reporters/test-reporter1', './fixtures/reporters/test-reporter2']
    });
    batchReports.run([input, output], (err, input, output) => {
      let reports = output.pop();
      let [ file1report1, file1report2 ] = reports;
      assert.equal(file1report1.result.sloc, 3);
      assert.equal(file1report2.result.bytes, 12);
      done();
    });
  });
});

