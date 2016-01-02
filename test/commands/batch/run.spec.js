
import assert from 'assert';
import fs from 'fs';

import extend from 'extend';

import batchFiles from '../../../src/commands/batch/run';

describe('batch/run', function(){
  var input, output;
  beforeEach(function(){
    input = {};
    output = {};
  });

  it('should batch multiple file reads and report runs', function(done) {
    extend(true, input, {args:{
      cwd: process.cwd(),
      files: ['./fixtures/source/testa.js', './fixtures/source/testb.js'],
      reporters: [require('../../../fixtures/reporters/test-reporter1'), require('../../../fixtures/reporters/test-reporter2')]
    }});
    batchFiles.run([input, output], (err, input, output) => {
      let [ file1, file2 ] = output.data.reports;
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
