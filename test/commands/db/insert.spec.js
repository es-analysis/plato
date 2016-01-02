

import assert from 'assert';
import fs from 'fs';

import NeDB from 'nedb';
import {Input, Output} from 'clapi';

import insertDb from '../../../src/commands/db/insert';

describe('db/insert', function(){
  var input, output;
  beforeEach(function(){
    input = {};
    output = {};
  });

  it('should insert json objects into database', function(done) {
    var db = new NeDB();
    input.args = {
      db,
      document : { file : 'test.js', src : 'var a = 2;' }
    };
    insertDb.run([input, output], (err, input, output) => {
      let result = output.data.documents[0];
      assert.equal(result.file, 'test.js');
      db.find({ file : 'test.js' }, function (err, docs) {
        assert(!err);
        assert.equal(docs[0].src, 'var a = 2;');
        done();
      });
    });
  });
});
