/*var bardata = [100, 200, 102, 12, 211];

var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', '#C9D7D6')
    .selectAll('rect').data(bardata)
    .enter().append('rect')
        .style('fill', '#C61C6F')
        .attr('width', barWidth)
        .attr('height', function(d) {
            return d;
        })
        .attr('x', function(d,i) {
            return i * (barWidth + barOffset);
        })
        .attr('y', function(d) {
            return height - d;
        })
    */
    d3.jason("myData.jason", function(data) {
    var canvas = d3.select("body").append("svg")
      .attr("width", 500)
      .attr("height",500)

      canvas.selectAll("rect")
        .data(data)
        .enter()
          .append("rect")
          .attr("width", function(d) {return d.age * 10;})
          .attr("height", 50)
          .attr("y", function(d, i) {return i * 50;})
          .attr("fill", "blue")
  })