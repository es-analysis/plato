

import assert from 'assert';
import fs from 'fs';

import extend from 'extend';
import NeDB from 'nedb';

import batchStore from '../../../src/commands/batch/store';

describe('batch/store', function(){
  var input, output;
  beforeEach(function(){
    input = {};
    output = {};
  });

  it('should save an entire run to the db', function(done) {
    var db = new NeDB();
    extend(true, input, {args: {
      db,
      cwd: process.cwd(),
      files: ['./fixtures/source/testa.js', './fixtures/source/testb.js'],
      reporters: [require('../../../fixtures/reporters/test-reporter1'), require('../../../fixtures/reporters/test-reporter2')]
    }});
    batchStore.run([input, output], (err, input, output) => {
      db.find({ type: 'batch' }).sort({ date: 1 }).limit(1).exec(function (err, docs) {
        if (err) return done(err);
        assert.equal(docs.length, 1);
        var batch = docs[0];
        db.find({ type : 'report', batchId : batch._id }, (err, docs) => {
          assert.equal(docs.length, 2);
          done(err);
        })
      });
    });
  });
});

