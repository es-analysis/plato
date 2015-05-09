
import path from 'path';

import { Command } from 'clapi';

const command = Command.init((input, output, done) => {
  input.args.db.find(input.args.query, (err, docs) => {
    output.push(docs);
    done(err);
  });
});

export default command;