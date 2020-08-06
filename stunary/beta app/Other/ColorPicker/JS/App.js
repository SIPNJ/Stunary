// color slider picker

let redval = document.getElementById("redval");
let greenval = document.getElementById("greenval");
let blueval = document.getElementById("blueval");

let slidered = document.getElementById("slideRed");
let slidegreen = document.getElementById("slideGreen");
let slideblue = document.getElementById("slideBlue");

slidered.oninput = function(){
    redval.innerHTML = slidered.value;
    document.getElementById("resclr").style.backgroundColor = `rgb(${slidered.value},${slidegreen.value},${slideblue.value})`;
    document.getElementById("Rclr").style.backgroundColor = `rgb(${slidered.value},0,0)`;
}
slidegreen.oninput = function(){
    greenval.innerHTML = slidegreen.value;
    document.getElementById("resclr").style.backgroundColor = `rgb(${slidered.value},${slidegreen.value},${slideblue.value})`;
    document.getElementById("Gclr").style.backgroundColor = `rgb(0,${slidegreen.value},0)`;
}
slideblue.oninput = function(){
    blueval.innerHTML = slideblue.value;
    document.getElementById("resclr").style.backgroundColor = `rgb(${slidered.value},${slidegreen.value},${slideblue.value})`;
    document.getElementById("Bclr").style.backgroundColor = `rgb(0,0,${slideblue.value})`;
}

