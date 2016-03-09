
import async from 'async';
import glob from 'glob';

import {flatmap} from '../util';
import dotparts from '../dot-parts';

export default function globMiddleware(property) {
  return {
    before(input, output, done) {
      let [obj, childProp] = dotparts(input, property);
      let globFns = obj[childProp].map(pattern => cb => glob(pattern, cb));
      async.parallel(globFns, (err, results) => {
        obj[childProp] = flatmap(results);
        done(err);
      });
    }
  };
}
