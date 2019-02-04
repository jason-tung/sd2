// azrael --- Jason Tung and Simon Tsui
// SoftDev2 pd7 
//K #03: <NAME TBD>
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

var drawCircle = function(x,y,r){
    ctx.beginPath();
    ctx.ellipse(x, y, r, r, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

var clear = function(){
    ctx.clearRect(0, 0, c.width, c.height);
};

var drawDot = function(){
    clear();
    drawCircle(c.width/2,c.height/2,radius);
    if(requestID % 180 == 0){
	growing = growing == -1 ? 1 : -1;
	console.log(growing);
    }
    radius += growing;
    requestID = window.requestAnimationFrame(drawDot);
};

var stopIt = function(){
    console.log(requestID);
    cancelAnimationFrame(requestID);
};

circle.addEventListener("click",drawDot);
stop.addEventListener("click", stopIt);

