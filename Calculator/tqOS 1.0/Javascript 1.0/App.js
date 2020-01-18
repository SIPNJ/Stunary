let ansans =``;
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
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");


// var ans = document.getElementById("Answer");

var open = document.getElementById("open");
var close = document.getElementById("close");

// var degree = document.getElementById("degree");

var sin = document.getElementById("sine");
var cos = document.getElementById("cosine");
var tan = document.getElementById("tangent");
var log = document.getElementById("Log");
var ln = document.getElementById("Ln");

var power = document.getElementById("expo");
var frac = document.getElementById("frac");
var square = document.getElementById("square");
var sqrt = document.getElementById("sqrt");
var factorial = document.getElementById("factorial");

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


zero.addEventListener("click", function(){
    ansans += `0`;
    operadisp.value += `0`;
});
one.addEventListener("click", function(){
    ansans += `1`;
    operadisp.value += `1`;
});
two.addEventListener("click", function(){
    ansans += `2`;
    operadisp.value += `2`;
});
three.addEventListener("click", function(){
    ansans += `3`;
    operadisp.value += `3`;
});
four.addEventListener("click", function(){
    ansans += `4`;
    operadisp.value += `4`;
});
five.addEventListener("click", function(){
    ansans += `5`;
    operadisp.value += `5`;
});
six.addEventListener("click", function(){
    ansans += `6`;
    operadisp.value += `6`;
});
seven.addEventListener("click", function(){
    ansans += `7`;
    operadisp.value += `7`;
});
eight.addEventListener("click", function(){
    ansans += `8`;
    operadisp.value += `8`;
});
nine.addEventListener("click", function(){
    ansans += `9`;
    operadisp.value += `9`;
});
plus.addEventListener("click", function(){
    ansans += `+`;
    operadisp.value += `+`;
});
minus.addEventListener("click", function(){
    ansans += `-`;
    operadisp.value += `-`;
});
multiply.addEventListener("click", function(){
    ansans += `*`;
    operadisp.value += `×`;
});
divide.addEventListener("click", function(){
    ansans += `/`;
    operadisp.value += `÷`;
});
dot.addEventListener("click", function(){
    ansans += `.`;
    operadisp.value += `.`;
});

ac.addEventListener("click", function(){
    ansans = ``;
    operadisp.value = ``;
    ansdisp.value = ``;
});

// //
// del.addEventListener("click", function(){
//     var s = operadisp.value.split("").pop();
//     console.log(s);
// })
// //

del.addEventListener("click", function(){
    ansans = ansans.substring(0, ansans.length - 1);
    operadisp.value = ansans; 
});

calc.addEventListener("click", function(){
    var anseval = eval(ansans);
    console.log(anseval);
    ansdisp.value = anseval;
});

open.addEventListener("click", function(){
    ansans += `(`;
    operadisp.value += `(`;
});

close.addEventListener("click", function(){
    ansans += `)`;
    operadisp.value += `)`;
});

sin.addEventListener("click", function(){
    ansans += `Math.sin(`;
    operadisp.value += `Sin(`
});

cos.addEventListener("click", function(){
    ansans += `Math.cos(`;
    operadisp.value += `Cos(`
});

tan.addEventListener("click", function(){
    ansans += `Math.tan(`;
    operadisp.value += `Tan(`
});

ln.addEventListener("click", function(){
    ansans += `Math.log(`;
    operadisp.value += `Ln(`
});

log.addEventListener("click", function(){
    ansans += `Math.log10(`;
    operadisp.value = `Log(`;
});

factorial.addEventListener("click", function(){
    operadisp.value += `!`; 
    var san = 1;
    for(let uber = 1 ; uber <= ansans ; uber++){
        san = san * uber;
    };
    ansans = String(san);
    console.log(ansans);
});


















// calculator.addEventListener("click", function myFunction(event) {
//     var x = event.key;
//     alert("The pressed key was: " + x);
// })

