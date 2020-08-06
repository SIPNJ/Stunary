// let card = document.getElementsByClassName("card");
// let cards = [...card];
// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("click", displayCard);
// }
// function displayCard() {
//   this.classlist.toggle("open");
//   this.classlist.toggle("show");
//   this.classlist.toggle("disabled");
// }
let n;
let switching = true;
let move = 0;
let color = document.getElementsByClassName("color");
let mask = document.getElementsByClassName("mask");
let allElements = [
  "green",
  "red",
  "blue",
  "yellow",
  "brown",
  "orange",
  "purple",
  "pink",
  "green",
  "red",
  "blue",
  "yellow",
  "brown",
  "orange",
  "purple",
  "pink",
];
// for (let i = 0; i < masks.length; i++) {
//   masks[i].addEventListener("click", function () {
//     this.classList.toggle("hidden");
//   });
// }

for (let i = 0; i < color.length; i++) {
  mask[i].addEventListener("click", function () {
    // unhide/ uncover card
    color[i].classList.toggle("hidden");
    // count the move
    move++;
    document.getElementById("move").innerHTML = move;
    // count odd or even moves, to recognise same card
    switching = !switching;
    if (switching == false) {
      // remember first card
      n = i;
    } else if (
      switching == true &&
      color[n].style.backgroundColor !== color[i].style.backgroundColor
    ) {
      // hide 2 different cards if wrong
      setTimeout(function () {
        color[n].classList.toggle("hidden", true);
        color[i].classList.toggle("hidden", true);
      }, 500);
    } else if (
      switching == true &&
      color[n].style.backgroundColor == color[i].style.backgroundColor
    ) {
      // unhide 2 cards if right
      color[i].classList.toggle("show", true);
      color[n].classList.toggle("show", true);
    }
  });
}
function shuffle(array) {
  array.sort(function () {
    return 0.5 - Math.random();
  });
}
function colorise() {
  shuffle(allElements);
  for (let i = 0; i < color.length; i++) {
    color[i].style.backgroundColor = allElements[i];
  }
}
function StartGame() {
  colorise();
  for (let i = 0; i < color.length; i++) {
    color[i].classList.toggle("hidden", true);
  }
  move = 0;
  document.getElementById("move").innerHTML = move;
  switching = true;
}
function checkAll(){
  if(mask[0].sty){
    
  }
}
