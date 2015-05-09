
import path from 'path';

import async from 'async';
import { Command, Output } from 'clapi';

import fileReport from './analyze';

const command = Command.init((input, output, done) => {
  var reporters = input.args.reporters;
  async.parallel(reporters.map((reporter) => {
    return (cb) => {
      fileReport.run([input.clone().merge('args', {reporter}), Output.init()], (err, input, output) => {
        cb(err, output.pop());
      })
    };
  }),
    (err, results) => {
      output.push(results);
      done(err);
    }
  );
});

export default command;