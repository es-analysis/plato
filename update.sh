#!/bin/bash

TMPDIR=/tmp/plato

if [ -d $TMPDIR ]
then
  echo "Removing $TMPDIR"
  rm -rf $TMPDIR
fi

if [ -d examples ]
then
  echo "Removing old examples"
  rm -rf examples
fi

git clone --depth 1 git://github.com/jquery/jquery.git $TMPDIR/jquery
plato -r -d examples/jquery/ $TMPDIR/jquery/src/*

git clone --depth 1 git://github.com/gruntjs/grunt.git $TMPDIR/grunt
plato -r -d examples/grunt/ $TMPDIR/grunt/lib/*

git clone --depth 1 https://github.com/marionettejs/backbone.marionette.git $TMPDIR/marionette
plato -d examples/marionette/ $TMPDIR/marionette/src/*.js

git clone --depth 1 git://github.com/mishoo/UglifyJS2.git $TMPDIR/uglify
plato -r -d examples/uglify/ $TMPDIR/uglify/lib/*.js $TMPDIR/uglify/bin/*
