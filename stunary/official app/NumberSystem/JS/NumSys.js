let bin = document.getElementById("bin");
let dec = document.getElementById("dec");
function Convert(){
    let aaa = bin.value.split("");
    for (let i=0; i < aaa.length; i++){
        if (aaa[i] !== "1" && aaa[i] !== "0"){
            dec.value = "Not a binary number";
            break;
        } else if (aaa[i] === "1" || aaa[i] === "0") {
            console.log(aaa[i])
            dec.value = parseInt(bin.value,2);
        }
    }
}