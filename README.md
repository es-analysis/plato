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
  -v, --version
      Print the version.
  -d, --dir : String *required*
      The output directory
  -r, --recurse
      Recursively search directories
  -l, --jshint : String
      Specify a jshintrc file for JSHint linting
  -t, --title : String
      Title of the report
```

## Example

```shell
plato -r -d report src/*.js
```

## Release History

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
