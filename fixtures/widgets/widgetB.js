
exports.register = function(Handlebars) {
  Handlebars.registerHelper('widgetB', function(data) {
    return new Handlebars.SafeString("<h2>Bytes : " + data.bytes + "</h2>");
  });
};