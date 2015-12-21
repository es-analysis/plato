
import assert from 'assert';
import fs from 'fs';

import NeDB from 'nedb';
import {Input, Output} from 'clapi';

import cli from '../../src/cli';

describe('cli/index', function(){
  var input, output;
  beforeEach(function(){
    input = Input.init();
    output = Output.init();
  });
  
  describe('default', () => {
    it('should save a run to a db instance', function(done) {
      var db = new NeDB();
      input.merge('args', {
        db,
        cwd: process.cwd(),
        files: ['./fixtures/source/testa.js', './fixtures/source/testb.js'],
        reporters: ['./fixtures/reporters/test-reporter1', './fixtures/reporters/test-reporter2']
      });
      cli.run([input, output], (err, input, output) => {
        db.find({ type: 'batch' }).sort({ date: 1 }).limit(1).exec(function (err, docs) {
          if (err) return done(err);
          assert.equal(docs.length, 1);
          var batch = docs[0];
          db.find({ type : 'report', batchId : batch._id }, (err, docs) => {
            assert.equal(docs.length, 4);
            done(err);
          })
        });
      });
    });
  });
});
