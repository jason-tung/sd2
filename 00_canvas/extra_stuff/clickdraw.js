// Jason Tung 
// SoftDev2 pd7 
// K0  I see a Red Door 
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
var mode = document.getElementById("mode");

//fx to get real coord of mouse as a json
function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

//add listened to clear button to wipe the page
cbtn.addEventListener('click', function () {
    ctx.clearRect(0, 0, w, h);
});

//adds event listener to toggle button to swap the state vars
tbtn.addEventListener('click', function () {
    rect ^= true;
    mode.innerHTML = rect ? "rectangle" : "dot"
});

//adds event listener to canvas to draw on it when theres a click
c.addEventListener('click', function (e) {
    var cds = getMousePos(c, e);
    var r_color = getRandomColor();
    ctx.fillStyle = r_color;
    if (rect) {
        ctx.fillRect(cds.x, cds.y, 100, 200);
    }
    else {
        ctx.strokeStyle = r_color;
        ctx.beginPath();
        ctx.ellipse(cds.x, cds.y, 10, 10, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        console.log("bazinga");
    }
});
