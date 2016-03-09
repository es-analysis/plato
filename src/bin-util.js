
/**
 *  TODO need to split this up per command, this is heavily focused 
 *  on the default command for now.
 */

import extend from 'extend';

export default function normalizeCliArguments(argv) {
  let args = extend(true, {}, argv);

  forceArray(args, 'file', 'files');
  forceArray(args, 'analyzer', 'analyzers');
  forceArray(args, 'reporter', 'reporters');
  
  return args;
}

function forceArray(obj, from, to) {
  if (obj[from]) {
    obj[to] = isArray(obj[from]) ? obj[from] : [obj[from]];
  }
  if (obj[to] && !isArray(obj[to])) obj[to] = [obj[to]];
}

function isArray(obj) {
  return obj instanceof Array;
}