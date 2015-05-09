
import semver from 'semver';

import logger from '../logger.js';
import dispatch from '../dispatcher';

export function run(config) {
  let dispatcher = dispatch.create(config);

  let lastVersion = config.datastore.getLastVersion();

  let shouldRun = true;
  if (config.updateOn === 'version') {
    shouldRun = semver.gt(config.currentVersion, lastVersion)
  }

  if (shouldRun) {
    dispatcher.run(function(err, results) {
      if (err) return logger.error(err);

      platodb.storeResults(results);
    })
  }
}

