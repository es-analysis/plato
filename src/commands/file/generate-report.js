
import path from 'path';

import async from 'async';
import { Command, Output } from 'clapi';
import fileReader from 'clapi-filereader';
import Handlebars from 'handlebars';

const command = Command.init((input, output, done) => {
  let args = input.args || {};
  
  (args.widgets || []).forEach((widgetModule) => {
    var widget = require(path.join(input.cwd, widgetModule));
    widget.register(Handlebars);
  });
  
  var template = Handlebars.compile(args.template);
  
  var response = template(args.data);
  output.push(response);
  
  done();
  
});

export default command;
