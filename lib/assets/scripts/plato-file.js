
$(function(){

  _.templateSettings = {
    interpolate : /\{\{(.+?)\}\}/g
  };

  function focusFragment() {
    $('.plato-mark').removeClass('focus');
    var markId = window.location.hash.substr(1);
    if (markId) $('.' + markId).addClass('focus');
    return focusFragment;
  }

  window.onhashchange = focusFragment();

  var srcEl = document.getElementById('file-source');

  var options = {
    lineNumbers : true,
    gutters     : ['plato-gutter-jshint','plato-gutter-complexity'],
    readOnly    : 'nocursor'
  };

  var cm = CodeMirror.fromTextArea(srcEl, options);

  var byComplexity = [], bySloc = [];

  __report.complexity.functions.forEach(function(fn,i){
    byComplexity.push({
      label : fn.name,
      value : fn.complexity.cyclomatic
    })
    bySloc.push({
      label : fn.name,
      value : fn.complexity.sloc.physical,
      formatter: function (x) { return x + " lines"}
    });
  })

  var scrollToLine = function(i, data) {
    var origScroll = [window.pageXOffset,window.pageYOffset];
    window.location.hash = '#plato-mark-fn-' + i;
    window.scrollTo(origScroll[0],origScroll[1]);
    var line = __report.complexity.functions[i].line;
    var coords = cm.charCoords({line : line, ch : 0});
    $('body,html').animate({scrollTop : coords.top -50},250)
  };

  Morris.Donut({ element: 'fn-by-complexity', data: byComplexity }).on('click',scrollToLine);
  Morris.Donut({ element: 'fn-by-sloc', data: bySloc }).on('click',scrollToLine);

  __report.complexity.functions.forEach(function (fn,i) {
    var name = fn.name === '<anonymous>' ? 'function\\s*\\([^)]*\\)' : fn.name;
    var line = fn.line - 1;
    var className = 'plato-mark-fn-' + i;
    var gutter = {
      gutterId : 'plato-gutter-complexity',
      el : $('<a name="' + className + '"><i class="plato-gutter-icon icon-cog"></i></a>')[0]
    };
    var popover = {
      title : fn.name === '<anonymous>' ? '&lt;anonymous&gt;' : 'function ' + fn.name + '',
      content : _.template($('#complexity-popover-template').text())(fn)
    }
    cm.markPopoverText({line : line, ch:0}, name, className, gutter, popover);

  });

  console.log(__report.jshint);

  __report.jshint.messages.forEach(function (message,i) {
    var gutterIcon = $('<a><i class="plato-gutter-icon icon-eye-open"></i></a>')
    var content = $('<div></div>').addClass('plato-jshint-message text-'+message.severity).text('Line: ' + message.line + ', Column: ' + message.column + ' "' + message.message + '"');
    if (_.isArray(message.line)) {
      message.line.forEach(function(line){
        cm.setGutterMarker(line - 1, 'plato-gutter-jshint', gutterIcon.clone()[0])
        cm.addLineWidget(line - 1, content.clone()[0]);
      })
    } else {
      cm.setGutterMarker(message.line - 1, 'plato-line-widget', gutterIcon[0])
      cm.addLineWidget(message.line - 1, content[0]);
    }
  });

})


