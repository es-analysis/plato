

import assert from 'assert';

import extend from 'extend';
import NeDB from 'nedb';

import batchStore from '../../src/commands/batch/store';
import generate from '../../src/commands/report';

describe('generate', function(){
  let input, output, batchId;
  
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
      analyzers: require('../helpers').analyzers2
    }});
    
    // storing two batches
    batchStore.run([storeInput, {}], (err, _, result) => {
      if (err) return done(err);
      batchId = result.data.batch._id;
      done();
    });
  });

  it('should pass all reports for a batch to an output handler', function(done) {
    input.args.reporters = [
      {
        module: function (config, batch, reports, logger, done) {
          assert.equal(batch._id, batchId);
          assert.equal(reports.length, 2);
          assert.equal(typeof config, 'object');
          done(null, 'reporter done');
        },
        //TODO: TEST THROWN ERROR WHEN SPECIFYING A CUSTOM REPORTER WITHOUT AN ID
        id: 'plato-reporter-test',
        config: {}
      }
    ];
    
    generate.run([input, output], (err, input, output) => {
      assert.equal(output.reporters['plato-reporter-test'], 'reporter done');
      done();
    });
  });
});
