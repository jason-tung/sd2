//      Jason Tung
//      SoftDev pd7
//      K09 -- basic SVG work
//      2019-03-13

var pic = document.getElementById("vimage");
var clr = document.getElementById("but_clear");

var isFirstDot = true;
var xyconnect = [0, 0];

function crcle(x, y) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
}

function line(x1, y1, x2, y2) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "line");
    c.setAttribute("x1", x1);
    c.setAttribute("y1", y1);
    c.setAttribute("x2", x2);
    c.setAttribute("y2", y2);
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
}

pic.addEventListener('click', function (e) {
    var cds = {"x": e.offsetX, "y": e.offsetY};
    if (isFirstDot) {
        isFirstDot = false;
    }
    else {
        line(cds.x, cds.y, xyconnect[0], xyconnect[1]);
        crcle(xyconnect[0], xyconnect[1]);
    }
    crcle(cds.x, cds.y);
    xyconnect = [cds.x, cds.y];
});

clr.addEventListener('click', function () {
    while (pic.lastChild) {
        pic.removeChild(pic.lastChild);
    }
    isFirstDot = true;
});