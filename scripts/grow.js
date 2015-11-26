var margin = {top: 20, right: 55, bottom: 30, left: 40},
          width  = 1000 - margin.left - margin.right,
          height = 500  - margin.top  - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .rangeRound([height, 0]);

var line = d3.svg.line()
    .interpolate("cardinal")
    .x(function (d) { return x(d.label) + x.rangeBand() / 2; })
    .y(function (d) { return y(d.value); });

var color = d3.scale.ordinal()
    .range(["#001c9c","#101b4d","#475003","#9c8305","#d3c47c"]);

var svg = d3.select("body").append("svg")
    .attr("width",  width  + margin.left + margin.right)
    .attr("height", height + margin.top  + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        d3.csv("data/growthdata.csv", function (error, data) {
        console.log("Inital Data", data);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");


var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");  


 var labelVar = 'Month';
        var varNames = d3.keys(data[0])
            .filter(function (key) { return key !== labelVar;});
        color.domain(varNames);


var seriesData = varNames.map(function (name) {
return {
  name: name,
  values: data.map(function (d) {
    return {name: name, label: d[labelVar], value: +d[name]};
  })
};
});
console.log("seriesData", seriesData);


x.domain(data.map(function (d) { return d.Month; }));
y.domain([
  d3.min(seriesData, function (c) { 
    return d3.min(c.values, function (d) { return d.value; });
  }),
  d3.max(seriesData, function (c) { 
    return d3.max(c.values, function (d) { return d.value; });
  })
]);


var series = svg.selectAll(".series")
    .data(seriesData)
    .enter().append("g")
    .attr("class", "series");
    


series.append("path")
  .attr("class", "line")
  .attr("d", function (d) { return line(d.values); })
  .style("stroke", function (d) { return color(d.name); })
  .style("stroke-width", "2px")
  .style("fill", "none");





 var legend = svg.selectAll(".legend")
            .data(varNames.slice().reverse())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function (d, i) { 
              return "translate(55," + i * 20 + ")"; 
            });

        legend.append("rect")
            .attr("x", width - 35)
            .attr("y", 12)
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", color)
            .style("stroke", "grey");

        legend.append("text")
            .attr("x", width - 40)
            .attr("y", 16)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) { return d; });


svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
    
 
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Growth of $100");



});
