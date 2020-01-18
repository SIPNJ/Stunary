var inbtn = document.getElementsByClassName("inbtn");
var menucontent = document.getElementsByClassName("menucontent");
for(let i=0; i<menucontent.length; i++){
    menucontent[i].style.display = `none`;
}
menucontent[0].style.display = `block`;

function openMenu(event){
    for(let i=0; i<menucontent.length; i++){
        menucontent[i].style.display = `none`;
    }
    document.getElementById(event).style.display = `block`;
}