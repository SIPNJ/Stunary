let toJSON = document.getElementById("toJSON");
let toCSV = document.getElementById("toCSV");
let jsondata = document.getElementById("jsondata");
let csvdata = document.getElementById("csvdata");
let linklink = document.getElementById("linklink");

toJSON.addEventListener("click", function(){
    // Convert csv to json
    let arr = csvdata.value.split("\n"); // break the lines into strings
    let titles = arr[0].split(","); // get the titles
    let result= '[\n';
    // loop rows
    for (let i=1; i<arr.length; i++){
        let elements = arr[i].split(","); // break the elements
        // result.push(`{`);
        result = result + `{`
        // loops columns
        for (let n=0; n<elements.length; n++){
            if (n === elements.length - 1){
                result = result + `${titles[n]}:${elements[n]}`;
            } else {
                result = result + `${titles[n]}:${elements[n]},`;
            }
        }
        result = result + `},\n`;
    }
    result = result + `]`;
    jsondata.value = result;
})

toCSV.addEventListener("click", function(){
    let result = "";
    // Convert json to csv
    let str = jsondata.value.toString();
    str = str.split("\n"); // break the lines
    // delete array
    str.pop();
    str.shift();
    // find the titles
    let f1st = str[0].toString(); // object 0 to string
    f1st = f1st.substring(1, f1st.length-2).split(","); // delete object
    for (let i=0; i<f1st.length; i++){
        result = result + "," + f1st[i].split(":")[0];
    }
    let lastresult = result.substring(1, result.length);
    result = "";

    for (let n=0; n<str.length; n++){
        let elements = str[n].split("{").toString().split("}");
        elements.pop();
        elements = elements.toString();
        elements = elements.substring(1,elements.length).split(",");
        // console.log(elements)
        // 1
        for (let i=0; i<elements.length; i++){
            let col = elements[i].split(":")[1];
            if (result === ""){
                result = result + col;
            } else {
                result = result + "," + col;
            }
        }
        lastresult = lastresult + `\n` + result;
        result = "";
    }
    csvdata.value = lastresult;
})

function download(data, filename){
    let blob = new Blob([data],{type:"text/plain"});
    let a = document.createElement("a");
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.click();
}

linklink.addEventListener("click", function(){
    download(jsondata.value, "json.txt");
    download(csvdata.value, "csv.txt");
});


// "Id","UserName"
// "1","Sam Smith"
// "2","Fred Frankly"
// "1","Zachary Zupers"

// [
//  {"Id":"1","UserName":"Sam Smith"},
//  {"Id":"2","UserName":"Fred Frankly"},
//  {"Id":"1","UserName":"Zachary Zupers"},
// ]

// "Class","Student", "Number"
// "10","John Harvard", "twenty-three"
// "12","Friday Morning", "thirty-eight"
// "11","Zest Zally", "forty-four"