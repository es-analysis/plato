

module.exports = function(config) {
  return {
    aggregate: function(reports, done) {
      done(null, ['rep2']);
    },
    run: function (src, done) {
      var results = {};

      results.bytes = src.split('').length;

      done(null, results);
    }
  };
};


