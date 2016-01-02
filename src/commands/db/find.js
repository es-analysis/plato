
import path from 'path';

import { Command } from 'clapi';

import initdb from './_initdb';

const command = Command.init((input, output, done) => {
  input.args.db.find(input.args.query, (err, docs) => {
    output.data.documents = docs;
    done(err);
  });
});

command.pre(initdb);

export default command;