
import assert from 'assert';
import path from 'path';

import clapi from 'clapi';

import template from '../../src/middleware/template';

describe('middleware', function(){
  describe('template', function(){
    let command;
    beforeEach(function(){
      command = clapi.create();
    });
    
    it('should output a template at the end of a run', function(done){
      var mockOutput;
      command.use(template({
        basedir: path.join(__dirname, '..', '..', 'fixtures', 'templates'),
        writer: function(output) { mockOutput = output; },
        template: function(i, o) { return i.template + '.hb'; }
      }));
      command.add((i,o,d)=>{
        i.template = 'test';
        o.data.a = 1;
        o.data.b = '001';
        d();
      });
      command.run((err, i, o) => {
        assert.equal(mockOutput, '1001');
        done(err);
      });
    });
  });
});
