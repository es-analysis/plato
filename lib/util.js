'use strict';

exports.findCommonBase = function(files) {
  if (!files || files.length === 1) return '';
  var first = files[0];
  var prefixlen = first.length;
  files.forEach(function(file){
    for (var i = prefixlen; i > 0; i--) {
      if (file.substr(0,i) === first.substr(0,i)) {
        prefixlen = i;
        break;
      }
    }
  });
  return first.substr(0,prefixlen);
};

exports.formatJSON = function (report) {
  return JSON.stringify(report, function(k,v){
    if (k === 'identifiers') return ['__stripped__'];
    return v;
  },2);
};

