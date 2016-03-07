
import util from 'util';

export function print(...args) {
  process.stdout.write(util.format(...args));
}

export default function println(...args) {
  print(...args);
  print('\n');
}