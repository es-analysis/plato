
import async from 'async';
import { Command } from 'clapi';
import extend from 'extend';

import batchGet from './batch/get-all';
import logger from '../logger';
import {resolveReporter} from '../util';

const command = Command.init((input, output, done) => {
  
  batchGet.run([input], (err, _, batchResult) => {
    if (err) return done(err);
    
    const reporters = input.args.reporters;
    
    logger.silly('reporters', reporters);
    
    const reporterFns = reporters.map(reporter => cb => {
      reporter = resolveReporter(reporter);

      const childLogger = {};
      ['silly','verbose','info','warn','error']
        .forEach(level => childLogger[level] = logger[level].bind(logger, reporter.id));
      
      logger.info('reporter',  'running reporter %s', reporter.id);
      reporter.config.input = input;
      reporter.module(
        reporter.config, 
        batchResult.data.batch, 
        batchResult.data.reports, 
        childLogger, 
        (err, result) => cb(err, reporter.id, result)
      );
    });
    
    async.series(reporterFns, (err, results) => {
      if (err) return done(err);
      output.reporters = {};
      results.forEach(result => {
        output.reporters[result[0]] = result[1];
      });
      done();
    });
    
  });

});

command.pre((i, o, cb) => {
  i.args.reporters = i.args.reporters || [];
  cb();
});

export default command;
