// color slider picker

let redval = document.getElementById("redval");
let greenval = document.getElementById("greenval");
let blueval = document.getElementById("blueval");

let slidered = document.getElementById("slideRed");
let slidegreen = document.getElementById("slideGreen");
let slideblue = document.getElementById("slideBlue");

slidered.oninput = function(){
    redvalput.value = slidered.value;
    document.getElementById("resclr").style.backgroundColor = `rgb(${slidered.value*8},${slidegreen.value*21},${slideblue.value*0.064})`;
    document.getElementById("Rclr").style.backgroundColor = `rgb(${slidered.value*8},0,0)`;
}
slidegreen.oninput = function(){
    greenvalput.value = slidegreen.value;
    document.getElementById("resclr").style.backgroundColor = `rgb(${slidered.value*8},${slidegreen.value*21},${slideblue.value*0.064})`;
    document.getElementById("Gclr").style.backgroundColor = `rgb(0,${slidegreen.value*21},0)`;
}
slideblue.oninput = function(){
    bluevalput.value = slideblue.value;
    document.getElementById("resclr").style.backgroundColor = `rgb(${slidered.value*8},${slidegreen.value*21},${slideblue.value*0.064})`;
    document.getElementById("Bclr").style.backgroundColor = `rgb(0,0,${slideblue.value*0.064})`;
}

// time value

let redvalput = document.getElementById("redvalput");
let greenvalput = document.getElementById("greenvalput");
let bluevalput = document.getElementById("bluevalput");

redvalput.value = 31;
greenvalput.value = 1;
bluevalput.value = 0;
