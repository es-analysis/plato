
import path from 'path';
import fs from 'fs';

import async from 'async';
import { Command } from 'clapi';
import fileReader from 'clapi-filereader';
import Handlebars from 'handlebars';

import helpers from '../../handlebar-helpers';
helpers(Handlebars);

const command = Command.init(action);

command.arg('file', '', 'the filename to use for the generated output').required();
command.arg('template', undefined, 'template to be used to generate output').required();
command.arg('widgets', [], 'widget modules to be registered before running the template');
command.arg('scripts', [], 'external scripts to include with the template');
command.arg('data', {}, 'data to be passed to the template');

function action(input, output, done) {
  let args = input.args;

  args.widgets.forEach((widgetModule) => {
    var widget = require(path.join(input.cwd, widgetModule));
    widget.register(Handlebars);
    if (widget.scripts) {
      args.scripts = args.scripts.concat(widget.scripts);
    }
  });

  var template = Handlebars.compile(args.template);

  var context = input.cloneWith({scripts: args.scripts, file: args.file}, args.data);

  var readOps = args.scripts.map(
      fileObj =>
        cb => fs.readFile(fileObj.path || fileObj, {encoding:'utf-8'}, (err, contents) => {
      cb(err, { path : (fileObj.name || path.basename(fileObj)).split(path.sep), contents})
    }));

  var templateOps = readOps.concat(cb => {
    cb(null, { path: args.file.split(path.sep), contents: template(context)});
  });

  async.parallel(templateOps, (err, results) => {
    if (err) console.log(err);
    output.data.template_output = results;
    done();
  });
}

export default command;
