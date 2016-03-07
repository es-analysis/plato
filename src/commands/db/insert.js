
import Command from 'clapi';

import schema from '../../middleware/schema';
import initdb from './_initdb';
import types from '../../types';

const command = Command.create();

command.use(schema({
  args: {
    db: types.db,
    document: types.document
  }
}));

command.add((input, output, done) => {
  output.data.documents = output.data.documents || [];
  input.args.db.insert(input.args.document, (err, newDoc) => {
    if (err) return done(err.message ? new Error(err.message) : err);
    if (Array.isArray(newDoc)) output.data.documents.push(...newDoc);
    else output.data.documents.push(newDoc);
    done();
  });
});

command.before(initdb);

export default command;