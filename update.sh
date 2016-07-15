#!/bin/bash

ORIGWD=$PWD

TMPDIR=/tmp/plato

CMD=plato

echo Original directory : $ORIGWD
echo Temporary root directory : $TMPDIR
echo Command : $CMD

unset REFETCH

if [ $1 ]
then
REFETCH=true
fi

if [ -d examples ]
then
 rm -rf examples
fi


if [ $REFETCH ]
then
  if [ -d $TMPDIR ]
  then
    echo "Removing $TMPDIR"
    rm -rf $TMPDIR
  fi
  git clone git://github.com/jquery/jquery.git $TMPDIR/jquery
  git clone git@github.com:hapijs/hapi.git $TMPDIR/hapi
  git clone https://github.com/marionettejs/backbone.marionette.git $TMPDIR/marionette
fi

function runCommand() {
  echo $1
  $1
}

for DAYS_AGO in 210 180 150 120 90 60 30 0; do
  DATE=$(date -j -f "%a %b %d %T %Z %Y" "`date -v -${DAYS_AGO}d`" "+%s")

  echo Using date $DATE / $(date -j -f "%s" "$DATE" "+%a %b %d %T %Z %Y")

  cd $TMPDIR/jquery &&
    echo In $PWD &&
    git co -f $(git rev-list -n 1 --before="$DATE" master) &&
    runCommand "$CMD -D $DATE -r -d $ORIGWD/examples/jquery -x 'exports.js|tro.js' src";

  cd $TMPDIR/marionette &&
    echo In $PWD &&
    git co -f $(git rev-list -n 1 --before="$DATE" master) &&
    runCommand "$CMD -D $DATE -d $ORIGWD/examples/marionette src/*.js";

  cd $TMPDIR/hapi &&
    echo In $PWD &&
    git co -f $(git rev-list -n 1 --before="$DATE" master) &&
    runCommand "$CMD -D $DATE -r -d $ORIGWD/examples/hapi lib";
done

cd $ORIGWD
