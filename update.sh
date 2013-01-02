#!/bin/bash

TMPDIR=/tmp/plato

if [ -d $TMPDIR ]
then
  echo "Removing $TMPDIR"
  rm -rf $TMPDIR
fi

git clone –depth 1 git://github.com/jquery/jquery.git $TMPDIR/jquery
plato -r -d examples/jquery/ $TMPDIR/jquery/src/*
