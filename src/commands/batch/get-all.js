
import Command from 'clapi';

import find from '../db/find';
import logger from '../../logger';
import schema from '../../middleware/schema';

import types from '../../types';

const command = Command.create();

command.description = 'Get all reports for specified batchId (none for latest)';

command.use(schema({
  args: {
    '?batchId': types.batchId,
    db: types.db,
  }
}));

command.add((input, output, done) => {
  let findArgs = {
    query: {type: 'batch'},
    sort: {created: -1},
    limit: 1
  };

  if (input.args.batchId) {
    logger.info('get-all', 'getting batch id %s', input.args.batchId);
    findArgs = {
      query: {type: 'batch', id: input.args.batchId}
    };
  } else {
    logger.info('get-all', 'getting latest batch');
  }

  find.run([input.cloneWith({args: findArgs})], (err, _, batchResult) => {
    if (err) return done(err);
    output.data.batch = batchResult.data.documents[0];
    logger.verbose('find-batch', 'got batch with id %s', output.data.batch._id);
    const reportArgs = {
      db: input.args.db,
      query: { type: 'report', batchId: output.data.batch._id }
    };
    find.run([{args: reportArgs}], (err, _, reportResult) => {
      if (err) return done(err);
      output.data.reports = reportResult.data.documents;
      logger.verbose('find-reports', 'got %s reports with batch id %s', output.data.reports.length, output.data.batch._id);
      done();
    });
  });

});

export default command;
