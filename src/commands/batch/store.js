
import util from 'util';

import Command from 'clapi';

import batchAnalyze from './analyze';
import insert from '../db/insert';
import update from '../db/update';
import logger from '../../logger';
import schema from '../../middleware/schema';
import types from '../../types';

const command = Command.create();

command.description = 'Run analysis and store reports to local database';

command.use(schema({
  args: {
    analyzers: types.analyzers,
    files: types.files,
    db: types.db,
  }
}));

command.add((input, output, done) => {
  
  batchAnalyze.run([input, {}], (err, input, runOutput) => {
    if (err) return done(err);

    insert.run([input.cloneWith({args: {document: runOutput.data.batch}}), {}], (err, _, batchResult) => {
      if (err) return done(err);
      
      const batchDocument = batchResult.data.documents[0];
      
      logger.silly('batch-insert', 'inserted batch document : %s', util.inspect(batchDocument));
      
      logger.log(runOutput.data.reports.length);

      const documents = runOutput.data.reports.map(reports => ({
        batchId: batchDocument._id,
        type: 'report',
        created: Date.now(),
        reports: reports,
      }));
    
      insert.run([input.cloneWith({args:{document: documents}})], (err, input, reportResults) => {
        if (err) return done(err);

        output.data.results = reportResults.data.documents;

        logger.silly('file-insert', 'inserted files %s', util.inspect(output.data.results));

        const entries = output.data.results.map((result)=> ({file:result.reports.file, id: result._id}));
        logger.silly('batch-update', 'updating batch with entries: %s', util.inspect(entries));
        update.run([input.cloneWith({args:{query:{_id:batchDocument._id}, update:{$set: {entries}}}})], (err, input, updateResult)=>{
          if (err) return done(err);
          if (updateResult.data.documentsUpdated < 1) logger.error('unsuccessfully updated batch entry in the database.');
          else logger.verbose('successfully updated batch with entry ids');
          output.data.batch = batchDocument;
          done();
        });
      });
    });
  });
});

export default command;
