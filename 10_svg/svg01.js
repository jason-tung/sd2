//      Jason Tung
//       SoftDev pd7
//       K10 -- Ask Circles [Change || Die]
//      2019-03-14

var pic = document.getElementById("vimage");
var clr = document.getElementById("but_clear");
var mve = document.getElementById("but_move");
var stop = document.getElementById("stop");

function crcle(x, y) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    if (moving) {
        c.setAttribute("xvelc", 2);
        c.setAttribute("yvelc", 2);
    }
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    c.addEventListener('click', function (e) {
        if (c.getAttribute("fill") === "red") {
            c.setAttribute("fill", "green");
        }
        else {
            c.parentNode.removeChild(c);
            crcle(Math.random() * 500, Math.random() * 500);
        }
        e.stopPropagation();
    });

    pic.appendChild(c);
}

pic.addEventListener('click', function (e) {
    var cds = {"x": e.offsetX, "y": e.offsetY};
    crcle(cds.x, cds.y);
});

var moving = false;
var kids = pic.children;
var requestID = 0;

mve.addEventListener('click', function () {
    if (!moving) {
        for (var i = 0; i < kids.length; i++) {
            kids[i].setAttribute("xvelc", 2);
            kids[i].setAttribute("yvelc", 2);
        }
        moving = true;
        anime();
    }
});

var hey;

function bounce(kid){
    var xcor = Number(kid.getAttribute("cx"));
    var ycor = Number(kid.getAttribute("cy"));
    var r = Number(kid.getAttribute("r"));
    if (xcor - r < 0 || xcor + r > 500){
        kid.setAttribute("xvelc", -1 * Number(kid.getAttribute("xvelc")));
    }
    if(ycor - r < 0 || ycor + r > 500){
        kid.setAttribute("yvelc",-1 * Number(kid.getAttribute("yvelc")));
    }
    kid.setAttribute("cx", Number(kid.getAttribute("xvelc")) + Number(kid.getAttribute("cx")));
    kid.setAttribute("cy", Number(kid.getAttribute("yvelc")) + Number(kid.getAttribute("cy")));
}

function anime() {
    window.cancelAnimationFrame(requestID);
    for (var i = 0; i < kids.length; i++) {
        kids[i].setAttribute("cx", Number(kids[i].getAttribute("xvelc")) + Number(kids[i].getAttribute("cx")));
        kids[i].setAttribute("cy", Number(kids[i].getAttribute("yvelc")) + Number(kids[i].getAttribute("cy")));
        bounce(kids[i]);
    }
    requestID = window.requestAnimationFrame(anime);
}

clr.addEventListener('click', function () {
    while (pic.lastChild) {
        pic.removeChild(pic.lastChild);
    }
    moving = false;
});

stop.addEventListener('click', function () {
    window.cancelAnimationFrame(requestID);
    moving = false;
});