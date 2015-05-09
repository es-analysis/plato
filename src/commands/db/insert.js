
import path from 'path';

import { Command } from 'clapi';

const command = Command.init((input, output, done) => {
  input.args.db.insert(input.args.document, (err, newDoc) => {
    output.push(newDoc);
    done(err);
  });
});

export default command;