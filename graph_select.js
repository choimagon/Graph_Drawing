canvas.addEventListener("click", (event)=>{
    console.log(`${event.offsetX} | ${event.offsetY} `);
    //x1+lineRange x2-lineRange
    let mainLine_m = (line_y2-line_y1)/(line_x2-line_x1);
    let angleLine_m = -1/mainLine_m;
    let lineRange = Math.sqrt(range**2/(angleLine_m**2+1));

    if(event.offsetX >= line_x1+lineRange && event.offsetX <=line_x2-lineRange){
        console.log("x값은 범위에 존재!");
    }
});