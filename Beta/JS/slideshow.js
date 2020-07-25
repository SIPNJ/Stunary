var slideIndex = 1;
var slide = document.getElementsByClassName("mySlide");
showslide(slideIndex);

function showslide(n){
    var i;
    if(n > slide.length){slideIndex = 1}
    if(n < 1){slideIndex = slide.length}
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    slide[slideIndex-1].style.display = "block";
}
function pluslid(n){
    showslide(slideIndex += n)
}