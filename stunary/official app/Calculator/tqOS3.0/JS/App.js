let ansans = [];
let newjoint = [];
let operadisp = document.getElementById("operadisp");
let ansdisp = document.getElementById("ansdisp");
let calculator = document.getElementById("calculator");

// var shift = document.getElementById("Shift");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");

// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");

// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");



var shift = document.getElementById("Shift");


// var ans = document.getElementById("Answer");

var open = document.getElementById("open");
var close = document.getElementById("close");

// var degree = document.getElementById("degree");

var sin = document.getElementById("sine");
var cos = document.getElementById("cosine");
var tan = document.getElementById("tangent");

var logasa = document.getElementById("Loga");
var log = document.getElementById("Log");
var ln = document.getElementById("Ln");

var power = document.getElementById("expo");
var square = document.getElementById("square");
var sqrt = document.getElementById("sqrt");
var factorial = document.getElementById("factorial");
var frac = document.getElementById("frac");

var del = document.getElementById("delete");
var ac = document.getElementById("ace");

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");


var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var dot = document.getElementById("dot");

var calc = document.getElementById("Calc");

// cac phim so

zero.addEventListener("click", function(){
    ansans.push(`0`);
    newjoint.push(`0`);
    operadisp.value = newjoint.join(``);
});
one.addEventListener("click", function(){
    ansans.push(`1`);
    newjoint.push(`1`);
    operadisp.value = newjoint.join(``);
});
two.addEventListener("click", function(){
    ansans.push(`2`);
    newjoint.push(`2`);
    operadisp.value = newjoint.join(``);
});
three.addEventListener("click", function(){
    ansans.push(`3`);
    newjoint.push(`3`);
    operadisp.value = newjoint.join(``);
});
four.addEventListener("click", function(){
    ansans.push(`4`);
    newjoint.push(`4`);
    operadisp.value = newjoint.join(``);
});
five.addEventListener("click", function(){
    ansans.push(`5`);
    newjoint.push(`5`);
    operadisp.value = newjoint.join(``);
});
six.addEventListener("click", function(){
    ansans.push(`6`);
    newjoint.push(`6`);
    operadisp.value = newjoint.join(``);
});
seven.addEventListener("click", function(){
    ansans.push(`7`);
    newjoint.push(`7`);
    operadisp.value = newjoint.join(``);
});
eight.addEventListener("click", function(){
    ansans.push(`8`);
    newjoint.push(`8`);
    operadisp.value = newjoint.join(``);
});
nine.addEventListener("click", function(){
    ansans.push(`9`);
    newjoint.push(`9`);
    operadisp.value = newjoint.join(``);
});

// cac dau toan tu

plus.addEventListener("click", function(){
    ansans.push(`+`);
    newjoint.push(`+`);
    operadisp.value = newjoint.join(``);
});
minus.addEventListener("click", function(){
    ansans.push(`-`);
    newjoint.push(`-`);
    operadisp.value = newjoint.join(``);
});
multiply.addEventListener("click", function(){
    ansans.push(`*`);
    newjoint.push(`×`);
    operadisp.value = newjoint.join(``);
});
divide.addEventListener("click", function(){
    ansans.push(`/`);
    newjoint.push(`÷`);
    operadisp.value = newjoint.join(``);
});
dot.addEventListener("click", function(){
    ansans.push(`.`);
    newjoint.push(`.`);
    operadisp.value = newjoint.join(``);
});

// cac dau ngoac va cac setting khac

open.addEventListener("click", function(){
    ansans.push(`(`);
    newjoint.push(`(`);
    operadisp.value = newjoint.join(``);
});

close.addEventListener("click", function(){
    ansans.push(`)`);
    newjoint.push(`)`);
    operadisp.value = newjoint.join(``);
});


// ham luong giac

sin.addEventListener("click", function(){
    ansans.push(`Math.sin(`);
    newjoint.push(`Sin(`);
    operadisp.value = newjoint.join(``);
});

cos.addEventListener("click", function(){
    ansans.push(`Math.cos(`);
    newjoint.push(`Cos(`);
    operadisp.value = newjoint.join(``);
});

tan.addEventListener("click", function(){
    ansans.push(`Math.tan(`);
    newjoint.push(`Tan(`);
    operadisp.value = newjoint.join(``);
});

ln.addEventListener("click", function(){
    ansans.push(`Math.log(`);
    newjoint.push(`Ln(`);
    operadisp.value = newjoint.join(``);
});

log.addEventListener("click", function(){
    ansans.push(`Math.log10(`);
    newjoint.push(`Log(`);
    operadisp.value = newjoint.join(``);
});


// toan tu cao cap

square.addEventListener("click", function(){
    ansans.push(`**`);
    newjoint.push(`^`);
    operadisp.value = newjoint.join(``);
});

sqrt.addEventListener("click", function(){
    ansans.push(`sqrt(`);
    newjoint.push(`√`);
    operadisp.value = newjoint.join(``);
});














// function logasa(a,b){
//     logasa(a,b) = Math.log(a)/Math.log(b);    
// };

// factorial.addEventListener("click", function(){
//     operadisp.value += `!`; 
//     var san = 1;
//     for(let uber = 1 ; uber <= ansans ; uber++){
//         san = san * uber;
//     };
//     ansans = String(san);
//     console.log(ansans);
// });





// phim setting

shift.addEventListener("click", function(){
    sin.removeEventListener("click", function(){operadisp.value += `Sin(`});
    cos.removeEventListener("click", function(){operadisp.value += `Cos(`});
    tan.removeEventListener("click", function(){operadisp.value += `Tan(`});
    ln.removeEventListener("click", function(){operadisp.value += `Ln(`});
    log.removeEventListener("click", function(){operadisp.value += `Log(`;});

    sin.addEventListener("click", function(){operadisp.value += `Arcsin(`});
    cos.addEventListener("click", function(){operadisp.value += `Arccos(`});
    tan.addEventListener("click", function(){operadisp.value += `Arctan(`});
});

// function factorial(){
//     var san = 1;
//     for(let uber = 1 ; uber <= ansans ; uber++){
//         san = san * uber;
//     };
//     ansans = String(san);
//     console.log(ansans);
// }





















// calculator.addEventListener("click", function myFunction(event) {
//     var x = event.key;
//     alert("The pressed key was: " + x);
// })

// phim quan trong

ac.addEventListener("click", function(){
    ansans = [];
    newjoint = [];
    operadisp.value = ``;
    ansdisp.value = ``;
});

del.addEventListener("click", function(){
    ansans.pop(``);
    newjoint.pop();
    operadisp.value = newjoint.join(``);
});

calc.addEventListener("click", function(){
    // ansans = operadisp.value;
    // ansans = ansans.replace(/×/gi, "*");
    // ansans = ansans.replace(/÷/gi, "/");

    // ansans = ansans.replace(/Sin/gi, "Math.sin");
    // ansans = ansans.replace(/Cos/gi, "Math.cos");
    // ansans = ansans.replace(/Tan/gi, "Math.tan");

    // ansans = ansans.replace(/Arcsin/gi, "Math.asin");
    // ansans = ansans.replace(/Arccos/gi, "Math.acos");
    // ansans = ansans.replace(/Arctan/gi, "Math.atan");

    // ansans = ansans.replace(/Log/gi, "Math.log10");
    // ansans = ansans.replace(/Ln/gi, "Math.log");
    // // ansans = ansans.replace(/Loga/gi,"logasa");
    // ansans = ansans.replace(/√/gi, "Math.sqrt");
    
    ansdisp.value = eval(ansans.join(``));
});