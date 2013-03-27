# plato 

[![Build Status](https://travis-ci.org/jsoverson/plato.png?branch=master)](https://travis-ci.org/jsoverson/plato)

Visualize JavaScript source complexity with plato.

## Example report on popular projects

 - [jquery](http://jsoverson.github.com/plato/examples/jquery/)
 - [grunt](http://jsoverson.github.com/plato/examples/grunt/)
 - [uglifyjs](http://jsoverson.github.com/plato/examples/uglify/)
 - [marionettejs](http://jsoverson.github.com/plato/examples/marionette/)

## Installation
Install the module with: `npm install -g plato`

## Usage

```
Usage : plato [options] file1.js file2.js ... fileN.js
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

## Example

```shell
plato -r -d report src
```

## Data sources

  - Complexity data by [Phil Booth](https://github.com/philbooth)'s [complexity-report](https://github.com/philbooth/complexityReport.js)
  - Lint data from [jshint](https://github.com/jshint/jshint/)

## Release History

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
