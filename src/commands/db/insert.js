
import path from 'path';

import { Command } from 'clapi';

import initdb from './_initdb';

const command = Command.init((input, output, done) => {
  output.data.documents = output.data.documents || [];
  input.args.db.insert(input.args.document, (err, newDoc) => {
    output.data.documents.push(newDoc);
    done(err);
  });
});

command.pre(initdb);

export default command;