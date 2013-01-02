
function buildBarChart(container, data) {
  container = d3.select(container);
  var m = data[0].length, // number of samples per layer
    stack = d3.layout.stack(),
    n = data.length,
    layers = stack(data),
    yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
    yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });

  var margin = {top: 40, right: 10, bottom: 20, left: 10},
    width = parseInt(container.style('width'),10) - margin.left - margin.right,
    height = parseInt(container.style('height'),10) - margin.top - margin.bottom;

  var x = d3.scale.ordinal()
    .domain(d3.range(m))
    .rangeRoundBands([0, width], .08);

  var y = d3.scale.linear()
    .domain([0, yStackMax])
    .range([height, 0]);

  var color = d3.scale.linear()
    .domain([0, n - 1])
    .range(["#51C8A8", "#FFEE99"]);

  var yAxis = d3.svg.axis()
    .scale(y)
    .tickSize(0)
    .tickPadding(6)
    .orient("left");

  var svg = container.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var layer = svg.selectAll(".layer")
    .data(layers)
    .enter().append("g")
    .attr("class", "layer")
    .style("fill", function(d, i) { return color(i); });

  var rect = layer.selectAll("rect")
      .data(function(d) { console.log(d);return d; })
      .enter().append("a")
      .attr('xlink:href',function(d){return d.link})
      .append('rect')
      .attr('class', 'bar')
      .attr("x", function(d) { return x(d.x); })
      .attr("y", height)
      .attr("width", x.rangeBand())
      .attr("height", 0)
      .attr('data-ot', function(d) {return d.label})
      .attr('data-ot-stem', 'false')
      .attr('data-ot-delay', '0')
      .attr('data-ot-style', 'dark')
      .attr('data-ot-show-effect-duration', '0')
      .attr('data-ot-hide-effect-duration', '0')
      .attr('data-ot-tip-joint', 'bottom')
      .attr('data-ot-target-joint', 'bottom')
      .attr('data-ot-offset', '[' + parseInt(x.rangeBand() / 2,10)+ ',0]')
      .attr('data-ot-target', 'true')
    ;


  rect.transition()
    .delay(function(d, i) { return i * 10; })
    .attr("y", function(d) { return y(d.y0 + d.y); })
    .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });

  svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(20, 0)")
    .call(yAxis);

  d3.selectAll("input").on("change", function change() {
  });
}