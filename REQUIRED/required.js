let toggleLight = document.getElementById("toggle-light");
toggleLight.addEventListener("click", function () {
  toggleLight.classList.toggle("toggle-dark");
  if (toggleLight.classList.contains("toggle-dark") == true) {
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
  } else {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
  }
});
