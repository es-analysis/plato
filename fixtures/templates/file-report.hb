
<html>
<head>
  <script>
    var reports = {{ stringify reports }};
  </script>
  {{#each scripts}}
    <!-- {{name}} : {{path}} --> 
    <script src="{{name}}"></script>
  {{/each}}
</head>
<body>
  <div>
    {{ widgetA reports.reportA }}
  </div>
</body>
</html>
