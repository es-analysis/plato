
import Command from 'clapi';

import { resolveAnalyzer } from '../../util';
import schema from '../../middleware/schema';
import readFile from '../../middleware/read-file';
import logger from '../../logger';
import types from '../../types';

const command = Command.create();

command.use(readFile('file', 'fileContents'));

command.use(schema({
  args: {
    analyzer: types.analyzer,
    file: types.file,
    fileContents: types.fileContents
  }
}));

command.before((input, output) => {
  if (!output.data.reports) output.data.reports = [];
});

command.add((input, output, done) => {
  var args = input.args;
  
  if (!args.analyzer) return done('An analyzer must be defined before running on a file.'); 
  
  try {
    let analyzer = resolveAnalyzer(args.analyzer);
    const childLogger = {};
    ['silly','verbose','info','warn','error']
      .forEach(level => childLogger[level] = logger[level].bind(logger, analyzer.id));
    
    logger.info('running analyzer %s', analyzer.id);
    let instance = analyzer.module(analyzer.config, childLogger);
    instance.run(args.file, args.fileContents, (err, result) => {
      if (err) return done(err);
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

export default command;