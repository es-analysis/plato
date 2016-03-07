
import schema from 'js-schema';

import println from '../println';

class Schema {
  constructor(def, autohelp = false) {
    this.autohelp = autohelp;
    this.def = preValidate(def);
    this.validate = schema(this.def);
  }
  before(input, output, done) {
    if (this.autohelp && (input.args.h || input.args.help)) {
      println('\n  Input:');
      println(helpString(this.def, 2));
      process.exit(0);
    }
    done();
  }
  run(input, output, done) {
    if (this.validate(input)) return done();
    let errors = this.validate.errors(input);
    let errorString = 'InputError:\n' + buildErrorString(errors);

    done(new Error(errorString));
  }
}

export default function clapiSchema(def) {
  return new Schema(def, true);
}

//export function autohelp(def) {
//  return new Schema(def, true);
//}

export function helpString(def, indent = 2) {
  let spaces = Array(indent + 1).join(' ');
  return Object.keys(def).map(arg => {
    let string = '';
    let value = def[arg];
    if (typeof value === 'object') {
      if (value.length) {
        string = `${spaces}${arg}: ${helpValue(value)}`;
      } else {
        string = helpString(def[arg], indent + 2);
      }
    } else {
      string = `${spaces}${arg}: ${helpValue(value)}`;
    }
    return string;
  }).join('\n');
}

function helpValue(value) {
  if (value.unwrap) {
    let def = value.toJSON();
    return `${def.type} of ${helpValue(def.items.type)}`;
  }
  if (typeof value === 'function') return value.name || '[Function]';
  if (typeof value === 'object' && value.length) return value.map(helpValue).join(' or ');
  if (typeof value === 'object') {
    return '[Complex object]';
  }
  return value.toString();
}

// js-schema doesn't puke on undef/anything types, so we need to
function preValidate(def) {
  Object.keys(def).forEach(key => {
    if (typeof def[key] === 'object') preValidate(def[key]);
    else if (typeof def[key] === 'undefined') throw new Error(`Undefined type for key ${key}`);
  });
  return def;
}

function buildErrorString(errors) {
  return  Object.keys(errors).map(key => `${key}: ${typeof errors[key] === 'object' ? buildErrorString(errors[key]): errors[key]}`).join('\n');
}
