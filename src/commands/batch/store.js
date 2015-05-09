
import path from 'path';

import async from 'async';
import { Command, Output } from 'clapi';
import fileReader from 'clapi-filereader';

import batchFiles from './run';

function flatmap(arrays) {
  return [].concat.apply([], arrays);
}

const command = Command.init((input, output, done) => {
  var db = input.args.db;
  batchFiles.run([input, Output.init()], (err, input, innerOutput) => {
    var batchDocument = {
      type : 'batch',
      date : new Date(),
      files : innerOutput.data.length
    };
    db.insert(batchDocument, (err, batchDocument) => {
      var id = batchDocument._id;
      var inserts = flatmap(innerOutput.data).map(report => cb => {
        report.batchId = id;
        report.type = 'report';
        db.insert(report, cb)
      });
      async.parallel(inserts, (err, results) => {
        output.push(batchDocument);
        output.push(results);
        done(err);
      })
    });
  });
});

export default command;
