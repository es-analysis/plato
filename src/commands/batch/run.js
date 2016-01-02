
import path from 'path';

import async from 'async';
import extend from 'extend';
import { Command } from 'clapi';
import fileReader from 'clapi-filereader';

import analyzeMulti from '../file/analyze-multi';
import logger from '../../logger';

analyzeMulti.pre(fileReader);

const command = Command.init((input, output, done) => {
  var files = input.args.files;
  output.data.reports = [];
  async.parallel(files.map((file) => {
      logger.log('running file [%s]', file);
      return (cb) => {
        let childInput = input.cloneWith({args:{file}});
        analyzeMulti.run([childInput, {}], (err, input, output) => {
          cb(err, output.data.reports);
        })
      };
    }),
    (err, results) => {
      logger.log('finished running reports on %s files (%s reports)', files.length, results.length);
      output.data.reports.push(...results);
      done(err);
    }
  );
});

export default command;
