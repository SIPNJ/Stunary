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
    // all calculator
    document.getElementById("calculator").style.backgroundColor = `rgb(189, 189, 189)`;
    // screen
    document.getElementById("display").style.backgroundColor = `rgb(74, 119, 63)`;
    document.getElementById("operadisp").style.backgroundColor = `rgb(74, 119, 63)`;
    document.getElementById("ansdisp").style.backgroundColor = `rgb(74, 119, 63)`;
    // text on screen
    document.getElementById("operadisp").style.color = `rgb()`;
    document.getElementById("ansdisp").style.color = `rgb()`;

    // setting color
    for(let i=0 ; i<7 ; i++){
        document.getElementsByClassName("set")[i].style.backgroundColor = `rgba(30, 143, 255, 0.651)`;
        document.getElementsByClassName("set")[i].style.color = `rgb(0,0,0)`;
    };
    // document color
    for(let i=0 ; i<22 ; i++){
        document.getElementsByClassName("doc")[i].style.backgroundColor = `black`;
        document.getElementsByClassName("doc")[i].style.color = `whitesmoke`;
    };
    // numkey color
    for(let i=0 ; i<11 ; i++){
        document.getElementsByClassName("num")[i].style.backgroundColor = `rgb(226, 223, 185)`;
        document.getElementsByClassName("num")[i].style.color = `rgb(50, 50, 50)`;
    };
    // deactive color
    for(let i=0 ; i<2 ; i++){
        document.getElementsByClassName("deact")[i].style.backgroundColor = `rgb(255,99,71)`;
        document.getElementsByClassName("deact")[i].style.color = `rgb(50, 50, 50)`;
    };
    // opera color
    for(let i=0 ; i<7 ; i++){
        document.getElementsByClassName("opera")[i].style.backgroundColor = `rgb(226, 223, 185)`;
        document.getElementsByClassName("opera")[i].style.color = `rgb(50, 50, 50)`;
    };
})

btn.addEventListener("click", function(){
    let bgcalccolor = document.getElementById("bgcalccolor").value;
    let bgdispcolor = document.getElementById("bgdispcolor").value;
    let bgsetccolor = document.getElementById("bgsetcolor").value;
    let bgdocccolor = document.getElementById("bgdoccolor").value;
    let bgnumcolor = document.getElementById("bgnumcolor").value;
    let bgdeactcolor = document.getElementById("bgdeactcolor").value;
    let bgoperacolor = document.getElementById("bgoperacolor").value;

    let operadispcolor = document.getElementById("operadispcolor").value;
    let ansdispcolor = document.getElementById("ansdispcolor").value;
    let setcolor = document.getElementById("setcolor").value;
    let doccolor = document.getElementById("doccolor").value;
    let numcolor = document.getElementById("numcolor").value;
    let deactcolor = document.getElementById("deactcolor").value;
    let operacolor = document.getElementById("operacolor").value;

    // all calculator
    document.getElementById("calculator").style.backgroundColor = `rgb(${bgcalccolor})`;
    // screen
    document.getElementById("display").style.backgroundColor = `rgb(${bgdispcolor})`;
    document.getElementById("operadisp").style.backgroundColor = `rgb(${bgdispcolor})`;
    document.getElementById("ansdisp").style.backgroundColor = `rgb(${bgdispcolor})`;
    // text on screen
    document.getElementById("operadisp").style.color = `rgb(${operadispcolor})`;
    document.getElementById("ansdisp").style.color = `rgb(${ansdispcolor})`;

    // setting button
    for(let i=0 ; i<7 ; i++){
        document.getElementsByClassName("set")[i].style.backgroundColor = `rgb(${bgsetccolor})`;
        document.getElementsByClassName("set")[i].style.color = `rgb(${setcolor})`;
    };
    // document color
    for(let i=0 ; i<22 ; i++){
        document.getElementsByClassName("doc")[i].style.backgroundColor = `rgb(${bgdocccolor})`;
        document.getElementsByClassName("doc")[i].style.color = `rgb(${doccolor})`;
    };
    // numkey color
    for(let i=0 ; i<11 ; i++){
        document.getElementsByClassName("num")[i].style.backgroundColor = `rgb(${bgnumcolor})`;
        document.getElementsByClassName("num")[i].style.color = `rgb(${numcolor})`;
    };
    // deactive color
    for(let i=0 ; i<2 ; i++){
        document.getElementsByClassName("deact")[i].style.backgroundColor = `rgb(${bgdeactcolor})`;
        document.getElementsByClassName("deact")[i].style.color = `rgb(${deactcolor})`;
    };
    // opera color
    for(let i=0 ; i<7 ; i++){
        document.getElementsByClassName("opera")[i].style.backgroundColor = `rgb(${bgoperacolor})`;
        document.getElementsByClassName("opera")[i].style.color = `rgb(${operacolor})`;
    };
})

