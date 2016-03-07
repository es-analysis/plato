
export default function(...properties) {
  return {
    before: function(input, output, done) {
      for (var i = 0; i < properties.length; i++) {
        let dotNotation = properties[i];
        let [root, prop] = getParentObject(input, dotNotation);
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

export function getParentObject(obj, def) {
  var props = typeof def === 'string' ? def.split('.') : def;
  if (props.length > 1) {
    return getParentObject(obj[props[0]], props.slice(1));
  } else {
    return [obj, props[0]];
  }
}