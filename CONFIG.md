.plato.rc configuration files
-----------------------------

module.exports = {
  directory : '', // autofilled by default
  files : [
    'src/**/*.js' // only expanded if used through plato
  ],
  reporters : [
    require('plato-eslint'),
    require('plato-jscs'),
    require('plato-complexity')
  ],
  options : {
    eslint: {},
    jscs: {},
    complexity: {}
  },
  db: '.plato.db',
  datastore: <Instance of DataStore>,
  updateOn : 'version.patch'
}


