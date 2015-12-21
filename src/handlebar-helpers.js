
export default function helpers(Handlebars) {
  Handlebars.registerHelper('stringify', function(obj) {
    return new Handlebars.SafeString(JSON.stringify(obj));
  })
};