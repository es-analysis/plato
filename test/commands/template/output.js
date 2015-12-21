

import assert from 'assert';
import fs from 'fs';

import NeDB from 'nedb';
import {Input, Output} from 'clapi';

import outputTemplate from '../../../src/commands/template/output';

describe('file/generate-report', function(){
  var input, output;
  beforeEach(function(){
    input = Input.init();
    output = Output.init();
  });

  it('should generate a template', function(done) {
    input.merge('args', {
      template: fs.readFileSync('./fixtures/templates/file-report.hb', {encoding : 'utf-8'}),
      widgets: [
        './fixtures/widgets/widgetA'
      ],
      file: 'files/output_example.js',
      scripts: ['./fixtures/source/testa.js'],
      data: {
        reports: {
          reportA : {
            sloc : 2
          }
        }
      }
    });
    outputTemplate.run([input, output], (err, input, output) => {
      var file;
      
      console.log(output.data);
      // comes from input
      file = output.shift();
      assert.deepEqual(file.path, ['testa.js']);
      assert.equal(file.contents, '\nvar a = 2;\n');
      
      // comes from widget
      file = output.shift();
      assert.deepEqual(file.path, ['depA.js']);
      assert.equal(file.contents, 'var depA = true;');
      
      // should be final template
      file = output.shift();
      console.log(file.contents);
      assert.deepEqual(file.path, ['files', 'output_example.js']);
      assert(file.contents.match(/<h2>Sloc : 2<\/h2>/));
      done();
    });
  });
});

