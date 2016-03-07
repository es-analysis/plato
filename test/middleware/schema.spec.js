
import assert from 'assert';
import Command from 'clapi';

import schema from '../../src/middleware/schema';

describe('schema', function(){
  let command;

  beforeEach(function(done) {
    command = Command.create();
    done();
  });
  
  it('should assert valid input', function(done){
    command.use(schema({args: {
      argument1: String,
      argument2: String
    }}));

    command.add(function(input, output) {
      assert.equal(input.args.argument1, 'custom');
    });

    command.run([{args: {argument1 : 'custom'}}, {}], (err, input, output) => {
      assert(err, 'should have given an error');
      command.run([{args: {argument1 : 'custom', argument2 : 'exists'}}, {}], (err, input, output) => {
        assert(!err, 'should not have given an error');
        done();
      });
    });

  });
});
