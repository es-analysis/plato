
import path from 'path';

import async from 'async';
import { Command } from 'clapi';
import fileReader from 'clapi-filereader';

import batchFiles from './run';
import insert from '../db/insert';
import {flatmap} from '../../util';

import logger from '../../logger';

const command = Command.init((input, output, done) => {
  var db = input.args.db;
  batchFiles.run([input, {}], (err, input, innerOutput) => {
    if (err) return done(err);

    var batchDocument = {
      type : 'batch',
      date : new Date(),
      files : innerOutput.data.reports.length
    };

    insert.run([input.cloneWith({args: {document: batchDocument}}), {}], (err, _, insertOutput) => {
      if (err) return done(err);
      
      var id = insertOutput.data.documents[0]._id;

      logger.log(innerOutput.data.reports.length);

      var inserts = innerOutput.data.reports.map(reports => ({
          batchId: id,
          type: 'report',
          reports: reports,
        }));
    
      insert.run([input.cloneWith({args:{document: inserts}})], (err, input, result) => {
        if (err) return done(err);
        output.data.batch = batchDocument;
        output.data.results = result.data.documents;
        done();
      });
      
    });
    
  });
});

export default command;
