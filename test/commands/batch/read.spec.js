

import assert from 'assert';
import fs from 'fs';

import NeDB from 'nedb';
import extend from 'extend';

import batchStore from '../../../src/commands/batch/store';
import batchRead from '../../../src/commands/batch/read';

describe('batch/read', function(){
  var input, output;
  beforeEach(function(){
    input = {};
    output = {};
  });

  it('should save an entire run to the db', function(done) {
    var db = new NeDB();
    extend(input, {args:{
      db,
      cwd: process.cwd(),
      files: ['./fixtures/source/testa.js', './fixtures/source/testb.js'],
      reporters: [require('../../../fixtures/reporters/test-reporter1'), require('../../../fixtures/reporters/test-reporter2')]
    }});
    batchStore.run([input, output], (err, input, output) => {
      if (err) return done(err);
      var batchDoc = output.data.batch;
      input.args.id = batchDoc._id;
      batchRead.run([input, {}], (err, input, output) => {
        if (err) return done(err);
        assert.equal(output.data.reports.length, 2);
        done();
      });
    });
  });
});

