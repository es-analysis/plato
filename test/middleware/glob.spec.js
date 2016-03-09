
import assert from 'assert';
import path from 'path';
import Command from 'clapi';

import glob from '../../src/middleware/glob';

describe('glob', function(){
  let command;

  beforeEach(function(done) {
    command = Command.create();
    done();
  });
  
  it('should assert valid input', function(done){
    command.use(glob('args.files'));

    command.run([{args: {files: [path.join('fixtures', 'source', '*.js')]}}, {}], (err, input, output) => {
      if (err) return done(err);
      assert(!err, 'should not have given an error');
      assert.deepEqual(input.args.files, ['fixtures/source/testa.js', 'fixtures/source/testb.js']);
      done();
    });

  });
});
