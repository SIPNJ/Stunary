let forbidcorona = document.getElementById("forbidcorona")
let ctfb = forbidcorona.getContext("2d");

// nah 2 js -- ht px 

function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill(); 
}

function drawLine(ctx, startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}

function drawRec(ctx, Ax, Ay, Bx, By, Cx, Cy, Dx, Dy, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(Ax,Ay);
    ctx.lineTo(Bx,By);
    ctx.lineTo(Cx,Cy);
    ctx.lineTo(Dx,Dy);
    ctx.lineTo(Ax,Ay);
    ctx.fill();
    ctx.closePath();
}

function drawPoint(ctx, centerX, centerY, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, 1, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill(); 
}


drawPieSlice(ctfb, 150, 75, 70, 0, 2*Math.PI,'#FF0000');
drawPieSlice(ctfb, 150, 75, 50, 0, 2*Math.PI, "#FFFFFF");
// drawRec(ctfb, 130, 120.83, 120, 115, 170, 29.17, 180, 35 ,`#FF0000`);
drawRec(ctfb, 119, 33, 107.57, 48.55, 180.06, 115.76, 193, 102 ,`#FF0000`);
//             ax      ay      bx      by   cx    cy     dx   dy


// let myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function(){
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]); 
//     }
// }

