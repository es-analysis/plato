
import Command from 'clapi';

import initdb from './_initdb';
import schema from '../../middleware/schema';
import types from '../../types';

const command = Command.create();

command.use(schema({
  args: {
    db: types.db,
    update: types.update,
    '?query': types.query,
    '?updateOptions': types.updateOptions,
  }
}));

command.add((input, output, done) => {
  const args = input.args;

  const query = args.query;
  const update = args.update;
  const options = args.updateOptions || {}; 
  
  input.args.db.update(query, update, options, (err, numReplaced) => {
    if (err) return done(err.message ? new Error(err.message) : err);
    output.data.documentsUpdated = numReplaced;
    done();
  });

});

command.before(initdb);

export default command;