let clock = document.getElementById("clock");
let clockctx = clock.getContext("2d");
let pradius = clock.height/2;
let radius = pradius*0.9;

// let grad = clockctx.createLinearGradient(0, 0, 0, 200);
// grad.addColorStop(0.9, 'blue');
// grad.addColorStop(1, "white");

clockctx.translate(pradius*2, pradius);

function drawPieSlice(clockctx, radius, startAngle, endAngle, color){
    clockctx.fillStyle = color;
    clockctx.beginPath();
    clockctx.arc(0, 0, radius, startAngle, endAngle);
    clockctx.closePath();
    clockctx.fill(); 
}

function drawNumbers(clockctx, radius, txtclr){
    let ang;
    let num;
    clockctx.fillStyle = txtclr;
    clockctx.font = radius * 0.15 + "px arial";
    clockctx.textBaseline = "middle";
    clockctx.textAlign = "center";
    for(num = 1; num < 13; num++){
        ang = num * Math.PI / 6;
        clockctx.rotate(ang);
        clockctx.translate(0, -radius * 0.86);
        clockctx.rotate(-ang);
        clockctx.fillText(String(num), 0, 0);
        clockctx.rotate(ang);
        clockctx.translate(0, radius * 0.86);
        clockctx.rotate(-ang);
    }
}

function drawTime(clockctx, radius){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    //hour
    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    makeHand(clockctx, hour, radius*0.5, radius*0.07, `#c3c3c3`);
    // makeHand(clockctx, hour, radius*0.5, radius*0.07);
    //minute
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    makeHand(clockctx, minute, radius*0.7, radius*0.07, `rgb(255, 255, 255)`);
    // makeHand(clockctx, minute, radius*0.8, radius*0.07);
    // second
    second = (second*Math.PI/30);
    makeHand(clockctx, second, radius*0.8, radius*0.02, `rgb(255, 73, 73)`);
    // makeHand(clockctx, second, radius*0.9, radius*0.02);
}

function makeHand(clockctx, posi, length, width, color){
    clockctx.beginPath();
    clockctx.lineWidth = width;
    clockctx.lineCap = "round";
    clockctx.moveTo(0,0);
    clockctx.rotate(posi);
    clockctx.lineTo(0, -length);
    clockctx.stroke();
    clockctx.rotate(-posi);
    clockctx.strokeStyle = color;
    clockctx.stroke();
}

function drawClock(){
    drawPieSlice(clockctx, radius+5, 0, 2 * Math.PI, `grey`); // Clock border
    drawPieSlice(clockctx, radius, 0, 2 * Math.PI, `black`); // Clock
    drawPieSlice(clockctx, 5, 0, 2 * Math.PI, `floralwhite`); // Point
    drawNumbers(clockctx, radius, "floralwhite"); // Number
    drawTime(clockctx, radius); // Hands
}

setInterval(function(){drawClock()}, 1);