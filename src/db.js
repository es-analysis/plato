
import NeDB from 'nedb';

class DB {
  constructor(config, done) {
    this.instance = new NeDB({filename : config.filename});
    this.instance.loadDatabase(done);
  }
  insert(doc, done) {
    this.instance.insert(doc, done);
  }
}