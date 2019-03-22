/**
 <!--
 jason tung
 sd pd 7
 K #14: Learning to Swim
 2019-03-21
 **/

//i made this myself. it's garbage data.

var json = {
    "a": {
        "age": 68,
        "cats": 103
    },
    "b": {
        "age": 69,
        "cats": 183
    },
    "c": {
        "age": 53,
        "cats": 139
    },
    "d": {
        "age": 51,
        "cats": 176
    },
    "e": {
        "age": 24,
        "cats": 128
    },
    "f": {
        "age": 28,
        "cats": 104
    },
    "g": {
        "age": 39,
        "cats": 153
    },
    "h": {
        "age": 53,
        "cats": 143
    },
    "i": {
        "age": 51,
        "cats": 176
    },
    "j": {
        "age": 45,
        "cats": 190
    },
    "k": {
        "age": 42,
        "cats": 184
    },
    "l": {
        "age": 49,
        "cats": 150
    },
    "m": {
        "age": 21,
        "cats": 119
    },
    "n": {
        "age": 54,
        "cats": 138
    },
    "o": {
        "age": 25,
        "cats": 111
    },
    "p": {
        "age": 22,
        "cats": 190
    },
    "q": {
        "age": 49,
        "cats": 191
    },
    "r": {
        "age": 59,
        "cats": 197
    },
    "s": {
        "age": 27,
        "cats": 166
    },
    "t": {
        "age": 71,
        "cats": 184
    },
    "u": {
        "age": 64,
        "cats": 117
    },
    "v": {
        "age": 30,
        "cats": 143
    },
    "w": {
        "age": 20,
        "cats": 134
    },
    "x": {
        "age": 26,
        "cats": 160
    },
    "y": {
        "age": 58,
        "cats": 193
    },
    "z": {
        "age": 58,
        "cats": 198
    }
};

ages = [];
cats = [];

for (var person in json) {
    console.log(person);
    ages.push(json[person]['age']);
    cats.push(json[person]['cats']);
}
const d3 = window.d3;

var margin = {top: 20, right: 15, bottom: 60, left: 60}
    , width = 500 - margin.left - margin.right
    , height = 500 - margin.top - margin.bottom;

var main = d3.select('body').append("svg").attr('width', 500).attr('height', 500).append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'main');
var xscale = d3.scaleLinear()
    .domain([
        0,
        d3.max(ages)
    ])
    .range([0, 500]);
var yscale = d3.scaleLinear()
    .domain([
        0,
        d3.max(cats)
    ])
    .range([500, 0]);

// X-axis
var xAxis = d3.axisBottom(xscale)

// Y-axis
var yAxis = d3.axisLeft(yscale)

main.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('class', 'main axis date')
    .call(xAxis);

main.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('class', 'main axis date')
    .call(yAxis);

g = main.append('g');


g.selectAll("scatter-dots")
    .data(cats)  // using the values in the ydata array
    .enter().append("svg:circle")  // create a new circle for each value
    .attr("cy", function (d) {
        return yscale(d);
    }) // translate y value to a pixel
    .attr("cx", function (d, i) {
        return xscale(ages[i]);
    }) // translate x value
    .attr("r", 10) // radius of circle
    .style("opacity", 0.6)
    .on('mouseover', function () {
        d3.select(this)
            .transition()
            .duration(500)
            .attr('r', 17)
            .attr('stroke-width', 3)
            .style("opacity", 0.9)
            .style('fill', "rgb(17, 96, 224)")
    })
    .on('mouseout', function () {
        d3.select(this)
            .transition()
            .duration(500)
            .attr('r', 10)
            .attr('stroke-width', 1)
            .style("opacity", 0.6)
            .style('fill', "rgb(66, 149, 244)")
    })
    .style('fill', "rgb(66, 149, 244)")
    .append("title")
    .text(function (d, i) {
        return String(ages[i]) + ", " + String(d);
    })
;

//
// var circles = svg.selectAll('circle')
//     .data(cats)
//     .enter()
//     .append('circle')
//     .attr('cx', function (d) {
//         return xscale(ages)
//     })
//     .attr('cy', function (d) {
//         return yscale(cats)
//     })
//     .attr('r', '10')
//     .attr('stroke', 'black')
//     .attr('stroke-width', 1)
//     .attr('fill', 'red')
//     .on('mouseover', function () {
//         d3.select(this)
//             .transition()
//             .duration(500)
//             .attr('r', 20)
//             .attr('stroke-width', 3)
//     })
//     .on('mouseout', function () {
//         d3.select(this)
//             .transition()
//             .duration(500)
//             .attr('r', 10)
//             .attr('stroke-width', 1)
//     })
//     .append('title') // Tooltip
// // .text(function (d) {
// //     return 'hi'
// // })
//
// // X-axis
// svg.append('g')
//     .attr('class', 'axis')
//     .attr('transform', 'translate(0,' + 500 + ')')
//     .call(xAxis)
//     .append('text') // X-axis Label
//     .attr('class', 'label')
//     .attr('y', -10)
//     .attr('x', 500)
//     .attr('dy', '.71em')
//     .style('text-anchor', 'end')
//     .text('Annualized Standard Deviation')
// // Y-axis
// svg.append('g')
//     .attr('class', 'axis')
//     .call(yAxis)
//     .append('text') // y-axis Label
//     .attr('class', 'label')
//     .attr('transform', 'rotate(-90)')
//     .attr('x', 0)
//     .attr('y', 5)
//     .attr('dy', '.71em')
//     .style('text-anchor', 'end')
//     .text('Annualized Return')