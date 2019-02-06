// azrael --- Jason Tung and Simon Tsui
// SoftDev2 pd7 
//K #03: They lock us in the tower whenever we get caught
// 2019-02-04

//getting references to html elements
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");

//initializing requisite variables
var requestID;
var radius = 0;
var growing = 1;
var randStart = Math.random();
var dvdVeloc = [randStart, Math.sqrt(1 - randStart * randStart)];

//set the fill colors now
ctx.fillStyle = "red";
ctx.strokeStyle = "black";

var drawCircle = function (x, y, r) {
    ctx.beginPath();
    ctx.ellipse(x, y, r, r, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
};

//drawCircle(c.width / 2, c.height / 2, radius);

var clear = function () {
    ctx.clearRect(0, 0, c.width, c.height);
};

var drawDot = function () {
    window.cancelAnimationFrame(requestID);
    clear();
    if (Math.abs(radius - 45) >= 45) {
        growing = radius == 90 ? -1 : 1;
    }
    //console.log(growing);
    radius += growing;
    drawCircle(c.width / 2, c.height / 2, radius);
    requestID = window.requestAnimationFrame(drawDot);
};

var moveDvd = function(){
    
};

var startDvd = function(){
    window.cancelAnimationFrame(requestID);
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    ctx.drawImage(logo, Math.random() * c.width, Math.random() * c.height, 100, 100);
};

var stopIt = function () {
    console.log("cancled");
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

circle.addEventListener("click", drawDot);
stop.addEventListener("click", stopIt);
dvd.addEventListener("click", startDvd);

