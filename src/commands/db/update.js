
import { Command } from 'clapi';

import initdb from './_initdb';

const command = Command.init((input, output, done) => {
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

command.pre(initdb);

export default command;