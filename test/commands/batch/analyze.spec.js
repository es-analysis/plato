
import assert from 'assert';

import batchAnalyze from '../../../src/commands/batch/analyze';

describe('batch/analyze', function(){
  beforeEach(function(){
  });

  it('should batch multiple file reads and report runs', function(done) {
    const input = { 
      args:{
        cwd: process.cwd(),
        files: ['./fixtures/source/testa.js', './fixtures/source/testb.js'],
        analyzers: require('../../helpers').analyzers2
      }
    };
    batchAnalyze.run([input], (err, input, output) => {
      if (err) return done(err);
      const batch = output.data.batch;
      assert.equal(batch.files, 2);
      assert(batch.reports['test-analyzer1']);
      assert(batch.reports['test-analyzer2']);
      const [ file1, file2 ] = output.data.reports;
      const [ file1report1, file1report2 ] = file1.data;
      assert.equal(file1report1.result.sloc, 3);
      assert.equal(file1report2.result.bytes, 12);
      const [ file2report1, file2report2 ] = file2.data;
      assert.equal(file2report1.result.sloc, 5);
      assert.equal(file2report2.result.bytes, 37);
      done();
    });
  });
});
