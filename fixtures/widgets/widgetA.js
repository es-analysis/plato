
exports.register = function(Handlebars) {
  Handlebars.registerHelper('widgetA', function(data) {
    return new Handlebars.SafeString("<h2>Sloc : " + data.sloc + "</h2>");
  });
};