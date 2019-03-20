/**
 * Jason Tung
SoftDev2 pd7
K #13: Diving Deeper Into D3
2019-03-20
 *
    <!--------------------------------
    Entering the following commands via console will 
    incrementally re-create your hardcoded chart...
    //Init your data:
    var data = [4, 8, 15, 16, 23, 42];
    //Select your chart.
    var chart = d3.select(".chart");
    //Prepare for data join.
    var bar = chart.selectAll("div");
    (this defines selection to which you will join data)
    //Join your data.
    var barUpdate = bar.data(data);
    //Instantiate new elements by appending to the “enter selection.”
    var barEnter = barUpdate.enter().append("div");
    //Set width of each bar proportional to its data value.
    barEnter.style("width", function(d) {
    return d * 10 + "px"; });
    //Label each bar.
    barEnter.text(function(d) { return d; });
**/

const d3 = window.d3;

var data = [4, 8, 15, 16, 23, 42];

var width = 420,
    barHeight = 20;

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });
