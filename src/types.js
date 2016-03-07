
import {Datastore} from './commands/db/_initdb';

const PluginType = [
  String,
  {
    module:Function,
    id: String,
    '?config': Object
  },
  {
    module:String,
    '?config': Object
  }
];

const types = {
  db: [String, Datastore],
  query: Object,
  sort: Object,
  update: Object,
  updateOptions : Object,
  limit: Object,
  file: String,
  fileContents: String,
  files: Array.of(String),
  analyzer: PluginType,
  analyzers: Array.of(PluginType),
  reporter: PluginType,
  reporters: Array.of(PluginType),
  batchId: String,
  document: Object
};



export default types;