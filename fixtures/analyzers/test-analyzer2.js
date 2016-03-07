
module.exports = function(config, logger) {
  return {
    aggregate: function(reports, done) {
      done(null, ['rep2']);
    },
    run: function (filename, src, done) {
      var results = {};

      results.bytes = src.split('').length;

      done(null, results);
    }
  };
};


