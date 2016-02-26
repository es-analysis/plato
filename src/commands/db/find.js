
import { Command } from 'clapi';

import initdb from './_initdb';

const command = Command.init((input, output, done) => {
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

command.pre(initdb);

export default command;