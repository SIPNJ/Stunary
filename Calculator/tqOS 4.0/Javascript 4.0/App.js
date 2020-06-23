let ansans = [];
let newjoint = [];
let operadisp = document.getElementById("operadisp");
let ansdisp = document.getElementById("ansdisp");

// if (shiftStatus == false && alphaStatus == false && hypStatus == false){
//    
//     ansans.push(``);
//     newjoint.push(``);
//     operadisp.value = newjoint.join(``);
// } else if (shiftStatus == true && alphaStatus == false && hypStatus == false){
//
//     ansans.push(``);
//     newjoint.push(``);
//     operadisp.value = newjoint.join(``);   
// } else if (shiftStatus == false && alphaStatus == true && hypStatus== false){
//     
//     ansans.push(``);
//     newjoint.push(``);
//     operadisp.value = newjoint.join(``);
// } else if (shiftStatus == true && alphaStatus == true && hypStatus == false){
//     
//     ansans.push(``);
//     newjoint.push(``);
//     operadisp.value = newjoint.join(``);
// } else if (shiftStatus == false && alphaStatus == false && hypStatus == true){
//     
//     ansans.push(``);
//     newjoint.push(``);
//     operadisp.value = newjoint.join(``);
// } else if (shiftStatus == true && alphaStatus == false && hypStatus == true){
//     
//     ansans.push(``);
//     newjoint.push(``);
//     operadisp.value = newjoint.join(``);
// }  else if (shiftStatus == false && alphaStatus == true && hypStatus == true){
//     
//     ansans.push(``);
//     newjoint.push(``);
//     operadisp.value = newjoint.join(``);
// } else if (shiftStatus == true && alphaStatus == true && hypStatus == true){
//     
//     ansans.push(``);
//     newjoint.push(``);
//     operadisp.value = newjoint.join(``);
// } 


// var shift = document.getElementById("Shift");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");
// var alpha = document.getElementById("Alpha");

// phim so
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
var varx = document.getElementById("varx");
var degree = document.getElementById("degree");

zero.addEventListener("click", function(){
if (shiftStatus == false && alphaStatus == false){
   
    ansans.push(`0`);
    newjoint.push(`0`);
    operadisp.value = newjoint.join(``);
// } else if (shiftStatus == true && alphaStatus == false){

//     ansans.push(``);
//     newjoint.push(``);
//     operadisp.value = newjoint.join(``);   
// } else if (shiftStatus == false && alphaStatus == true){
    
//     ansans.push(`${Astore}`);
//     newjoint.push(`A`);
//     operadisp.value = newjoint.join(``);
// } else if (shiftStatus == true && alphaStatus == true){
    
//     ansans.push(``);
//     newjoint.push(``);
//     operadisp.value = newjoint.join(``);
}});
one.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && stoStatus == false){
        ansans.push(`1`);
        newjoint.push(`1`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && stoStatus == false){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == false){
        ansans.push(StorageA);
        newjoint.push(`A`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == false && stoStatus == true){
        ansdisp.value = eval(ansans.join(``));
        StorageA = Number(ansdisp.value) + StorageA;
    } else if (shiftStatus == true && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == true && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == true){
        
    }
});
two.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && stoStatus == false){
        ansans.push(`2`);
        newjoint.push(`2`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && stoStatus == false){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == false){
        ansans.push(StorageB);
        newjoint.push(`B`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == false && stoStatus == true){
        ansdisp.value = eval(ansans.join(``));
        StorageB = Number(ansdisp.value) + StorageB;
    } else if (shiftStatus == true && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == true && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == true){
        
    }
});
three.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && stoStatus == false){
        ansans.push(`3`);
        newjoint.push(`3`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && stoStatus == false){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == false){
        ansans.push(StorageC);
        newjoint.push(`C`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == false && stoStatus == true){
        ansdisp.value = eval(ansans.join(``));
        StorageC = Number(ansdisp.value) + StorageC;
    } else if (shiftStatus == true && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == true && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == true){
        
    }
});
four.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && stoStatus == false){
        ansans.push(`4`);
        newjoint.push(`4`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && stoStatus == false){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == false){
        ansans.push(StorageD);
        newjoint.push(`D`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == false && stoStatus == true){
        ansdisp.value = eval(ansans.join(``));
        StorageD = Number(ansdisp.value) + StorageD;
    } else if (shiftStatus == true && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == true && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == true){
        
    }
});
five.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && stoStatus == false){
        ansans.push(`5`);
        newjoint.push(`5`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && stoStatus == false){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == false){
        ansans.push(StorageE);
        newjoint.push(`E`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == false && stoStatus == true){
        ansdisp.value = eval(ansans.join(``));
        StorageE = Number(ansdisp.value) + StorageE;
    } else if (shiftStatus == true && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == true && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == true){
        
    }
});
six.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && stoStatus == false){
        ansans.push(`6`);
        newjoint.push(`6`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && stoStatus == false){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == false){
        ansans.push(StorageF);
        newjoint.push(`F`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == false && stoStatus == true){
        ansdisp.value = eval(ansans.join(``));
        StorageF = Number(ansdisp.value) + StorageF;
    } else if (shiftStatus == true && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == true && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == true){
        
    }
});
seven.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && stoStatus == false){
        ansans.push(`7`);
        newjoint.push(`7`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && stoStatus == false){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == false){
        ansans.push(StorageG);
        newjoint.push(`G`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == false && stoStatus == true){
        ansdisp.value = eval(ansans.join(``));
        StorageG = Number(ansdisp.value) + StorageG;
    } else if (shiftStatus == true && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == true && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == true){
        
    }
});
eight.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && stoStatus == false){
        ansans.push(`8`);
        newjoint.push(`8`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && stoStatus == false){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == false){
        ansans.push(StorageH);
        newjoint.push(`H`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == false && stoStatus == true){
        ansdisp.value = eval(ansans.join(``));
        StorageH = Number(ansdisp.value) + StorageH;
    } else if (shiftStatus == true && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == true && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == true){
        
    }
});
nine.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && stoStatus == false){
        ansans.push(`9`);
        newjoint.push(`9`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && stoStatus == false){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == false){
        ansans.push(StorageI);
        newjoint.push(`I`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == false && stoStatus == true){
        ansdisp.value = eval(ansans.join(``));
        StorageI = Number(ansdisp.value) + StorageI;
    } else if (shiftStatus == true && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == true && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == true){
        
    }
});
dot.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && stoStatus == false){
        ansans.push(`.`);
        newjoint.push(`.`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && stoStatus == false){
        ansans.push(`,`);
        newjoint.push(`,`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == false && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == true && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == true){
        
    }
});
varx.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && stoStatus == false){
        ansans.push(`X`);
        newjoint.push(`X`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && stoStatus == false){
        ansans.push(StorageY);
        newjoint.push(`Y`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == true && stoStatus == false){
        ansans.push(StorageZ);
        newjoint.push(`Z`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == false){

    } else if (shiftStatus == true && alphaStatus == false && stoStatus == true){

    } else if (shiftStatus == false && alphaStatus == true && stoStatus == true){

    } else if (shiftStatus == true && alphaStatus == true && stoStatus == true){
        
    }
});
degree.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false){
        ansans.push(`°`);
        newjoint.push(`°`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false){
        // ansans.push(`Fact(`);
        // newjoint.push(`Fact(`);
        // operadisp.value = newjoint.join(``);
        ansdisp.value = Fact(Number(ansdisp.value));
    } else if (shiftStatus == false && alphaStatus == true){
        ansans.push(`Math.abs(`);
        newjoint.push(`Abs(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == true){

}})


// click dau operator
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var expoten = document.getElementById("expoten");

plus.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false){
        ansans.push(`+`);
        newjoint.push(`+`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false){
        ansans.push(`Pol(`);
        newjoint.push(`Pol(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == true){
        ansans.push(`|`);
        newjoint.push(`or`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == true){

    }
});
minus.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false){
        ansans.push(`-`);
        newjoint.push(`-`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false){
        ansans.push(`Rec(`);
        newjoint.push(`Rec()`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == true){
        ansans.push(`&`);
        newjoint.push(`and`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == true){

    }
});
multiply.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false){
        ansans.push(`*`);
        newjoint.push(`×`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false){
        ansans.push(``);
        newjoint.push(`P`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == true){
        ansans.push(`GCD(`);
        newjoint.push(`GCD(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == true){

    }
});
divide.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false){
        ansans.push(`/`);
        newjoint.push(`÷`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false){
        ansans.push(``);
        newjoint.push(`C`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == true){
        ansans.push(`LCM(`);
        newjoint.push(`LCM(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == true){
        
    }
});
expoten.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false){
        ansans.push(`*10**(`);
        newjoint.push(`×10^(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false){
        ansans.push(`/100`);
        newjoint.push(`%`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == true){
        ansans.push(`/1000`);
        newjoint.push(`‰`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == true){
        
    }
});

// cac dau ngoac
var open = document.getElementById("open");
var close = document.getElementById("close");

open.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false){
        ansans.push(`(`);
        newjoint.push(`(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false){

    } else if (shiftStatus == false && alphaStatus == true){

    } else if (shiftStatus == true && alphaStatus == true){
        
    }
});

close.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false){
        ansans.push(`)`);
        newjoint.push(`)`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false){

    } else if (shiftStatus == false && alphaStatus == true){
        ansans.push(`X`);
        newjoint.push(`X`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == true){
        
    }
});


// ham luong giac
var sin = document.getElementById("sine");
var cos = document.getElementById("cosine");
var tan = document.getElementById("tangent");

sin.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && hypStatus == false){
        // sin
        ansans.push(`Math.sin(`);
        newjoint.push(`Sin(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && hypStatus == false){
        // arc sin
        ansans.push(`Math.asin(`);
        newjoint.push(`ArcSin(`);
        operadisp.value = newjoint.join(``);   
    } else if (shiftStatus == false && alphaStatus == true && hypStatus== false){
        // sec
        ansans.push(`secant(`);
        newjoint.push(`Sec(`);
        operadisp.value = newjoint.join(``); 
    } else if (shiftStatus == true && alphaStatus == true && hypStatus == false){
        // arc sec
        ansans.push(`arcsecant(`);
        newjoint.push(`ArcSec(`);
        operadisp.value = newjoint.join(``); 
    } else if (shiftStatus == false && alphaStatus == false && hypStatus == true){
        // sinh
        ansans.push(`Math.sinh(`);
        newjoint.push(`Sinh(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && hypStatus == true){
        // arc sinh
        ansans.push(`Math.asinh(`);
        newjoint.push(`ArcSinh(`);
        operadisp.value = newjoint.join(``);
    }  else if (shiftStatus == false && alphaStatus == true && hypStatus == true){
        // sech
        ansans.push(`sech(`);
        newjoint.push(`Sech(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == true && hypStatus == true){
        // arc sech
        ansans.push(`arcsech(`);
        newjoint.push(`ArcSech(`);
        operadisp.value = newjoint.join(``);
    } 
});

cos.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && hypStatus == false){
        // cos
        ansans.push(`Math.cos(`);
        newjoint.push(`Cos(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && hypStatus == false){
        // arc cos
        ansans.push(`Math.acos(`);
        newjoint.push(`ArcCos(`);
        operadisp.value = newjoint.join(``);   
    } else if (shiftStatus == false && alphaStatus == true && hypStatus== false){
        // csc
        ansans.push(`cosecant(`);
        newjoint.push(`Csc(`);
        operadisp.value = newjoint.join(``); 
    } else if (shiftStatus == true && alphaStatus == true && hypStatus == false){
        // arc csc
        ansans.push(`arccosecant(`);
        newjoint.push(`ArcCsc(`);
        operadisp.value = newjoint.join(``); 
    } else if (shiftStatus == false && alphaStatus == false && hypStatus == true){
        // cosh
        ansans.push(`Math.cosh(`);
        newjoint.push(`Cosh(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && hypStatus == true){
        // arc cosh
        ansans.push(`Math.acosh(`);
        newjoint.push(`ArcCosh(`);
        operadisp.value = newjoint.join(``);
    }  else if (shiftStatus == false && alphaStatus == true && hypStatus == true){
        // csch
        ansans.push(`csch(`);
        newjoint.push(`Csch(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == true && hypStatus == true){
        // arc csch
        ansans.push(`arccsch(`);
        newjoint.push(`ArcCsch(`);
        operadisp.value = newjoint.join(``);
    }
});

tan.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false && hypStatus == false){
        // tan
        ansans.push(`Math.tan(`);
        newjoint.push(`Tan(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && hypStatus == false){
        // arc tan
        ansans.push(`Math.atan(`);
        newjoint.push(`ArcTan(`);
        operadisp.value = newjoint.join(``);   
    } else if (shiftStatus == false && alphaStatus == true && hypStatus== false){
        // cot
        ansans.push(`cotangent(`);
        newjoint.push(`Cot(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == true && hypStatus == false){
        // arc cot
        ansans.push(`arccotangent(`);
        newjoint.push(`ArcCot(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == false && alphaStatus == false && hypStatus == true){
        // tanh
        ansans.push(`Math.tanh(`);
        newjoint.push(`Tanh(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false && hypStatus == true){
        // arc tanh
        ansans.push(`Math.atanh(`);
        newjoint.push(`ArcTanh(`);
        operadisp.value = newjoint.join(``);
    }  else if (shiftStatus == false && alphaStatus == true && hypStatus == true){
        // coth
        ansans.push(`coth(`);
        newjoint.push(`Coth(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == true && hypStatus == true){
        // arc coth
        ansans.push(`arccoth(`);
        newjoint.push(`ArcCoth(`);
        operadisp.value = newjoint.join(``);
    }
});

// ham logarith
var loga = document.getElementById("Loga");
var log = document.getElementById("Log");
var ln = document.getElementById("Ln");

ln.addEventListener("click", function(){
    if(shiftStatus == false && alphaStatus == false){
        ansans.push(`Math.log(`);
        newjoint.push(`Ln(`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false){
        ansans.push(`Math.exp(`);
        newjoint.push(`e^(`);
        operadisp.value = newjoint.join(``);
    }
});

log.addEventListener("click", function(){
    ansans.push(`Math.log10(`);
    newjoint.push(`Log(`);
    operadisp.value = newjoint.join(``);
});

loga.addEventListener("click", function(){
    ansans.push(`logasa(`);
    newjoint.push(`Loga(`);
    operadisp.value = newjoint.join(``);
});

// ham super operator
var power = document.getElementById("expo");
var square = document.getElementById("square");
var sqrt = document.getElementById("sqrt");
var factorial = document.getElementById("factorial");
var frac = document.getElementById("frac");

square.addEventListener("click", function(){
    ansans.push(`**(2)`);
    newjoint.push(`^(2)`);
    operadisp.value = newjoint.join(``);
});

sqrt.addEventListener("click", function(){
    ansans.push(`Sqrt(`);
    newjoint.push(`√(`);
    operadisp.value = newjoint.join(``);
});

power.addEventListener("click", function(){
    ansans.push(`**(`);
    newjoint.push(`^(`);
    operadisp.value = newjoint.join(``);  
});

// factorial.addEventListener("click", function(){
//     operadisp.value += `!`; 
//     var san = 1;
//     for(let uber = 1 ; uber <= ansans ; uber++){
//         san = san * uber;
//     };
//     ansans = String(san);
//     console.log(ansans);
// });




// dinh nghia cac collosal operator khong co san trong javscript
// ham logarith

function Sqrt(a){
    if (a>=0){
        return Math.sqrt(a);
    } else {
        return Math.sqrt(-a);
    }
}

function logasa(a,b){
    return Math.log(b)/Math.log(a);    
};
//ham mo rong luong giac
function secant(a){
    return 1/Math.cos(a);
};
function cosecant(a){
    return 1/Math.sin(a);
};
function cotangent(a){
    return 1/Math.tan(a);
};
// ham do goc luong giac mo rong
function arccosecant(a){
    return Math.asin(1/a);
};
function arcsecant(a){
    return Math.acos(1/a);
};
function arccotangent(a){
    return Math.atan(1/a);
};
// ham luong giac mo rong hyperbol
function sech(a){
    return 1/Math.cosh(a);
};
function csch(a){
    return 1/Math.sinh(a);
};
function coth(a){
    return 1/Math.tanh(a);
};
// ham do goc luong giac mo rong hyperbol
function arcsech(a){
    return Math.log((1/a)+(Math.sqrt((1/(a**2)-1))));
};
function arccsch(a){
    return Math.log((1/a)+(Math.sqrt((1/(a**2)+1))));
};
function arccoth(a){
    return (Math.log((a+1)/(a-1)))/2;
};
function GCD(num,denom){
    for (let factor = num; factor > 0; factor--) {
        if ((num % factor == 0) && (denom % factor == 0)) {
            return factor;
        }
    }
}
function LCM(num,denom){
    for (let factor = denom; factor > 0; factor++) {
        if ((factor % num == 0) && (factor % denom == 0)) {
            return factor;
        }
    }
}

function Fact(number){
    let count = 0;
    let fact = [];
    for (let i = 2;i <= number; i++){
        if (number % i == 0){
            fact.push(`${i}`);
            count = count + 1;
            number = number/i;
        }
    }
    return fact.join(`×`);
}

// cai nay de array he so cua ham
let arrest = [];
let deg = 0;
let coeff = [];

var ss = "5*x**2-2*x**42+4*x-2";
// xac dinh bac cua ham
function deger(func){
    let findex = /[\d]+\*x(\*\*[\d]+)?/g;
    let matchex = func.match(findex);
    console.log(matchex);
    for(let i = 0; i < matchex.length; i++){
        // let numeff;
        // numeff = matchex[i].split('*x')[0];
        // coeff = conca(coeff, numeff, exp);
        // console.log(exp); 
        // console.log(`coeff is ${coeff}`);

        let exp = matchex[i].split('**')[1];
        if(exp && (exp > deg)){
          deg = exp;
        }
    }
    return(deg);
}

// xac dinh array he so


function splitsplit(str){
    str = str.replace(/-/g,"+-")
    str = str.split("+");
    for (let i = 0; i < str.length; i++){
        let exp = str[i].split("**");
        console.log(exp);
    }
}

let aa = [2,3,4];
let bb = 34;
// them muc vao vi tri bat ki cua array
function conca(arr, thing, pos){
    let arr1 = arr.slice(0, pos-1);
    arr1.push(thing);
    let arr2 = arr.slice(pos-1, arr.length);
    arr = arr1.concat(arr2);
    return arr;
}


function integral(func,argu,upper,lower){

}


// function Fact(number){
//     let prei = 2;
//     let fact = [];
//     let count = 0;
//     for (let i = 2; i <= number; i++){
//         while (number % i === 0){
//             number = number / i;
//             if (i == prei && count <= 1 && number == 1){
//                 // xuat | ko mu | trong chang
//                 count = 0;
//                 fact.push(`${prei}`);

//                 console.log(fact.join(`x`));
//                 return fact.join(`x`);
//             } else if (i == prei && count <= 1 && number !== 1){
//                 // ko xuat | ko mu | trong chang
//                 count = count + 1;

//                 console.log(fact.join(`x`));
//             } else if (i == prei && count > 1 && number == 1){
//                 // xuat | co mu | trong chang
//                 count = count + 1;
//                 fact.push(`${i}`+`${count}`.sup());

//                 console.log(fact.join(`x`));
//                 return fact.join(`x`);
//             } else if (i !== prei && count <= 1 && number == 1){
//                 // xuat | ko mu | khac chang
//                 count = 0;
//                 fact.push(`${prei}`+`${i}`);

//                 console.log(fact.join(`x`));
//                 return fact.join(`x`);
//             } else if (i !== prei && count > 1 && number == 1){
//                 // xuat | co mu | khac chang
//                 fact.push(`${prei}`+`${count}`.sup()+`${i}`);
//                 count = 0;

//                 console.log(fact.join(`x`));
//                 return fact.join(`x`);
//             } else if (i == prei && count > 1 && number !== 1){
//                 // ko xuat | co mu | trong chang
//                 count = count + 1;

//                 console.log(fact.join(`x`));
//             } else if (i !== prei && count <= 1 && number !== 1){
//                 // ko xuat | ko mu | khac chang
//                 fact.push(`${prei}`);
//                 count = 0;

//                 console.log(fact.join(`x`));
//             } else if (i !== prei && count > 1 && number !== 1){
//                 // ko xuat | co mu | khac chang
//                 fact.push(`${prei}`+`${count}`.sup());
//                 count = 0;

//                 console.log(fact.join(`x`));
//             }
//             console.log(i);
//             prei = i;
//         }
//     }
//     return fact.join(`×`);
// }

function Pol(x,y){
    var r = Math.sqrt(x*x+y*y)
    var θ = Math.atan(y/x);
    return `r = ${r}, θ = ${θ}`
}

function Rec(r,θ){
    var x = r * Math.cos(θ);
    var y = r * Math.sin(θ);
    return `x = ${x}, y = ${y}` 
} 

// done

// function factorial(){
//     var san = 1;
//     for(let uber = 1 ; uber <= ansans ; uber++){
//         san = san * uber;
//     };
//     ansans = String(san);
//     console.log(ansans);
// }


// Doan hien thi anh sang phim shift, alpha ...
var shift = document.getElementById("Shift");
var alpha = document.getElementById("Alpha");
var sto = document.getElementById("sto");
var hyp = document.getElementById("hyp");

var sbtn = document.getElementById("Sbtn");
var abtn = document.getElementById("Abtn");
var mbtn = document.getElementById("Mbtn")
var dbtn = document.getElementById("Dbtn");
var rbtn = document.getElementById("rbtn");
var gbtn = document.getElementById("Gbtn");

var stobtn = document.getElementById("stobtn");
var cmlxbtn = document.getElementById("cmlxbtn");
var matbtn = document.getElementById("matbtn");
var vctbtn = document.getElementById("vctbtn")
var hypbtn = document.getElementById("HYPbtn");
var fixbtn = document.getElementById("fixbtn");
var scibtn = document.getElementById("scibtn");


// phim setting

var shiftStatus = false;
shift.addEventListener("click", function(){
    shiftStatus = !shiftStatus;
    if (shiftStatus == true){
        sbtn.style.opacity = 1;
    } else {
        sbtn.style.opacity = 0;
    };

    stobtn.style.opacity = 0;
    stoStatus = false;
    console.log(shiftStatus);
});

var alphaStatus = false;
alpha.addEventListener("click", function(){
    alphaStatus = !alphaStatus;
    if (alphaStatus == true){
        abtn.style.opacity = 1;
    } else {
        abtn.style.opacity = 0;
    };

    stobtn.style.opacity = 0;
    stoStatus = false;
    console.log(alphaStatus);
});

var stoStatus = false;
sto.addEventListener("click", function(){
    stoStatus = !stoStatus;
    if (stoStatus == true){
        stobtn.style.opacity = 1;
    } else {
        stobtn.style.opacity = 0;
    }
});

var hypStatus = false;
hyp.addEventListener("click", function(){
    hypStatus = ! hypStatus;
    if (hypStatus == true){
        hypbtn.style.opacity = 1;
    } else {
        hypbtn.style.opacity = 0;
    }
})

// phim luu tru
var ans = document.getElementById("Answer");
var storem = document.getElementById("storem");

var storageans = 0;
var StorageM = 0;
var StorageX = 0;
var StorageY = 0;
var StorageZ = 0;

var StorageA = 0;
var StorageB = 0;
var StorageC = 0;
var StorageD = 0;
var StorageE = 0;
var StorageF = 0;
var StorageG = 0;
var StorageH = 0;
var StorageI = 0;

ans.addEventListener("click", function(){
    if (shiftStatus == false && alphaStatus == false){
        ansans.push(storageans);
        newjoint.push(`Ans`);
        operadisp.value = newjoint.join(``);
    } else if (shiftStatus == true && alphaStatus == false){

    } else if (shiftStatus == false && alphaStatus == true){

    } else if (shiftStatus == true && alphaStatus == true){
        
    }
});

storem.addEventListener("click", function(){
    if(shiftStatus == false && alphaStatus == false){
        ansdisp.value = eval(ansans.join(``));
        StorageM = Number(ansdisp.value) + StorageM;
    } else if (shiftStatus == true && alphaStatus == false){


    } else if (shiftStatus == false && alphaStatus == true){
        
        ansans.push(`StorageM`);
        newjoint.push(`M`);
        operadisp.value = newjoint.join(``); 
        console.log(StorageM);

    } else if (shiftStatus == true && alphaStatus == true){
        
    }
});


// UI
// newjoint la array de hien thi phep tinh
// operadisp la gia tri cua newjoint

// Computer
// ansans la array de tinh toan ngam
// ansdisp la gia tri cua ansans



// calculator.addEventListener("click", function myFunction(event) {
//     var x = event.key;
//     alert("The pressed key was: " + x);
// })

// phim quan trong
// phim deactive

var del = document.getElementById("delete");
var ac = document.getElementById("ace");
var calc = document.getElementById("Calc");
var reset = document.getElementById("Reset");

reset.addEventListener("click", function(){
    shiftStatus = false; sbtn.style.opacity = 0;
    alphaStatus = false; abtn.style.opacity = 0;
    hypStatus = false; hypbtn.style.opacity = 0;
    stoStatus = false; stobtn.style.opacity = 0;

    storageans = 0;
    StorageM = 0;
    StorageX = 0;
    StorageY = 0;
    StorageZ = 0;

    StorageA = 0;
    StorageB = 0;
    StorageC = 0;
    StorageD = 0;
    StorageE = 0;
    StorageF = 0;
    StorageG = 0;
    StorageH = 0;
    StorageI = 0;
});

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

function lookX(equa){
    for (let i = 0; i < equa.length; i++){
        if (equa[i].includes("X") === true){
            prompt
        }
    }
}
function replaceX(equa){
    for (let i = 0; i < equa.length; i++){
        equa[i] = equa[i].replace(/X/gi, `${StorageX}`)
    }
}
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
    // ansans = ansans.replace(/Loga/gi,"logasa");
    // ansans = ansans.replace(/√/gi, "Math.sqrt");
    try{
        replaceX(ansans);
        console.log(ansans);
        // calculating process
        ansdisp.value = eval(ansans.join(``));
        storageans = ansdisp.value;;
    }
    catch(err){
        ansdisp.value = err.message;
    }
});

// var calculator = document.getElementById("calculator");
var mode = document.getElementById("mode");
mode.addEventListener("click", function(){
    console.log(operadisp.style);
    console.log(ansdisp.style)
});
