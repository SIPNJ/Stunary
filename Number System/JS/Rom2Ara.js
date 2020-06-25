let rom = document.getElementById("rom");
let ara = document.getElementById("ara");
let wordscount = [];
let counting = 0;
let unique = [];
let aaa;

// Convert Rom to Ara
function checkNum(StringNum, Separator, 
    NLB1, NLB2, NLB3, NLB4, NLB5, NLB6,
    // NLB7, NLB8, NLB9, NLB10, NLB11, NLB12,
    NLA1, NLA2, NLA3, NLA4, NLA5, NLA6,
    // NLA7, NLA8, NLA9, NLA10, NLA11, NLA12
    ){
    if (StringNum.includes(Separator) == true){
        let StrSplit = StringNum.split(Separator);
        if (
            // Not include letter before 
            StrSplit[0].includes(NLB1) == true ||
            StrSplit[0].includes(NLB2) == true ||
            StrSplit[0].includes(NLB3) == true ||
            StrSplit[0].includes(NLB4) == true ||
            StrSplit[0].includes(NLB5) == true ||
            StrSplit[0].includes(NLB6) == true ||

            StrSplit[1].includes(NLA1) == true ||
            StrSplit[1].includes(NLA2) == true ||
            StrSplit[1].includes(NLA3) == true ||
            StrSplit[1].includes(NLA4) == true ||
            StrSplit[1].includes(NLA5) == true ||
            StrSplit[1].includes(NLA6) == true


        ) {
            ara.value = "Wrong Order !";
            console.log(StringNum);
        }
    }
}
function checkCount(para){
    all = para.split("");
    for (let i=0; i<all.length; i++){
        if (unique.includes(all[i]) == false){
            unique.push(all[i]);
        }
    }
    for (let i=0; i<unique.length; i++){
        for (let n=0; n<all.length; n++){
            if (unique[i] == all[n]){
                counting = counting + 1
            }
        }
        wordscount[i]=counting;
        counting = 0;
    }
    for (let i=0; i<unique.length; i++){
        if (wordscount[i]>3){
            ara.value = "Not a Roman Numeral !";
        }
    }
}
function checkKey(para){
    let rep;
    rep = aaa.replace("CM", "900+");
    rep = rep.replace("CD", "400+")
    rep = rep.replace("XC", "90+");
    rep = rep.replace("XL", "40+");
    rep = rep.replace("IX", "9+");
    rep = rep.replace("IV", "4+");
    rep = rep + "0";
    rep = rep.replace(/M/g, "1000+");
    rep = rep.replace(/D/g, "500+");
    rep = rep.replace(/C/g, "100+");
    rep = rep.replace(/L/g, "50+");
    rep = rep.replace(/X/g, "10+");
    rep = rep.replace(/V/g, "5+");
    rep = rep.replace(/I/g, "1+");
    try {
        ara.value = eval(rep);
    } catch (err) {
        ara.value = "Not a number !";
    }

    let Keys = para.split("");
    if (
        Keys.includes("I") == false &&
        Keys.includes("V") == false &&
        Keys.includes("X") == false &&
        Keys.includes("L") == false &&
        Keys.includes("C") == false &&
        Keys.includes("D") == false &&
        Keys.includes("M") == false
    ) {
        ara.value = "Miss a Roman Numeral !";
        // console.log(Keys.includes("I"));
        // console.log(Keys.includes("V"));
        // console.log(Keys.includes("X"));
        // console.log(Keys.includes("L"));
        // console.log(Keys.includes("C"));
        // console.log(Keys.includes("D"));
        // console.log(Keys.includes("M"));
    } else if (
        Keys.includes("0") == true ||
        Keys.includes("1") == true ||
        Keys.includes("2") == true ||
        Keys.includes("3") == true ||
        Keys.includes("4") == true ||
        Keys.includes("5") == true ||
        Keys.includes("6") == true ||
        Keys.includes("7") == true ||
        Keys.includes("8") == true ||
        Keys.includes("9") == true
    ) {
        ara.value = "Not typing Arabic Numerals !"
    }
    // if (String(Number(rep)) == "NaN") {
    //     ara.value = "Not a Number";
    // } else if (String(Number(rep)) !== "NaN") {
    //     ara.value = eval(rep);
    // }
}
function Change2Ara(aaa){
    let rep;
    rep = aaa.replace("CM", "900+");
    rep = rep.replace("CD", "400+")
    rep = rep.replace("XC", "90+");
    rep = rep.replace("XL", "40+");
    rep = rep.replace("IX", "9+");
    rep = rep.replace("IV", "4+");
    rep = rep + "0";
    rep = rep.replace(/M/g, "1000+");
    rep = rep.replace(/D/g, "500+");
    rep = rep.replace(/C/g, "100+");
    rep = rep.replace(/L/g, "50+");
    rep = rep.replace(/X/g, "10+");
    rep = rep.replace(/V/g, "5+");
    rep = rep.replace(/I/g, "1+");
    ara.value = eval(rep);
}
function checkV(para){
    let rep = para.split("V");
    console.log(rep);
    if (
        rep[0].includes("V") == true ||
        rep[1].includes("V") == true ||
        rep[1].includes("X") == true ||
        rep[1].includes("L") == true ||
        rep[1].includes("C") == true ||
        rep[1].includes("D") == true ||
        rep[1].includes("M") == true
    ) {
        ara.value = "Typing Wrong !"
    }
}
function checkX(para){
    let rep = para.split("X");
    if (
        rep[0].includes("V") == true ||
        rep[1].includes("L") == true ||
        rep[1].includes("C") == true ||
        rep[1].includes("D") == true ||
        rep[1].includes("M") == true
    ) {
        ara.value = "Typing Wrong !"
    }
}
function checkL(para){
    let rep = para.split("L");
    if (
        rep[0].includes("I") == true ||
        rep[0].includes("V") == true ||
        rep[0].includes("L") == true |
        rep[1].includes("L") == true ||
        rep[1].includes("C") == true ||
        rep[1].includes("D") == true ||
        rep[1].includes("M") == true
    ) {
        ara.value = "Typing Wrong !"
    }
}
function checkC(para){
    let rep = para.split("C");
    if (
        rep[0].includes("I") == true ||
        rep[0].includes("V") == true ||
        rep[0].includes("L") == true ||
        rep[1].includes("X") == true ||
        rep[1].includes("D") == true ||
        rep[1].includes("M") == true
    ) {
        ara.value = "Typing Wrong !"
    }
}
function checkD(para){
    let rep = para.split("D");
    if (
        rep[0].includes("I") == true ||
        rep[0].includes("V") == true ||
        rep[0].includes("X") == true ||
        rep[0].includes("L") == true ||
        rep[0].includes("D") == true ||
        rep[1].includes("D") == true ||
        rep[1].includes("M") == true
    ) {
        ara.value = "Typing Wrong !"
    }  
}
function checkM(para){
    let rep = para.split("M");
    console.log(rep);
    if (
        rep[0].includes("I") == true ||
        rep[0].includes("V") == true ||
        rep[0].includes("X") == true ||
        rep[0].includes("L") == true ||
        rep[0].includes("D") == true
    ) {
        ara.value = "Typing Wrong !"
    }  
}
function Ara2Rom(){
    aaa = rom.value;
    checkKey(aaa);
    if (
        aaa.includes("CM") == true ||
        aaa.includes("CD") == true ||
        aaa.includes("XC") == true ||
        aaa.includes("XL") == true ||
        aaa.includes("IX") == true ||
        aaa.includes("IV") == true
    ){
        checkNum(aaa, "CM", "D", "C", "L", "X", "V", "I");
        checkNum(aaa, "CD", "D", "C", "L", "X", "V", "I");
        checkNum(aaa, "XC", "L", undefined, "L", "X", "V", "I");
        checkNum(aaa, "XL", "L", undefined, "L", "X", "V", "I");
        checkNum(aaa, "IX", "V", undefined, undefined, undefined, "V", "I");
        checkNum(aaa, "IV", "V", undefined, undefined, undefined, "V", "I");
        checkCount(aaa);
    } else if (
        aaa.includes("CM") == false &&
        aaa.includes("CD") == false &&
        aaa.includes("XC") == false &&
        aaa.includes("XL") == false &&
        aaa.includes("IX") == false &&
        aaa.includes("IV") == false
    ) {
        if (aaa.includes("V")){
            checkV(aaa);
        } else if (aaa.includes("X")){
            checkX(aaa);
        } else if (aaa.includes("L")){
            checkL(aaa);
        } else if (aaa.includes("C")){
            checkC(aaa);
        } else if (aaa.includes("D")){
            checkD(aaa);
        } else if (aaa.includes("M")){
            checkM(aaa);
        }
        checkCount(aaa);
    }
}
// I
// V
// X
// L 
// C
// D
// M 
// _

// Convert Ara to Rom
function Rom2Ara(){
    
}
// Convert function
function Convert(){
    Ara2Rom();
    Rom2Ara();
}