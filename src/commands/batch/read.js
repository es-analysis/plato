
import path from 'path';

import async from 'async';
import { Command, Output } from 'clapi';
import fileReader from 'clapi-filereader';

import batchFiles from './run';
import find from '../db/find';

const command = Command.init((input, output, done) => {
  let id = input.args.id;
  
  let query = { type: 'report', batchId: id};
  find.run([input.cloneWith({args: {query}})], (err, _, result) => {
    output.data.reports = result.data.documents;
    done(err);
  });
  
});

export default command;
