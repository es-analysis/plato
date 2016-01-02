
import fs from 'fs';
import path from 'path';

import glob from 'glob';
import async from 'async';
import clapi from 'clapi';
import extend from 'extend';
import findup from 'findup';

import store from '../commands/batch/store';
import {flatmap} from '../util';

const cli = clapi.Application.init();

const rcfile = '.platorc';
const dbfile = '.platodb';

cli.pre(findrcfile);
cli.pre(defaults);
cli.pre(expandFiles);

cli.command('default', store);

cli.command('help', (input, output) => {
  console.log('yay')
});

export default cli;

export function expandFiles(input, output, done) {
  let files = [];
  let globFns = input.args.files.map(pattern => cb => glob(pattern, cb));
  async.parallel(globFns, (err, results) => {
    input.args.files = flatmap(results);
    done(err);
  });
}

export function defaults(input, output, done) {
  let defaults = {
    db: path.join(input.args.rcdir, dbfile),
    files: [],
    reporters: [],
  };
  input.args = extend(defaults, input.args);
  done();
}

export function findrcfile(input, output, done) {
  findup(input.cwd, rcfile, (err, dir)=>{
    let config = require(path.join(dir, rcfile));
    extend(input.args, config);
    input.args.rcdir = dir;
    done(err);
  });
}

