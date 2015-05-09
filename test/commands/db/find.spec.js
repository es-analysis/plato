

import assert from 'assert';
import fs from 'fs';

import NeDB from 'nedb';
import {Input, Output} from 'clapi';

import findDb from '../../../src/commands/db/find';

describe('db/find', function(){
  var input, output;
  beforeEach(function(){
    input = Input.init();
    output = Output.init();
  });

  it('should insert json objects into database', function(done) {
    var db = new NeDB();
    input.args = {db};
    var document = { file : 'test.js', src : 'var a = 2;' };
    db.insert(document, (err, newDoc) => {
      input.args.query = { _id : newDoc._id };
      findDb.run([input, output], (err, input, output) => {
        let results = output.pop();
        assert.equal(results.length, 1);
        assert.deepEqual(results[0], newDoc);
        done();
      });
    });
  });
});
