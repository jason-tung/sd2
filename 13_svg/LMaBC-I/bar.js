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

var setdata =document.getElementById("setdata");
var setchart =document.getElementById("setchart");
var setwidth =document.getElementById("setwidth");
var settext =document.getElementById("settext");
var setscale =document.getElementById("setscale");

var whatisdata = document.getElementById("whatisdata");
var whatisrescale = document.getElementById("whatisrescale");

var data = [];

setdata.addEventListener('click',function(){
    var testy = 0;
    data = [];
    for (var i = 0; i < 5; i++){
        testy += 2 + Math.round(Math.random() * 12);
        data.push(testy);
    }
    whatisdata.innerHTML = "Data: [" + String(data) + "]";
});

var children = d3.select(".chart").selectAll("div");

setchart.addEventListener('click',function(){
    children = children.data(data).enter().append("div");
});
setscale.addEventListener('click',function(){
    x = d3.scaleLinear().domain([0, d3.max(data)]).range([0, 10 * d3.max(data)]);
    var st = "";
    for (var i = 0; i < data.length; i++){
        st+=x(data[i]) + ",";
    }
    st = st.substring(0, st.length - 1);
    whatisrescale.innerHTML = "Rescale: [" + st + "]";
});
setwidth.addEventListener('click',function(){
    children = children.style("width", function(e){return x(e) + "px";});
});
settext.addEventListener('click',function(){
    children = children.text(function(e){return e;});
});


