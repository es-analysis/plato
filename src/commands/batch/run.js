
import path from 'path';

import async from 'async';
import { Command, Output } from 'clapi';
import fileReader from 'clapi-filereader';

import batchReports from '../file/analyze-multi';

batchReports.pre(fileReader);

const command = Command.init((input, output, done) => {
  var files = input.args.files;
  async.parallel(files.map((file) => {
      return (cb) => {
        batchReports.run([input.merged('args', {file}), Output.init()], (err, input, output) => {
          cb(err, output.pop());
        })
      };
    }),
    (err, results) => {
      output.push(...results);
      done(err);
    }
  );
});

export default command;
