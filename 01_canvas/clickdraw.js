// azrael --- Jason Tung and Mohammed Uddin
// SoftDev2 pd7 
// K #01: ...and I want to Paint It Better
// 2019-01-31 

//state var for true rectangle or false dot
var rect = true;

//getting references to html elements
var c = document.getElementById("slate");
var w = c.getAttribute("width");
var h = c.getAttribute("height");
var ctx = c.getContext("2d");
var cbtn = document.getElementById("clear");
var tbtn = document.getElementById("toggle");

//set the fill colors now
ctx.fillStyle = "black";
ctx.strokeStyle = "black";

//add listened to clear button to wipe the page
cbtn.addEventListener('click', function () {
    ctx.clearRect(0, 0, w, h);
});

//adds event listener to toggle button to swap the state vars
tbtn.addEventListener('click', function () {
    rect ^= true;
});

//adds event listener to canvas to draw on it when theres a click
c.addEventListener('click', function (e) {
    //OFFSETX/OFFSETY --- gets mousex and mousey relative to the canvas rather than the webpage
    var cds = {"x":e.offsetX, "y":e.offsetY};
    if (rect) {
	//draw a 100 width 200 height rect at the mousex mousey
        ctx.fillRect(cds.x, cds.y, 100, 200);
    }
    else {
	//draw a radius 10 circle at mousex mousey
	//BEGINPATH() --- starts a new shape so it doesnt think we are drawing one polygon
        ctx.beginPath();
        ctx.ellipse(cds.x, cds.y, 10, 10, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        console.log("bazinga");
    }
});
