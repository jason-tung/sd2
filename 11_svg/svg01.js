//      Jason Tung
//       SoftDev pd7
//       K #11: Ask Circles [Change || Die] …While On The Go
//      2019-03-18

var pic = document.getElementById("vimage");
var clr = document.getElementById("but_clear");
var mve = document.getElementById("but_move");
var stop = document.getElementById("stop");
var wat = document.getElementById("?");

function crcle(x, y) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("growing", 1);
    c.setAttribute("xvelc", 2);
    c.setAttribute("yvelc", 2);
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
        // for (var i = 0; i < kids.length; i++) {
        //     kids[i].setAttribute("xvelc", 2);
        //     kids[i].setAttribute("yvelc", 2);
        // }
        moving = true;
        anime();
    }
});

var hey;

function bounce(kid) {
    var xcor = Number(kid.getAttribute("cx"));
    var ycor = Number(kid.getAttribute("cy"));
    var r = Number(kid.getAttribute("r"));
    if (xcor - r < 0 || xcor + r > 500) {
        kid.setAttribute("xvelc", -1 * Number(kid.getAttribute("xvelc")));
    }
    if (ycor - r < 0 || ycor + r > 500) {
        kid.setAttribute("yvelc", -1 * Number(kid.getAttribute("yvelc")));
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
    window.cancelAnimationFrame(NewID);
    moving = false;
    animating = false;
});


var animating = false;

var NewID = 0;

function doStuff() {
    window.cancelAnimationFrame(NewID);
    for (var i = 0; i < kids.length; i++) {
        var rad = Number(kids[i].getAttribute("r"));
        var growing = Number(kids[i].getAttribute("growing"));
        if (Math.abs(rad - 20) >= 20) {
            growing = growing === 1 ? -1 : 1;
        }
        rad += growing;
        kids[i].setAttribute("r", rad);
        kids[i].setAttribute("growing", growing);
    }
    NewID = window.requestAnimationFrame(doStuff);
}

wat.addEventListener("click", function () {
    if (!animating) {
        animating = true;
        doStuff();

    }
});

