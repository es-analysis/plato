
module.exports = function(config, logger) {
  return {
    aggregate: function(reports, done) {
      done(null, ['rep1']);
    },
    run: function (filename, src, done) {
      var results = {};

      if (config.skipWhitespace) results.sloc = src.split('\n').filter(function(line){return !(line.match(/^\s*$/))}).length;
      else results.sloc = src.split('\n').length;

      done(null, results);
    }
  };
};


