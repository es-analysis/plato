
import assert from 'assert';

import fn from '../src/bin-util';

describe('normalizeCliArguments', function(){

  it('should turn --file into files:[]', function(){
    assert.deepEqual(fn({file:'foo'}).files, ['foo']);
  });

  it('should turn --file into files:[]', function(){
    assert.deepEqual(fn({file:['foo','bar']}).files, ['foo','bar']);
  });

  it('should turn --files "" into files:[""]', function(){
    assert.deepEqual(fn({files:'foo'}).files, ['foo']);
  });
  
});
