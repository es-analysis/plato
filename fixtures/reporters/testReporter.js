

exports.create = function() {
  return {
    id: 'sloc',
    setup: function(config) {
      this.config = config || {};
    },
    run: function (src, done) {
      var results = {};

      if (this.config.skipWhitespace) results.sloc = src.split('\n').filter(function(line){return !(line.match(/^\s*$/))}).length;
      else results.sloc = src.split('\n').length;

      done(null, results);
    }
  };
};


