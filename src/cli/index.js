
import path from 'path';

import glob from 'glob';
import async from 'async';
import clapi from 'clapi';
import extend from 'extend';
import findup from 'findup';
import chalk from 'chalk';

import store from '../commands/batch/store';
import generate from '../commands/generate';

import {flatmap} from '../util';
import logger from '../logger';

const cli = clapi.Application.init();

const rcfile = '.platorc';
const dbfile = '.platodb';

cli.pre(findrcfile);
cli.pre(defaults);
cli.pre(expandFiles);

cli.command('default', store);
cli.command('report', generate);

generate.post((input, output) => {
  Object.keys(output.reporters).forEach(reporter => {
    process.stdout.write(chalk.yellow(`:: ${reporter}\n`));
    process.stdout.write(output.reporters[reporter] + '\n');
  });
});

cli.command('help', () => {
  logger.debug('help');
});

export default cli;

export function expandFiles(input, output, done) {
  let globFns = input.args.files.map(pattern => cb => glob(pattern, cb));
  async.parallel(globFns, (err, results) => {
    input.args.files = flatmap(results);
    done(err);
  });
}

export function defaults(input, output) {
  let defaults = {
    db: path.join(input.rcDir, dbfile),
    files: [],
    analyzers: [],
    reporters: [],
  };
  input.args = extend(defaults, input.args);

  if (input.args.loglevel) logger.level = input.args.loglevel;

}

export function findrcfile(input, output, done) {
  findup(input.cwd, rcfile, (err, dir)=>{
    let config = require(path.join(dir, rcfile));
    extend(input.args, config);
    input.rcDir = dir;
    done(err);
  });
}

