
export default function dotparts(obj, def) {
  var props = typeof def === 'string' ? def.split('.') : def;
  if (props.length > 1) {
    return dotparts(obj[props[0]], props.slice(1));
  } else {
    return [obj, props[0]];
  }
}