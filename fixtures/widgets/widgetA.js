
var path = require('path');

exports.scripts = [
  { name : 'depA.js', path : path.join(__dirname, 'scripts', 'depA.js') } 
];

exports.register = function(Handlebars) {
  Handlebars.registerHelper('widgetA', function(data) {
    return new Handlebars.SafeString("<h2>Sloc : " + data.sloc + "</h2>");
  });
};