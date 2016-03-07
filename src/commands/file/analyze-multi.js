
import async from 'async';
import Command from 'clapi';

import analyze from './analyze';
import schema from '../../middleware/schema';
import readFile from '../../middleware/read-file';
import types from '../../types';

const command = Command.create();

command.description = 'Run multiple analyzers on a single file';

command.use(readFile('file', 'fileContents'));

command.use(schema({
  args: {
    analyzers: types.analyzers,
    file: String,
    '?fileContents': types.fileContents
  }
}));

command.add((input, output, done) => {  
  var analyzers = input.args.analyzers;
  async.parallel(analyzers.map((analyzer) => {
    return (cb) => {
      analyze.run([input.cloneWith({args:{analyzer}}), {}], (err, input, output) => {
        cb(err, output.data.report);
      });
    };
  }),
    (err, results) => {
      if (err) return done(err);
      output.data.file = input.args.file || '<none>';
      output.data.reports = results;
      done(err);
    }
  );
});

export default command;