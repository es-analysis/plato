
import { Command } from 'clapi';

const command = Command.init((input, output, done) => {
  var args = input.args;
  
  if (!args.reporter) return done('A reporter must be defined to run analysis.'); 
  
  try {
    let reporter = typeof args.reporter === 'string' ? require(args.reporter) : args.reporter;
    let instance = reporter.create();
    instance.setup(args.reporterConfig || {});
    instance.run(args.fileContents, (err, result) => {
      output.data.reports.push({
        file : args.file,
        reporter : instance.id,
        result : result
      });
      done();
    });
  } catch (e) {
    return done(e);
  }
});

command.pre(require('clapi-filereader'));

command.pre((input, output) => {
  if (!output.data.reports) output.data.reports = [];
});

export default command;