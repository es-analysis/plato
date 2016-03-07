
import Datastore from 'nedb';

export {
  loadDb as default,
  Datastore as Datastore
};

function loadDb(input, output, done) {
  if (typeof input.args.db === 'string') {
    let db = new Datastore({ filename: input.args.db, timestampData: true });
    db.loadDatabase((err) => {
      input.args.db = db;
      done(err);
    });
  } else {
    done();
  }
}