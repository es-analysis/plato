#!/bin/bash

TMPDIR=/tmp/plato

CMD=plato

unset REFETCH

if [ $1 ]
then
REFETCH=true
fi


if [ $REFETCH ] && [ -d $TMPDIR ]
then
  echo "Removing $TMPDIR"
  rm -rf $TMPDIR
fi

if [ -d examples ]
then
  echo "Removing old examples"
  rm -rf examples
fi

if [ $REFETCH ]
then
git clone --depth 1 git://github.com/emberjs/ember.js.git $TMPDIR/ember
git clone --depth 1 git://github.com/jquery/jquery.git $TMPDIR/jquery
git clone --depth 1 git://github.com/gruntjs/grunt.git $TMPDIR/grunt
git clone --depth 1 https://github.com/marionettejs/backbone.marionette.git $TMPDIR/marionette
git clone --depth 1 git://github.com/mishoo/UglifyJS2.git $TMPDIR/uglify
git clone --depth 1 git://github.com/ariya/esprima.git $TMPDIR/esprima
fi

$CMD -r -d examples/ember/ $TMPDIR/ember/packages/ember-runtime/lib/*
$CMD -r -d examples/jquery/ $TMPDIR/jquery/src/*
$CMD -r -d examples/grunt/ $TMPDIR/grunt/lib/*
$CMD -d examples/marionette/ $TMPDIR/marionette/src/*.js
$CMD -r -d examples/uglify/ $TMPDIR/uglify/lib/*.js $TMPDIR/uglify/bin/*
$CMD -d examples/esprima $TMPDIR/esprima/esprima.js
