let overlay = document.getElementsByClassName("overlay")[0];
let infoPanelforElement = document.getElementsByClassName("infoPanel")[0];
let infoPanelforGroup = document.getElementsByClassName("infoPanel")[1];
function elementInfo(thing) {
  console.log(thing);
  // let element = document.getElementById(thing.id);
  overlay.classList.toggle("darken-background");
  infoPanelforElement.classList.toggle("openPanel");
}
function groupInfo(thing) {
  overlay.classList.toggle("darken-background");
  infoPanelforGroup.classList.toggle("openPanel");
}
overlay.addEventListener("click", function () {
    overlay.classList.toggle("darken-background");
  if (infoPanelforElement.classList.contains("openPanel")) {
    infoPanelforElement.classList.toggle("openPanel");
  } else if (infoPanelforGroup.classList.contains("openPanel")) {
    infoPanelforGroup.classList.toggle("openPanel");
  }
});

// const key = "yGg3vfUNjYISO6uyxB3ofg2pE7xXsvkA";
// fetch(
//   `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=Sodium`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     let html_code = data["parse"]["text"]["*"];
//     let parser = new DOMParser();
//     let html = parser.parseFromString(html_code, "text/html");
//     let tables = html.querySelectorAll(".infobox");
//     console.log(tables);
//   });
