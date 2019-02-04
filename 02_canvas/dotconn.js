// azrael --- Jason Tung and Mohammed Uddin
// SoftDev2 pd7 
//K #02: Connecting the Dots
// 2019-01-31

//state var to see if this is the first dot
var isFirstDot = true;

//stores previous bubble
var xyconnect = [0, 0];

//getting references to html elements
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var cbtn = document.getElementById("clear");

//set the fill colors now
ctx.fillStyle = "red";
ctx.strokeStyle = "black";

//add listened to clear button to wipe the page
cbtn.addEventListener('click', function () {
    //ctx.closePath();
    //ctx.stroke();
    ctx.clearRect(0, 0, c.width, c.height);
    isFirstDot = true;
});

//adds event listener to canvas to draw on it when theres a click
c.addEventListener('click', function (e) {
    //OFFSETX/OFFSETY --- gets mousex and mousey relative to the event e rather than the webpage
    var cds = {"x": e.offsetX, "y": e.offsetY};
    if (isFirstDot) {
        isFirstDot = false;
    }
    else {
        //draw line men!!!
        ctx.beginPath();
        ctx.moveTo(cds.x, cds.y);
        ctx.lineTo(xyconnect[0], xyconnect[1]);
        ctx.stroke();
        //ctx.closePath();
        //DRAW OLD ELIPSE E E EE MEN LOLOL NOW WE CAN COVER LINE!!!
        ctx.beginPath();
        ctx.ellipse(xyconnect[0], xyconnect[1], 10, 10, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        //NOW UPDATE WHAT THE LAST CENTRER WAS L!!!!

    }
    //draw new ellipse....
    ctx.beginPath();
    ctx.ellipse(cds.x, cds.y, 10, 10, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    xyconnect = [cds.x, cds.y];
});
