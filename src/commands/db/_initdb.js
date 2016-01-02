
export default function(input, output, done) {
  if (typeof input.args.db === 'string') {
    var Datastore = require('nedb');
    let db = new Datastore({ filename: input.args.db });
    db.loadDatabase((err) => {
      input.args.db = db;
      done(err);
    });
  } else {
    done();
  }
};