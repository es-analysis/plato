
import Command from 'clapi';

import schema from '../../middleware/schema';
import coerce from '../../middleware/coerce-json';
import initdb from './_initdb';
import types from '../../types';

const command = Command.create();

command.description = 'Find a database entry';

command.use(schema({
  args: {
    db: types.db,
    query: types.query,
    '?sort': types.sort,
    '?limit': types.limit
  }
}));

command.use(coerce('args.query'));

command.before(initdb);

command.add((input, output, done) => {
  let args = input.args;
  
  let query = args.db.find(args.query);
  
  // TODO: TESTS
  if (args.sort) query = query.sort(args.sort);
  if (args.limit) query = query.limit(args.limit);
  
  query.exec((err, docs) => {
    output.data.documents = docs;
    done(err);
  });
});

export default command;