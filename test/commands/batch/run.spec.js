
import assert from 'assert';
import fs from 'fs';

import {Input, Output} from 'clapi';

import batchFiles from '../../../src/commands/batch/run';

describe('batch/run', function(){
  var input, output;
  beforeEach(function(){
    input = Input.init();
    output = Output.init();
  });

  it('should batch multiple file reads and report runs', function(done) {
    input.merge('args', {
      cwd: process.cwd(),
      files: ['./fixtures/source/testa.js', './fixtures/source/testb.js'],
      reporters: ['./fixtures/reporters/test-reporter1', './fixtures/reporters/test-reporter2']
    });
    batchFiles.run([input, output], (err, input, output) => {
      let [ file1, file2 ] = output.data;
      let [ file1report1, file1report2 ] = file1;
      assert.equal(file1report1.result.sloc, 3);
      assert.equal(file1report2.result.bytes, 12);
      let [ file2report1, file2report2 ] = file2;
      assert.equal(file2report1.result.sloc, 5);
      assert.equal(file2report2.result.bytes, 37);
      done();
    });
  });
});
