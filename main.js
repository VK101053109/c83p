canvas = document.getElementById("myCanvas");
pen = canvas.getContext("2d");
var mouseevent="";
pen_color = "black";
line_width = 1;
var ptx, pty;
var px,py;

if (screen.width < 992) {
    canvas.width = screen.width - 70;
    canvas.height = screen.height - 100;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_ts);

function my_ts(e) {
    pen_color = document.getElementById("color").value;
    line_width = document.getElementById("lw").value;
    console.log("touchstart");
    ptx = e.touches[0].clientX - canvas.offsetLeft;
    pty = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_tm);

function my_tm(e) {
    ctx = e.touches[0].clientX - canvas.offsetLeft;
    cty = e.touches[0].clientY - canvas.offsetTop;
    pen.beginPath();
    pen.strokeStyle = pen_color;
    pen.lineWidth = line_width;
    pen.moveTo(ptx, pty);
    pen.lineTo(ctx, cty);
    pen.stroke();

    ptx = ctx;
    pty = cty;
}


canvas.addEventListener("mousedown", my_md);

function my_md(e){
    pen_color=document.getElementById("color").value;
    line_width=document.getElementById("lw").value;
    mouseevent="mousedown";
}

canvas.addEventListener("mouseup",my_mu);

function my_mu(e){
    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",my_ml);

function my_ml(e){
    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove",my_mm);

function my_mm(e){
    cx=e.clientX-canvas.offsetLeft;
    cy=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        pen.beginPath();
        pen.strokeStyle=pen_color;
        pen.lineWidth=line_width;
        pen.moveTo(px,py);
        pen.lineTo(cx,cy);
        pen.stroke();

    }
    px=cx;
    py=cy;
}


function cleararea() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
}