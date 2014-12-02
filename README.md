# plato

[![Build Status](https://travis-ci.org/es-analysis/plato.png?branch=master)](https://travis-ci.org/es-analysis/plato)

[![Codeship Status for es-analysis/plato](https://www.codeship.io/projects/479c7b90-f024-0131-6150-66d8ca7dad4d/status)](https://www.codeship.io/projects/27326)

Visualize JavaScript source complexity with plato.

## Example report on popular projects

 - [jquery](http://es-analysis.github.com/plato/examples/jquery/)
 - [grunt](http://es-analysis.github.com/plato/examples/grunt/)
 - [marionettejs](http://es-analysis.github.com/plato/examples/marionette/)
 - [dojo](http://htmlpreview.github.io/?https://github.com/ainthek/plato-reports/blob/master/reports/dojo/index.html)
 - [cujojs/when](http://htmlpreview.github.io/?https://github.com/ainthek/plato-reports/blob/master/reports/cujojs/when/index.html)

## Installation
Install the module with: `npm install -g plato`

## Usage

### From the commandline

```
Usage : plato [options] -d <output_dir> <input files>
  -h, --help
      Display this help text.
  -q, --quiet
      Reduce output to errors only
  -v, --version
      Print the version.
  -x, --exclude : String
      File exclusion regex
  -d, --dir : String *required*
      The output directory
  -r, --recurse
      Recursively search directories
  -l, --jshint : String
      Specify a jshintrc file for JSHint linting
  -t, --title : String
      Title of the report
  -D, --date : String
      Time to use as the report date (seconds, > 9999999999 assumed to be ms)
```

__Example__

```shell
plato -r -d report src
```

__Extended example__

```
plato -r -d report -l .jshintrc -t "My Awesome App" -x .json routes/*.js
```

### From scripts

```
var plato = require('plato');

var files = [
  'path/to/javascript/file1.js',
  ...
  'path/to/javascript/fileN.js'
];

var outputDir = './output/dir';
// null options for this example
var options = {
  title: 'Your title here'
};

var callback = function (report){
// once done the analysis,
// execute this
};

plato.inspect(files, outputDir, {}, callback);
```

## Data sources

  - Complexity data by [Phil Booth](https://github.com/philbooth)'s [complexity-report](https://github.com/philbooth/complexityReport.js)
  - Lint data from [jshint](https://github.com/jshint/jshint/)

## Contributors
  - [Jarrod Overson](https://github.com/jsoverson)
  - [Craig Davis](https://github.com/there4)
  - [David Linse](https://github.com/davidlinse)

## Release History

  - 1.2.1 Bumping versions for jshint and lodash
  - 1.2.0 add ability to disable jshint
  - 1.1.0 fix issue with running casperjs tests
  - 1.0.1 fix issue with first line hashbang
  - 1.0.0 promote to 1.0.0 with bug fixes
  - 0.6.2 Added sortable file list, updated to bootstrap 3
  - 0.6.1 Fixed width overflow issues in file reports
  - 0.6.0 updated major dependency complexity-report
  - 0.5.0 Added historical reports
  - 0.4.7 Updated jshint to 1.1.0 (via #22) to jshint to address #16
  - 0.4.6 Performance improvements on file view
  - 0.4.5 Updated complexity-report to 0.7.0 to prefer the 0-100 based maintainability index
  - 0.4.4 Added quiet mode, exclusion regex, description popovers
  - 0.4.3 Updated dependencies to fix reporting issues
  - 0.4.2 Fixed overview links to files
  - 0.4.1 Fixed jshint option passing
  - 0.4.0 Added summary stats, Casper tests, nodunit tests
    - Breaking : plato api
  - 0.3.1 Added graphs
  - 0.3.0 Formatting changes, refactoring.
    - Breaking : jshint reporting api
  - 0.2.0 added jshint reporting.
    - Breaking : options api, cli api
  - 0.1.0 initial release

## License
Copyright (c) 2012 Jarrod Overson
Licensed under the MIT license.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/es-analysis/plato/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

