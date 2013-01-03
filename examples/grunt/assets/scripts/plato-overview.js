$(function(){

  $('.plato-file-link').fitText(1.2, { minFontSize: '20px', maxFontSize: '28px' });

  var colors = {
    default : [
      '#50ABD2',
      '#ED913D',
      '#E8182E'
    ]
  };

  var graphHeight = 10,
    lineHeight = 1.35;

  var horizontalGraph = function(paper, num, orig, width, label, color){
    var offset = 70;
    var y = parseInt(graphHeight * num * lineHeight,10);
    paper.rect(offset, y, width, graphHeight).attr({fill: color, stroke:'none'});
    paper.text(offset - 5, y + 5, label).attr({'font-size':12,'text-anchor':'end' });
    paper.text(width + offset + 8, y + 6, orig).attr({'font-size':10,'text-anchor':'start' });
  }

  function getColor(value, colors, thresholds) {
    thresholds = thresholds || [];
    for (var i = thresholds.length - 1; i > -1; i--) {
      if (value > thresholds[i]) return colors[i+1];
    }
    return colors[0];
  }

  function drawFileCharts(reports) {
    reports.forEach(function(report,i){
      var $container = $('#plato-file-' + i + ' .plato-file-chart').empty();
      var width = $container.width();
      var paper = Raphael($container[0], width, 40);

      // leave room at the end for the value labels.
      width = width - 120;

      var value = report.complexity.aggregate.complexity.cyclomatic;
      horizontalGraph(paper,0,value, Math.min(value * 2, width),'complexity', getColor(value, colors.default, [5,10]));

      value = report.complexity.aggregate.complexity.sloc.physical;
      horizontalGraph(paper,1,value, Math.min(value, width), 'sloc', getColor(value,colors.default,[400,600]));

      value = report.complexity.aggregate.complexity.halstead.bugs.toFixed(2);
      horizontalGraph(paper,2,value, value * 5, 'est bugs', getColor(value,colors.default,[1,5]));
    });
  }

  function drawOverviewCharts(reports) {
    $('#chart1, #chart2, #chart3').empty();

    var cyclomatic = {
      element: 'chart1',
      data: [],
      xkey: 'label',
      ykeys: ['value'],
      ymax:20,
      labels: ['Complexity'],
      barColors : ['#194756']
    };
    var sloc = {
      element: 'chart2',
      data: [],
      xkey: 'label',
      ykeys: ['value'],
      ymax : 400,
      labels: ['Lines'],
      barColors : ['#FAAF78']
    }

    var bugs = {
      element: 'chart3',
      data: [],
      xkey: 'label',
      ykeys: ['value'],
      labels: ['Bugs'],
      ymax: 20,
      barColors : ['#D54C2C']
    };

    __report.forEach(function(report,i){

      cyclomatic.ymax = Math.max(cyclomatic.ymax, report.complexity.aggregate.complexity.cyclomatic);
      sloc.ymax = Math.max(sloc.ymax, report.complexity.aggregate.complexity.sloc.physical);
      bugs.ymax = Math.max(bugs.ymax, report.complexity.aggregate.complexity.halstead.bugs);


      cyclomatic.data.push({
        value : report.complexity.aggregate.complexity.cyclomatic,
        label : report.complexity.module
      })
      sloc.data.push({
        value : report.complexity.aggregate.complexity.sloc.physical,
        label : report.complexity.module
      })
      bugs.data.push({
        value : report.complexity.aggregate.complexity.halstead.bugs.toFixed(2),
        label : report.complexity.module
      })
    });

    function onGraphClick(i, row){
      document.location = __report[i].info.link;
    }

    var charts = [
      Morris.Bar(cyclomatic),
      Morris.Bar(bugs),
      Morris.Bar(sloc)
    ];

    charts.forEach(function(chart){
      chart.on('click', onGraphClick);
    });
    return charts;
  }

  drawOverviewCharts(__report);
  drawFileCharts(__report);

  $(window).on('resize', _.debounce(function(){
    drawFileCharts(__report);
    drawOverviewCharts(__report);
  },200))
});



