let para = document.getElementById("para");
let table = document.getElementById("table");
let btn = document.getElementById("btn");
let error = document.getElementById("error");
let all;
let unique;
let wordscount;
let counting=0;

function count(){
    wordscount = [];
    unique = [];
    all = para.value.split(/\W+/gm);
    if (all == ""){
        error = "Don't leave the blank in box, please !";
    } else {
        error = "";
        for (let i=0; i<all.length; i++){
            if (unique.includes(all[i]) == false){
                unique.push(all[i]);
            }
        }
        for (let i=0; i<unique.length; i++){
            for (let n=0; n<all.length; n++){
                if (unique[i] == all[n]){
                    counting = counting + 1;
                }
            }
            wordscount[i]=counting;
            counting = 0;
        }
    }

}
function createTable(){
    // delete previous table
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }
    // console.log(wordscount);
    let header = document.createElement("tr");
    let headrank = document.createElement("th");
    let headfreq = document.createElement("th");
    let headword = document.createElement("th");
    headrank.innerHTML = "Rank";
    headfreq.innerHTML = "Frequency";
    headword.innerHTML = "Word";
    table.appendChild(header);
    header.appendChild(headword);
    header.insertBefore(headfreq, headword);
    header.insertBefore(headrank, headfreq);
    // insert new table
    for (let i=0; i<wordscount.length; i++){
        let tr = document.createElement("tr");
        let rank = document.createElement("td");
        let word = document.createElement("td");
        let freq = document.createElement("td");
        word.innerHTML = unique[i];
        freq.innerHTML = wordscount[i];
        table.appendChild(tr);
        tr.appendChild(word);
        tr.insertBefore(freq, word);
        tr.insertBefore(rank, freq);
    }
}
function sortable(){
    let shouldSwitch, x, y, i;
    let rows = table.rows;
    let switching = true;
    // loop until all switching is false
    while (switching) {
        switching = false;
        for (i=1; i<rows.length-1; i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[1];
            y = rows[i+1].getElementsByTagName("td")[1];
            if (Number(x.innerHTML)<Number(y.innerHTML)){
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
function ranking(){
    for (let i=1; i<=wordscount.length; i++){
        table.rows[i].cells[0].innerHTML = i;
    }
}
btn.addEventListener("click", function(){
    count();
    createTable();
    sortable();
    ranking();
})
function increase(){
    para.style.fontSize = `${String(Number(para.style.fontSize) + 1)}vw`;
}
function decrease(){
    para.style.fontSize = `${String(Number(para.style.fontSize) - 1)}vw`;
}