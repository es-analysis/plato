# plato

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
```

## Example

```shell
plato -r -d report src/*.js
```

## Release History

 - 0.2.0 added jshint reporting
 - 0.1.0 initial release

## License
Copyright (c) 2012 Jarrod Overson  
Licensed under the MIT license.
