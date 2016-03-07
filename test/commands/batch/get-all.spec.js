

import assert from 'assert';

import extend from 'extend';
import NeDB from 'nedb';

import batchStore from '../../../src/commands/batch/store';
import generate from '../../../src/commands/batch/get-all';

describe('get-all', function(){
  let input, output, idFirst, idLast;

  beforeEach(function(done){
    const db = new NeDB();

    input = {
      args: {db},
      cwd: process.cwd(),
    };
    output = {};

    const storeInput = {};
    extend(true, storeInput, {args: {
      db,
      files: ['./fixtures/source/testa.js', './fixtures/source/testb.js'],
      analyzers: require('../../helpers').analyzers2
    }});

    // storing two batches
    batchStore.run([storeInput, {}], (err, input, first) => {
      if (err) return done(err);
      idFirst = first.data.batch._id;
      setTimeout(()=> {
        batchStore.run([storeInput, {}], (err, input, second) => {
          if (err) return done(err);
          idLast = second.data.batch._id;
          assert(idFirst);
          assert(idLast);
          assert.notEqual(idFirst, idLast);
          done();
        });
      },20);
    });
  });

  it('should retrieve all of the reports in the latest batch', function(done) {
    generate.run([input, output], (err, input, output) => {
      assert.equal(output.data.batch._id, idLast);
      assert.equal(output.data.reports.length, 2);
      done();
    });
  });
});

