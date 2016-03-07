

import assert from 'assert';

import extend from 'extend';

import analyzeMulti from '../../../src/commands/file/analyze-multi';

describe('file/analyze-multi', function(){
  var input, output;
  beforeEach(function(){
    input = {};
    output = {};
  });

  it('should batch multiple file reads and report runs', function(done) {
    extend(true, input, {args: {
      cwd: process.cwd(),
      file: './fixtures/source/testa.js',
      analyzers: require('../../helpers').analyzers2
    }});
    analyzeMulti.run([input, output], (err, input, output) => {
      let reports = output.data.reports;
      let [ file1report1, file1report2 ] = reports;
      assert.equal(file1report1.result.sloc, 3);
      assert.equal(file1report2.result.bytes, 12);
      done();
    });
  });
});

