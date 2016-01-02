
import assert from 'assert';
import fs from 'fs';
import extend from 'extend';
import NeDB from 'nedb';

import cli, {findrcfile} from '../../src/cli';

describe('cli/index', function(){
  var input, output;
  beforeEach(function(){
    input = {};
    output = {};
  });
  
  describe('findrcfile', () => {
    it('should modify input args based off of rcfile', function(done) {
      let input = {args:{files: "SHOULD BE OVERRIDDEN"}, cwd: process.cwd()};
      console.log(input);
      findrcfile(input, {}, (err) => {
        assert.notEqual(input.args.files, "SHOULD BE OVERRIDDEN");
        done(err);
      });
    });
  });
});
