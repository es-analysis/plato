

import assert from 'assert';
import fs from 'fs';

import NeDB from 'nedb';
import {Input, Output} from 'clapi';

import generateReport from '../../../src/commands/file/generate-report';

describe('file/generate-report', function(){
  var input, output;
  beforeEach(function(){
    input = Input.init();
    output = Output.init();
  });

  it('should generate an individual file report', function(done) {
    input.merge('args', {
      batchId: '',
      file: './fixtures/source/testa.js',
      fileContents: fs.readFileSync('./fixtures/source/testa.js', {encoding : 'utf-8'}),
      template: fs.readFileSync('./fixtures/templates/file-report.hb', {encoding : 'utf-8'}),
      widgets: [
        './fixtures/widgets/widgetA',
        './fixtures/widgets/widgetB'
      ], 
      data: {
        reports: {
          reportA : {
            sloc : 2
          },
          reportB : {
            bytes : 10
          }
        }
      }
    });
    generateReport.run([input, output], (err, input, output) => {
      var html = output.shift();
      console.log(html);
      assert(html.match(/<h2>Sloc : 2<\/h2>/));
      done();
    });
  });
});

