
import { Command } from 'clapi';

import { resolveAnalyzer } from '../../util';

const command = Command.init((input, output, done) => {
  var args = input.args;
  
  if (!args.analyzer) return done('An analyzer must be defined before running on a file.'); 
  
  try {
    let analyzer = resolveAnalyzer(args.analyzer);
    let instance = analyzer.module(analyzer.config);
    instance.run(args.fileContents, (err, result) => {
      output.data.report = {
        analyzer : analyzer.id,
        result : result
      };
      done();
    });
  } catch (e) {
    return done(e);
  }
});

// translates file arg to fileContents;
command.pre(require('clapi-filereader'));

command.pre((input, output) => {
  if (!output.data.reports) output.data.reports = [];
});

export default command;