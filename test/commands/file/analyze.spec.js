

import assert from 'assert';

import fileReport from '../../../src/commands/file/analyze';

describe('file/analyze', function(){
  var input, output;
  beforeEach(function(){
    input = {};
    output = {};
  });

  it('should read a file and output content', function(done) {
    input.args = {
      file: './fixtures/source/testa.js',
      cwd: process.cwd(),
      analyzer: require('../../helpers').analyzers1
    };
    fileReport.run([input, output], (err, input, output) => {
      var data = output.data.report;
      assert.equal(data.result.sloc, 3);
      done();
    });
  });
});

