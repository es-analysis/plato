
import dotparts from '../dot-parts';

export default function(...properties) {
  return {
    before(input, output, done) {
      for (var i = 0; i < properties.length; i++) {
        let dotNotation = properties[i];
        let [root, prop] = dotparts(input, dotNotation);
        if (typeof root[prop] === 'string') {
          try {
            root[prop] = JSON.parse(root[prop]);
          } catch(e) {
            return done(new Error(`Could not coerce JSON for ${dotNotation}`));
          }
        }
      }
      done();
    }
  };
}

