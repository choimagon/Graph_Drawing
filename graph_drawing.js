const canvas = document.querySelector("#main-canvas");
const ctx = canvas.getContext("2d");
const mousePositionDocument = document.querySelector("#mouse-position");
const linecreatebtn = document.querySelector("#line-create-btn");

//reload canvas
function reloadCanvas(){
    ctx.clearRect(0,0,700,700);
}

//mouse pointer check
function mousePositon(event){ 
    const positionXY = `     X : ${event.offsetX} | Y : ${event.offsetY}`;
    mousePositionDocument.innerHTML = positionXY;
}
canvas.addEventListener("mousemove", mousePositon);

//drawing line ↧

//variable create
let linemove = false;
let line_x1=0;
let line_y1=0;
let line_x2=0;
let line_y2=0;

//support fuction
function arcDraw(x, y){
    ctx.beginPath();
    ctx.arc(x, y,8,0,Math.PI*2);
    ctx.strokeStyle = "red";
    ctx.stroke();
}

function lineDraw(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
}

//main fuction
function lineCreate(){
    console.log("lineCreate Fuction");
    linemove = false;
    canvas.addEventListener("click", (e)=>{
        line_x1 = e.offsetX;
        line_y1 = e.offsetY;
        arcDraw(line_x1, line_y1);
        canvas.addEventListener("mousemove", (e)=>{
            if(linemove == false){
                line_x2 = e.offsetX;
                line_y2 = e.offsetY;
                reloadCanvas();
                arcDraw(line_x1, line_y1);
                ctx.moveTo(line_x1, line_y1);
                ctx.lineTo(line_x2, line_y2);
                ctx.strokeStyle = "red";
                ctx.stroke();
                arcDraw(line_x2, line_y2);
            }
        });
        canvas.addEventListener("click", (e)=>{
            linemove = true;
            reloadCanvas();
            lineDraw(line_x1, line_y1, line_x2, line_y2);
            lineDateWrite(line_x1, line_y1, line_x2, line_y2);
        }, {once:true});
    },{once:true});
}

linecreatebtn.addEventListener("click", lineCreate);
