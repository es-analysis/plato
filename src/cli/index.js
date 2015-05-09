
import path from 'path';

import Liftoff from 'liftoff';
import assign from 'object-assign';
import multiglob from 'multi-glob';
import commander from 'commander';

import logger from '../logger';

import platodb from '../platodb';

const Plato = new Liftoff({
  name:'plato',
  processTitle: 'plato',
  moduleName: 'plato',
  configName: '.plato',
  extensions: {
    '.rc': null
  }
});

const DEFAULT_CMD = 'run';

function collect(val, memo) {
  memo.push(val);
  return memo;
}

function launch(args) {
  commander
    .version(require('../../package.json').version)
    .usage('[command] [options...]')
    .option('-f, --files <pattern>', 'Files to analyze (accepts pattern)', collect, [])
    .option('-d, --db <file>', 'Database location. defaults to .plato.db')
    .option('-r, --reporter <module>', 'Reporter to run', collect, [])
    .parse(process.argv);

  var normalizedArguments = normalize(commander);
  var command = commander.args.shift() || DEFAULT_CMD;

  Plato.launch({
    cwd: process.cwd()
  }, invoke.bind(null, command, normalizedArguments));
}

function invoke(command, args, env) {
  let plato = require('../');
  let rcfile = require(env.configPath);
  let defaults = defaultConfig();
  let contextualDefaults = defaultContextualConfig(env);
  let config = assign(contextualDefaults, defaults, rcfile);
  merge(config, args);
  if (!config.datastore) {

  }
  config.datastore = config.datastore || platodb.init(config);
  expandFiles(config.files, function(err, files){
    config.files = files;
    logger.debug('Config is : {0}', JSON.stringify(config, null, 2));
    switch (command) {
      case 'run': plato.run(config); break;
      default: logger.error('Unknown command {0}', command);

    }
  });
}

function defaultConfig() {
  return {
    db : '.plato.db'
  };
}

function defaultContextualConfig(env) {
  let pkg = {};
  try {
    pkg = require(path.join(env.configBase), 'package.json');
  } catch(x){
    logger.debug('No local package.json found');
  }
  return {
    basePath : env.configBase,
    currentVersion : pkg.version
  }
}

function expandFiles(patterns, cb) {
  multiglob.glob(patterns, {}, cb);
}

// normalize arguments from argv parser
function normalize(commander) {
  var normalized = {};

  normalized.files = commander.files;
  normalized.db = commander.db;
  normalized.reporters = commander.reporter;

  return normalized;
}

// custom, ad hoc logic to merge and override
function merge(config, additional) {
  config.files.push(...additional.files);
  config.reporters.push(...additional.reporters);
  config.reporters = config.reporters.map((reporter) => {
    return require(reporter.match(/^\./) ? path.resolve(path.join(config.basePath, reporter)) : reporter);
  });
  if (additional.db) config.db = additional.db;
  return config;
}

export default {
  launch,
  invoke,
  expandFiles
};
