/*global document*/

'use strict';

var casper = require('casper').create({
  exitOnError : true
});

casper.on("page.error", function(msg) {
  this.echo("Uncaught Page Error: " + msg, "ERROR");
  casper.exit(1);
});

casper.start('./tmp/index.html', function() {
  this.test.assertSelectorHasText('.jumbotron h1', 'test report');
  this.test.assertEvalEquals(function() {
    return document.querySelectorAll('.file-list li').length;
  }, 2, 'Has appropriate number list items in the file list');
  this.test.assertEval(function() {
    return document.querySelectorAll('.chart').length === document.querySelectorAll('.chart svg').length;
  }, 'Every summary chart has an svg drawn');
  this.test.assertEval(function() {
    return document.querySelectorAll('.plato-file-chart').length === document.querySelectorAll('.plato-file-chart svg').length;
  }, 'Every file chart has an svg drawn');
});

casper.then(function(){
  this.evaluate(function(){
    // click svgin the sloc chart, should respond and
    // change document location to the last file
    var element = document.querySelectorAll('#chart_sloc svg')[0];
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('click', true, true); // event type,bubbling,cancelable
    return element.dispatchEvent(evt);
  });
});

casper.then(function() {
  this.test.assertSelectorHasText('.jumbotron h1', 'b.js');
});

casper.run(function() {
  // echo results in some pretty fashion
  casper.exit(0);
});
