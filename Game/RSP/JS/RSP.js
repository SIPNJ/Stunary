var rock = `✊`;
var scissor = `✌️`;
var paper = `✋`;
var respoin = 0;
var ans;
var disp;
// var disp = document.getElementById("display");
var hess = document.getElementById("youans");
var helo = document.getElementById("hell");
function aabs(comp){
    ans = comp.innerHTML;
    console.log(ans);
    compare();
    refreshgame();
}
function refreshgame(){
    var rannum = Math.round(Math.random()*3+0.5);
    if (rannum == 1){
        // document.getElementById("display").innerHTML = rock;
        disp = rock;
    } else if (rannum == 2){
        // document.getElementById("display").innerHTML = scissor;
        disp = scissor;
    } else if (rannum == 3){
        // document.getElementById("display").innerHTML = paper;
        disp = paper;
    }
    console.log(disp);
}
function compare(){
    if (disp == rock && ans == rock){
        hess.innerHTML = `TIE`;

    }
    else if (disp == rock && ans == scissor){
        hess.innerHTML = "LOSE";
        respoin = respoin - 5;
        document.getElementById("point").innerHTML = respoin;
    }
    else if (disp == rock && ans == paper){
        hess.innerHTML = "WIN";
        respoin = respoin +5
        document.getElementById("point").innerHTML = respoin;
    }
    else if (disp == scissor && ans == rock){
        hess.innerHTML = "WIN";
        respoin = respoin +5;
        document.getElementById("point").innerHTML = respoin;
    }
    else if (disp == scissor && ans == scissor){
        hess.innerHTML = "TIE";

    }
    else if (disp == scissor && ans == paper){
        hess.innerHTML = "LOSE";
        respoin = respoin - 5;
        document.getElementById("point").innerHTML = respoin;
    }
    else if (disp == paper && ans == rock){
        hess.innerHTML = "LOSE";
        respoin = respoin - 5;
        document.getElementById("point").innerHTML = respoin;
    }    
    else if (disp == paper && ans == scissor){
        hess.innerHTML = "WIN";
        respoin = respoin + 5;
        document.getElementById("point").innerHTML = respoin;
    }
    else if (disp == paper && ans == paper){
        hess.innerHTML = "TIE";
    }
}
refreshgame();