

import assert from 'assert';
import fs from 'fs';

import NeDB from 'nedb';
import {Input, Output} from 'clapi';

import batchStore from '../../../src/commands/batch/store';
import batchRead from '../../../src/commands/batch/read';

describe('batch/read', function(){
  var input, output;
  beforeEach(function(){
    input = Input.init();
    output = Output.init();
  });

  it('should save an entire run to the db', function(done) {
    var db = new NeDB();
    input.merge('args', {
      db,
      cwd: process.cwd(),
      files: ['./fixtures/source/testa.js', './fixtures/source/testb.js'],
      reporters: ['./fixtures/reporters/test-reporter1', './fixtures/reporters/test-reporter2']
    });
    batchStore.run([input, output], (err, input, output) => {
      var batchDoc = output.shift();
      input.args.id = batchDoc._id;
      batchRead.run([input, Output.init()], (err, input, output) => {
        if (err) done (err);
        assert.equal(output.pop().length, 4);
        done();
      });
    });
  });
});

