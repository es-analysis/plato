

exports.create = function() {
  return {
    id: 'bytecount',
    setup: function(config) {
      this.config = config || {};
    },
    run: function (src, done) {
      var results = {};

      results.bytes = src.split('').length;

      done(null, results);
    }
  };
};


