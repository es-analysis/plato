
import path from 'path';

import async from 'async';
import { Command, Output } from 'clapi';
import fileReader from 'clapi-filereader';

import batchFiles from './run';

function flatmap(arrays) {
  return [].concat.apply([], arrays);
}

const command = Command.init((input, output, done) => {
  let [id, db] = [input.args.id, input.args.db];
  
  db.find({ type: 'report', batchId: id}, (err, docs) => {
    if (err) done(err);
    output.push(docs);
    done();
  });
  
});

export default command;
