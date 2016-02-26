
import async from 'async';
import { Command } from 'clapi';

import fileReport from './analyze';

const command = Command.init((input, output, done) => {
  var analyzers = input.args.analyzers;
  async.parallel(analyzers.map((analyzer) => {
    return (cb) => {
      fileReport.run([input.cloneWith({args:{analyzer}}), {}], (err, input, output) => {
        cb(err, output.data.report);
      });
    };
  }),
    (err, results) => {
      if (err) return done(err);
      output.data.file = input.args.file;
      output.data.reports = results;
      done(err);
    }
  );
});

export default command;