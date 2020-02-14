var enter = document.getElementById("enter");
var del = document.getElementById("del")

var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");

var fact1 = document.getElementById("fact1");
var fact2 = document.getElementById("fact2");
var fact3 = document.getElementById("fact3");
var fact4 = document.getElementById("fact4");

var ac = document.getElementById("ac");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var hint = document.getElementById("hint");
var ansans;
var Ran1;
var Ran2;
var Ran3;
var Ran4;

one.addEventListener("click", function(){
    if (ans1.textContent == 0){
        ans1.textContent = 1;
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    } else if (ans1.textContent !== 0 && ans2.textContent == 0) {
        ans2.textContent = 1;
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent == 0){
        ans3.textContent = 1; 
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent !== 0 && ans4.textContent == 0){
        ans4.textContent = 1;
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    }
})

two.addEventListener("click", function(){
    if (ans1.textContent == 0){
        ans1.textContent = 2;
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    } else if (ans1.textContent !== 0 && ans2.textContent == 0) {
        ans2.textContent = 2;
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent == 0){
        ans3.textContent = 2; 
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent !== 0 && ans4.textContent == 0){
        ans4.textContent = 2;
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    }
})

three.addEventListener("click", function(){
    if (ans1.textContent == 0){
        ans1.textContent = 3;
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    } else if (ans1.textContent !== 0 && ans2.textContent == 0) {
        ans2.textContent = 3;
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent == 0){
        ans3.textContent = 3; 
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent !== 0 && ans4.textContent == 0){
        ans4.textContent = 3;
        ansans = `${ans1}${ans2}${ans3}${ans4}`
    }
})
four.addEventListener("click", function(){
    if (ans1.textContent == 0){
        ans1.textContent = 4;
    } else if (ans1.textContent !== 0 && ans2.textContent == 0) {
        ans2.textContent = 4;
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent == 0){
        ans3.textContent = 4; 
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent !== 0 && ans4.textContent == 0){
        ans4.textContent = 4;
    }
})
five.addEventListener("click", function(){
    if (ans1.textContent == 0){
        ans1.textContent = 5;
    } else if (ans1.textContent !== 0 && ans2.textContent == 0) {
        ans2.textContent = 5;
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent == 0){
        ans3.textContent = 5; 
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent !== 0 && ans4.textContent == 0){
        ans4.textContent = 5;
    }
})
six.addEventListener("click", function(){
    if (ans1.textContent == 0){
        ans1.textContent = 6;
    } else if (ans1.textContent !== 0 && ans2.textContent == 0) {
        ans2.textContent = 6;
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent == 0){
        ans3.textContent = 6; 
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent !== 0 && ans4.textContent == 0){
        ans4.textContent = 6;
    }
})
seven.addEventListener("click", function(){
    if (ans1.textContent == 0){
        ans1.textContent = 7;
    } else if (ans1.textContent !== 0 && ans2.textContent == 0) {
        ans2.textContent = 7;
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent == 0){
        ans3.textContent = 7; 
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent !== 0 && ans4.textContent == 0){
        ans4.textContent = 7;
    }
})
eight.addEventListener("click", function(){
    if (ans1.textContent == 0){
        ans1.textContent = 8;
    } else if (ans1.textContent !== 0 && ans2.textContent == 0) {
        ans2.textContent = 8;
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent == 0){
        ans3.textContent = 8; 
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent !== 0 && ans4.textContent == 0){
        ans4.textContent = 8;
    }
})
nine.addEventListener("click", function(){
    if (ans1.textContent == 0){
        ans1.textContent = 9;
    } else if (ans1.textContent !== 0 && ans2.textContent == 0) {
        ans2.textContent = 9;
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent == 0){
        ans3.textContent = 9; 
    } else if (ans1.textContent !== 0 && ans2.textContent !== 0 && ans3.textContent !== 0 && ans4.textContent == 0){
        ans4.textContent = 9;
    }
})

ac.addEventListener("click", function(){
    ans1.textContent = 0;
    ans2.textContent = 0;
    ans3.textContent = 0;
    ans4.textContent = 0;
})

del.addEventListener("click", function(){
    if (ans4.textContent !== `0`){
        ans4.textContent = `0`;
    } else if (ans4.textContent == `0` && ans3.textContent !== `0`){
        ans3.textContent = `0`;
    } else if (ans4.textContent == `0` && ans3.textContent == `0` && ans2.textContent !== `0`){
        ans2.textContent = `0`;
    } else if (ans4.textContent == `0` && ans3.textContent == `0` && ans2.textContent == `0` && ans1.textContent !== `0`){
        ans1.textContent = `0`;
    }
})

enter.addEventListener("click", function(){

    if (Ran1 == Number(ans1.textContent)){fact1.textContent = `•`;} else {fact1.textContent = `*`}
    if (Ran2 == Number(ans2.textContent)){fact2.textContent = `•`;} else {fact2.textContent = `*`}   
    if (Ran3 == Number(ans3.textContent)){fact3.textContent = `•`;} else {fact3.textContent = `*`}
    if (Ran4 == Number(ans4.textContent)){fact4.textContent = `•`;} else {fact4.textContent = `*`}
})

refreshnum();
function refreshnum(){
    Ran1 = Math.floor(Math.random()*9 + 0.5)
    Ran2 = Math.floor(Math.random()*9 + 0.5)
    Ran3 = Math.floor(Math.random()*9 + 0.5)
    Ran4 = Math.floor(Math.random()*9 + 0.5)
    correctans = `${Ran1}`+`${Ran2}`+`${Ran3}`+`${Ran4}`
    hint.innerText = correctans;
}
