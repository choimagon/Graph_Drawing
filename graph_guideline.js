const guideLineText = document.querySelector("#guideline-text");

// let lineDate = "";

function guidePointer(x, y, color){
    ctx.beginPath();
    ctx.arc(x, y,3,0,Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
}

function guideLine(x1, y1, x2, y2, color){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.setLineDash([3]);
    ctx.stroke();
}

function parallelLine(return_x, m, x, y){
    return return_x*m-x*m+y;
} //y값을 편하게 구하려는 방법임

const range = 20;

function lineDateWrite(x1, y1, x2, y2){

    let mainLine_m = (y2-y1)/(x2-x1);
    let angleLine_m = -1/mainLine_m;
    let lineRange = Math.sqrt(range**2/(angleLine_m**2+1));

    //각 선의 끝점
    guidePointer(x1, y1, "red");
    guidePointer(x2, y2, "red");
    guidePointer(x1+lineRange, (x1+lineRange)*angleLine_m-angleLine_m*x1+y1, "blue");
    guidePointer(x1-lineRange, (x1-lineRange)*angleLine_m-angleLine_m*x1+y1, "red"); //각 끝
    guidePointer(x2+lineRange, (x2+lineRange)*angleLine_m-angleLine_m*x2+y2, "red"); //각 끝
    guidePointer(x2-lineRange, (x2-lineRange)*angleLine_m-angleLine_m*x2+y2, "blue");
    //직각의 방정식 2개
    guideLine(x1+lineRange, (x1+lineRange)*angleLine_m-angleLine_m*x1+y1,
    x1-lineRange, (x1-lineRange)*angleLine_m-angleLine_m*x1+y1, "black");
    guideLine(x2+lineRange, (x2+lineRange)*angleLine_m-angleLine_m*x2+y2,
    x2-lineRange, (x2-lineRange)*angleLine_m-angleLine_m*x2+y2, "black");
    //범위 방정식 2개 (함수로 만들자)
    guideLine(x1+lineRange, (x1+lineRange)*angleLine_m-angleLine_m*x1+y1,
    x2+lineRange, (x2+lineRange)*angleLine_m-angleLine_m*x2+y2, "red");
    guideLine(x1-lineRange, (x1-lineRange)*angleLine_m-angleLine_m*x1+y1,
    x2-lineRange, (x2-lineRange)*angleLine_m-angleLine_m*x2+y2, "blue");
    //가운데 범위 표현하는 직선의 방정식
    guideLine(x1+lineRange, ((x1+lineRange)*angleLine_m-angleLine_m*x1+y1)+100,
    x1+lineRange, ((x1+lineRange)*angleLine_m-angleLine_m*x1+y1)-100, "black");
    guideLine(x2-lineRange, ((x2-lineRange)*angleLine_m-angleLine_m*x2+y2)+100,
    x2-lineRange, ((x2-lineRange)*angleLine_m-angleLine_m*x2+y2)-100, "black");
    //접선의 점 표현
    guidePointer(x1+lineRange,
    (x1+lineRange)*mainLine_m-mainLine_m*(x1-lineRange)+((x1-lineRange)*angleLine_m-angleLine_m*x1+y1),
    "black");
    guidePointer(x2-lineRange,
    (x2-lineRange)*mainLine_m-mainLine_m*(x2+lineRange)+((x2+lineRange)*angleLine_m-angleLine_m*x2+y2),
    "black");

    console.log("=============");
    console.log(`기울기 : ${mainLine_m}`);
    console.log(`직선의 방정식 : y = ${mainLine_m}x + ${-mainLine_m*x1+y1}`);
    console.log("=============");
    console.log(`직선의 방정식의 직각인 두 직선의 방정식:`);
    console.log(`직선의 방정식 : y = ${angleLine_m}x + ${-angleLine_m*x1+y1}`);
    console.log(`직선의 방정식 : y = ${angleLine_m}x + ${-angleLine_m*x2+y2}`);
    console.log("");
}