#!/bin/bash

TMPDIR=/tmp/plato

CMD=plato

unset REFETCH

if [ $1 ]
then
REFETCH=true
fi


if [ $REFETCH ]
then
  if [ -d $TMPDIR ]
  then
    echo "Removing $TMPDIR"
    rm -rf $TMPDIR
  fi
  git clone --depth 1 git://github.com/jquery/jquery.git $TMPDIR/jquery
  git clone --depth 1 git://github.com/gruntjs/grunt.git $TMPDIR/grunt
  git clone --depth 1 https://github.com/marionettejs/backbone.marionette.git $TMPDIR/marionette
fi

OLDPWD=PWD

for days_ago in 10 20 30 60; do
   DATE=$(date -j -f "%a %b %d %T %Z %Y" "`date -v -20d`" "+%s")

   cd $TMPDIR/jquery
   git co -f $(git rev-list -n 1 --before="$date" master);
   $CMD -D $DATE -r -d $OLDPWD/examples/jquery -r src;

   cd $TMPDIR/marionette
   git co -f $(git rev-list -n 1 --before="$date" master);
   $CMD -D $DATE -d $OLDPWD/examples/marionette -r src/*.js;

   cd $TMPDIR/grunt
   git co -f $(git rev-list -n 1 --before="$date" master);
   $CMD -D $DATE -r -d $OLDPWD/examples/grunt-r src;
done

cd $OLDPWD