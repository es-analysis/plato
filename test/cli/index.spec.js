
import assert from 'assert';

import {findrcfile} from '../../src/cli';

describe('cli/index', function(){
  
  beforeEach(function(){
  });
  
  describe('findrcfile', () => {
    it('should modify input args based off of rcfile', function(done) {
      let input = {args:{files: 'SHOULD BE OVERRIDDEN'}, cwd: process.cwd()};
      findrcfile(input, {}, (err) => {
        assert.notEqual(input.args.files, 'SHOULD BE OVERRIDDEN');
        done(err);
      });
    });
  });
});
