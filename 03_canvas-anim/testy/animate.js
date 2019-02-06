// azrael --- Jason Tung and Simon Tsui
// SoftDev2 pd7 
//K #03: They lock us in the tower whenever we get caught
// 2019-02-04

//getting references to html elements
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");

//initializing requisite variables
var requestID;
var radius = 0;
var growing = 1;

//set the fill colors now
ctx.fillStyle = "red";
ctx.strokeStyle = "black";

var drawCircle = function (x, y, r) {
    ctx.beginPath();
    ctx.ellipse(x, y, r, r, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
};

var clear = function () {
    ctx.clearRect(0, 0, c.width, c.height);
};

var time_table = [];
var t0;
var print_table = false;
var print_diagnostics = true;


var drawDot = function () {
    clear();
    if (Math.abs(radius - 45) >= 45) {
        growing = radius === 90 ? -1 : 1;
        if (!print_table) {
            t0 = performance.now();
        }
        if (radius === 0 && print_table) {
            if (time_table.length < 10) {
                time_table.push(performance.now() - t0);
                t0 = performance.now();
                console.log(time_table);
                requestID = window.requestAnimationFrame(drawDot);
            }
            else if (print_diagnostics) {
                var diagnostics_table = [];
                var predicted_table = [];
                for (var i = 0; i < 9; i++) {
                    diagnostics_table.push(time_table[i + 1] / time_table[i]);
                    //console.log(i + 2);
                    //console.log(i + 1);

                    predicted_table.push((i + 1) / (i + 2));
                    //console.log(predicted_table);
                }
                console.log("THESES ARE THE RATIOS FROM THE EXPERIMENT");
                console.log(diagnostics_table);
                console.log("THESES ARE THE PREDICTED RATIOS");
                console.log(predicted_table);
                print_diagnostics = false;
            }
        }
        print_table = true;

    }
    radius += growing;
    drawCircle(c.width / 2, c.height / 2, radius);
    requestID = window.requestAnimationFrame(drawDot);
};

var stopIt = function () {
    cancelAnimationFrame(requestID);
};

circle.addEventListener("click", drawDot);
stop.addEventListener("click", stopIt);

