// color slider picker

var redval = document.getElementById("redval");
var greenval = document.getElementById("greenval");
var blueval = document.getElementById("blueval");

var slidered = document.getElementById("slideRed");
var slidegreen = document.getElementById("slideGreen");
var slideblue = document.getElementById("slideBlue");

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


// color changer

var btn = document.getElementById("clickbtn");
var resetclr = document.getElementById("resetclr");

resetclr.addEventListener("click", function(){
    document.getElementById("calculator").style.backgroundColor = `rgb(189, 189, 189)`;
    for(let i=0 ; i<8 ; i++){
        document.getElementsByClassName("set")[i].style.backgroundColor = `gba(30, 143, 255, 0.651)`;
        document.getElementsByClassName("set")[i].style.color = `rgb(0,0,0)`;
    };
    for(let i=0 ; i<22 ; i++){
        document.getElementsByClassName("doc")[i].style.backgroundColor = `black`;
        document.getElementsByClassName("doc")[i].style.color = `whitesmoke`;
    };
    for(let i=0 ; i<11 ; i++){
        document.getElementsByClassName("num")[i].style.backgroundColor = `rgb(226, 223, 185)`;
        document.getElementsByClassName("num")[i].style.color = `rgb(50, 50, 50)`;
    };
    for(let i=0 ; i<2 ; i++){
        document.getElementsByClassName("deact")[i].style.backgroundColor = `rgb(255,99,71)`;
        document.getElementsByClassName("deact")[i].style.color = `rgb(50, 50, 50)`;
    };
    for(let i=0 ; i<7 ; i++){
        document.getElementsByClassName("opera")[i].style.backgroundColor = `rgb(226, 223, 185)`;
        document.getElementsByClassName("opera")[i].style.color = `rgb(50, 50, 50)`;
    };
})

btn.addEventListener("click", function(){
    var bgcalccolor=document.getElementById("bgcalccolor").value;
    var bgdispcolor=document.getElementById("bgdispcolor").value;
    var bgsetccolor=document.getElementById("bgsetcolor").value;
    var bgdocccolor=document.getElementById("bgdoccolor").value;
    var bgnumcolor=document.getElementById("bgnumcolor").value;
    var bgdeactcolor=document.getElementById("bgdeactcolor").value;
    var bgoperacolor=document.getElementById("bgoperacolor").value;

    var operadispcolor=document.getElementById("operadispcolor").value;
    var ansdispcolor=document.getElementById("ansdispcolor").value;
    var setcolor=document.getElementById("setcolor").value;
    var doccolor=document.getElementById("doccolor").value;
    var numcolor=document.getElementById("numcolor").value;
    var deactcolor=document.getElementById("deactcolor").value;
    var operacolor=document.getElementById("operacolor").value;

    document.getElementById("calculator").style.backgroundColor = `rgb(${bgcalccolor})`;
    document.getElementById("realdisp").style.backgroundColor = `rgb(${bgdispcolor})`;
    document.getElementById("operadisp").style.backgroundColor = `rgb(${bgdispcolor})`;
    document.getElementById("ansdisp").style.backgroundColor = `rgb(${bgdispcolor})`;
    document.getElementById("operadisp").style.color = `rgb(${operadispcolor})`;
    document.getElementById("ansdisp").style.color = `rgb(${ansdispcolor})`;

    for(let i=0 ; i<8 ; i++){
        document.getElementsByClassName("set")[i].style.backgroundColor = `rgb(${bgsetccolor})`;
        document.getElementsByClassName("set")[i].style.color = `rgb(${setcolor})`;
    };
    for(let i=0 ; i<22 ; i++){
        document.getElementsByClassName("doc")[i].style.backgroundColor = `rgb(${bgdocccolor})`;
        document.getElementsByClassName("doc")[i].style.color = `rgb(${doccolor})`;
    };
    for(let i=0 ; i<11 ; i++){
        document.getElementsByClassName("num")[i].style.backgroundColor = `rgb(${bgnumcolor})`;
        document.getElementsByClassName("num")[i].style.color = `rgb(${numcolor})`;
    };
    for(let i=0 ; i<2 ; i++){
        document.getElementsByClassName("deact")[i].style.backgroundColor = `rgb(${bgdeactcolor})`;
        document.getElementsByClassName("deact")[i].style.color = `rgb(${deactcolor})`;
    };
    for(let i=0 ; i<7 ; i++){
        document.getElementsByClassName("opera")[i].style.backgroundColor = `rgb(${bgoperacolor})`;
        document.getElementsByClassName("opera")[i].style.color = `rgb(${operacolor})`;
    };
})

