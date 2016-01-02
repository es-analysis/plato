
import path from 'path';

import async from 'async';
import { Command, Output } from 'clapi';
import fileReader from 'clapi-filereader';
import Handlebars from 'handlebars';

import helpers from '../../handlebar-helpers';
helpers(Handlebars);

const command = Command.init((input, output, done) => {
  let args = input.args || {};
  args.data = args.data || {};
  args.data.scripts = args.data.scripts || [];
  
  (args.widgets || []).forEach((widgetModule) => {
    var widget = require(path.join(input.cwd, widgetModule));
    widget.register(Handlebars);
    if (widget.scripts) {
      args.data.scripts = args.data.scripts.concat(widget.scripts);
    }
  });
  
  var template = Handlebars.compile(args.template);
  
  output.stdout = template(args.data);
  
  done();
  
});

export default command;
