

import assert from 'assert';
import fs from 'fs';

import NeDB from 'nedb';
import {Input, Output} from 'clapi';

import findDb from '../../../src/commands/db/find';

describe('db/find', function(){
  var input, output;
  beforeEach(function(){
    input = {};
    output = {};
  });

  it('should find json objects in the database', function(done) {
    var db = new NeDB();
    input.args = {db};
    var document = { file : 'test.js', src : 'var a = 2;' };
    db.insert(document, (err, newDoc) => {
      input.args.query = { _id : newDoc._id };
      findDb.run([input, output], (err, input, output) => {
        assert.equal(output.data.documents.length, 1);
        assert.deepEqual(output.data.documents[0], newDoc);
        done();
      });
    });
  });
});
