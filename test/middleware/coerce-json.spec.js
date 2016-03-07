
import assert from 'assert';

import {getParentObject} from '../../src/middleware/coerce-json';

describe('coerce-json', function(){
  
  describe('getParentObject', function(){
    it('should return the root object and the property to set', function(){
      let def = 'foo.bar.baz';
      let obj = {
        foo: {
          bar: {
            baz : '2'
          }
        }
      };
      let [actualRoot, actualProp] = getParentObject(obj, def);
      assert.equal(actualRoot, obj.foo.bar);
      assert.equal(actualRoot[actualProp], obj.foo.bar.baz);
    });
  });
});
