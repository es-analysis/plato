
import assert from 'assert';

import dotparts from '../src/dot-parts';

describe('dot-parts', function(){
  
  it('should return the root object and the property to set', function(){
    let def = 'foo.bar.baz';
    let obj = {
      foo: {
        bar: {
          baz : '2'
        }
      }
    };
    let [actualRoot, actualProp] = dotparts(obj, def);
    assert.equal(actualRoot, obj.foo.bar);
    assert.equal(actualRoot[actualProp], obj.foo.bar.baz);
  });
});
