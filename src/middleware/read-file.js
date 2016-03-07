
import fs from 'fs';

export default function readFile(fromProp, toProp) {
  return {
    before(input, output, done) {
      var fileName = input.args[fromProp || 'file'];
      fromProp = fromProp || 'fileContents';
      if (!fileName) return done();
  
      fs.readFile(fileName, {encoding : 'utf-8'}, function(err, source){
        input.args[toProp] = source;
        done();
      });
    }
  };
}
