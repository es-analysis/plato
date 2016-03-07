
import fs from 'fs';
import path from 'path';

import Handlebars from 'handlebars';

export default function(config) {
  return {
    after: function(input, output, done) {
      config.basedir = config.basedir || path.join(input.cwd, 'templates');
      let templateFile = typeof config.template === 'function' ? config.template(input, output) : config.template;
      let file = path.join(config.basedir, templateFile);
      readFile(file, (err, source) => {
        if (err) return done(err);
        let tmplFn = Handlebars.compile(source);
        config.writer(tmplFn(output.data));
        done();
      });
    }
  };
}

var cache = {};

function readFile(filename, done) {
  if (cache[filename]) return done(null, cache[filename]);
  fs.readFile(filename, 'utf8', (err, source)=>{
    cache[filename] = source;
    done(null, source);
  });
}