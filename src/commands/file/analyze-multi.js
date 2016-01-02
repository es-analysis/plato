
import path from 'path';

import async from 'async';
import { Command } from 'clapi';

import fileReport from './analyze';

const command = Command.init((input, output, done) => {
  var reporters = input.args.reporters;
  async.parallel(reporters.map((reporter) => {
    return (cb) => {
      fileReport.run([input.cloneWith({args:{reporter}}), {}], (err, input, output) => {
        cb(err, output.data.reports.pop());
      })
    };
  }),
    (err, results) => {
      output.data.reports = results;
      done(err);
    }
  );
});

export default command;