var btn = document.getElementById("clickbtn");
var resetclr = document.getElementById("resetclr");

resetclr.addEventListener("click", function(){
    document.getElementById("calculator").style.backgroundColor = `rgb(65, 135, 211)`;
    for(let i=0 ; i<8 ; i++){
        document.getElementsByClassName("set")[i].style.backgroundColor = `rgb(64, 224, 208, 0.521)`;
        document.getElementsByClassName("set")[i].style.color = `rgb(0,0,0)`;
    };
    for(let i=0 ; i<22 ; i++){
        document.getElementsByClassName("doc")[i].style.backgroundColor = `rgb(0,0,0)`;
        document.getElementsByClassName("doc")[i].style.color = `rgb(255,235,205)`;
    };
    for(let i=0 ; i<11 ; i++){
        document.getElementsByClassName("num")[i].style.backgroundColor = `rgb(255,245,238)`;
        document.getElementsByClassName("num")[i].style.color = `rgb(0,0,0)`;
    };
    for(let i=0 ; i<2 ; i++){
        document.getElementsByClassName("deact")[i].style.backgroundColor = `rgb(255,99,71)`;
        document.getElementsByClassName("deact")[i].style.color = `rgb(0,0,0)`;
    };
    for(let i=0 ; i<7 ; i++){
        document.getElementsByClassName("opera")[i].style.backgroundColor = `rgb(128,39,24)`;
        document.getElementsByClassName("opera")[i].style.color = `rgb(245,245,245)`;
    };
})

btn.addEventListener("click", function(){
    var bgcalccolor=document.getElementById("bgcalccolor").value;
    var bgsetccolor=document.getElementById("bgsetcolor").value;
    var bgdocccolor=document.getElementById("bgdoccolor").value;
    var bgnumcolor=document.getElementById("bgnumcolor").value;
    var bgdeactcolor=document.getElementById("bgdeactcolor").value;
    var bgoperacolor=document.getElementById("bgoperacolor").value;

    var calccolor=document.getElementById("calccolor").value;
    var setcolor=document.getElementById("setcolor").value;
    var doccolor=document.getElementById("doccolor").value;
    var numcolor=document.getElementById("numcolor").value;
    var deactcolor=document.getElementById("deactcolor").value;
    var operacolor=document.getElementById("operacolor").value;

    document.getElementById("calculator").style.backgroundColor = `rgb(${bgcalccolor})`;
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

