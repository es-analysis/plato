
import async from 'async';
import { Command } from 'clapi';
import fileReader from 'clapi-filereader';

import analyzeMulti from '../file/analyze-multi';
import logger from '../../logger';
import { resolveAnalyzer } from '../../util';

analyzeMulti.pre(fileReader);

const command = Command.init((input, output, done) => {
  const files = input.args.files;
  
  const analyzeFns = files.map((file) => {
    logger.verbose('run-each', 'analyzing file: %s', file);

    return (cb) => {
      const analyzeInput = input.cloneWith({args:{file}});
      analyzeMulti.run([analyzeInput, {}], (err, _, analysisResults) => {
        cb(err, file, analysisResults.data.reports);
      });
    };
  }); 
  
  async.parallel(
    analyzeFns,
    (err, results) => {
      if (err) return done(err);
      logger.info('run-after', 'finished analyzing %s files (%s reports)', files.length, results.length);
      
      output.data.reports = results.map(result => ({file: result[0], data: result[1]}));
  
      const aggregateFns = input.args.analyzers.map(analyzer => cb => {
        analyzer = resolveAnalyzer(analyzer);
        const instance = analyzer.module(analyzer.config);
        
        const isInstanceReport = report => report.analyzer === analyzer.id; 
        const reduceResultSet = result => ({file: result[0], report: result[1].filter(isInstanceReport)[0].result});
        // results are massaged dramatically to present a better ux for plugins 
        const limitedResultSet = results.map(reduceResultSet);

        instance.aggregate(limitedResultSet, (err, aggregateData) => cb(err, {id: analyzer.id, data: aggregateData}));
      });
      
      async.parallel(aggregateFns, (err, results) => {
        const batchDocument = {
          type : 'batch',
          created : Date.now(),
          files : results.length,
          reports : {}
        };
        results.forEach(result => batchDocument.reports[result.id] = result.data);
        
        output.data.batch = batchDocument;
  
        done(err);
      });
    });
});

export default command;
