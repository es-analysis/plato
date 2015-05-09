
import path from 'path';

import { Command } from 'clapi';

const command = Command.init((input, output, done) => {
  var args = input.args;
  var reporter = require(path.join(args.cwd, args.reporter)).create();
  reporter.setup(args.reporterConfig || {});
  reporter.run(args.fileContents, (err, result) => {
    output.push({
      file : args.file,
      reporter : reporter.id,
      result : result
    });
    done();
  });
});

export default command;