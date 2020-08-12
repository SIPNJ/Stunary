let toggleLight = document.getElementById("toggle-light");
let bgthird0 = document.getElementsByClassName("bgthird0");
let bgthird1 = document.getElementsByClassName("bgthird1");
let bgthird2 = document.getElementsByClassName("bgthird2");
let bgthird3 = document.getElementsByClassName("bgthird3");
let bdthird0 = document.getElementsByClassName("bdthird0");
let bdthird1 = document.getElementsByClassName("bdthird1");
let bdthird2 = document.getElementsByClassName("bdthird2");
let bdthird3 = document.getElementsByClassName("bdthird3");
let third0 = document.getElementsByClassName("third0");
let third1 = document.getElementsByClassName("third1");
let third2 = document.getElementsByClassName("third2");
let third3 = document.getElementsByClassName("third3");

toggleLight.addEventListener("click", function () {
  toggleLight.classList.toggle("toggle-dark");
  if (toggleLight.classList.contains("toggle-dark") == true) {
    // DOCUMENT COLOR
    document.body.style.backgroundColor = "rgb(0, 0 ,0)";
    // BACKGROUND COLOR
    for (let i = 0; i < bgthird0.length; i++) {
      bgthird0[i].style.backgroundColor = "rgb(255, 255, 255)";
    }
    for (let i = 0; i < bgthird1.length; i++) {
      bgthird1[i].style.backgroundColor = "rgb(0, 0, 0)";
    }
    for (let i = 0; i < bgthird2.length; i++) {
      bgthird2[i].style.backgroundColor = "rgb(224, 224, 228)";
    }
    for (let i = 0; i < bgthird3.length; i++) {
      bgthird3[i].style.backgroundColor = "rgb(45, 45, 45)";
    }
    // TEXT COLOR
    for (let i = 0; i < third0.length; i++) {
      third0[i].style.color = "rgb(255, 255, 255)";
    }
    for (let i = 0; i < third1.length; i++) {
      third1[i].style.color = "rgb(0, 0, 0)";
    }
    for (let i = 0; i < third2.length; i++) {
      third2[i].style.color = "rgb(224, 224, 228)";
    }
    for (let i = 0; i < third3.length; i++) {
      third3[i].style.color = "rgb(45, 45, 45)";
    }
    // BORDER COLOR
    for (let i = 0; i < bdthird0.length; i++) {
      bdthird0[i].style.borderColor = "rgb(255, 255, 255)";
    }
    for (let i = 0; i < bdthird1.length; i++) {
      bdthird1[i].style.borderColor = "rgb(0, 0, 0)";
    }
    for (let i = 0; i < bdthird2.length; i++) {
      bdthird0[i].style.borderColor = "rgb(224, 224, 228)";
    }
    for (let i = 0; i < bdthird3.length; i++) {
      bdthird1[i].style.borderColor = "rgb(45, 45, 45)";
    }
  } else {
    // DOCUMENT COLOR
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    // BACKGROUND COLOR
    for (let i = 0; i < bgthird0.length; i++) {
      bgthird0[i].style.backgroundColor = "rgb(0, 0, 0)";
    }
    for (let i = 0; i < bgthird1.length; i++) {
      bgthird1[i].style.backgroundColor = "rgb(255, 255, 255)";
    }
    for (let i = 0; i < bgthird2.length; i++) {
      bgthird2[i].style.backgroundColor = "rgb(45, 45, 45)";
    }
    for (let i = 0; i < bgthird3.length; i++) {
      bgthird3[i].style.backgroundColor = "rgb(224, 224, 228)";
    }
    // TEXT COLOR
    for (let i = 0; i < third0.length; i++) {
      third0[i].style.color = "rgb(0, 0, 0)";
    }
    for (let i = 0; i < third1.length; i++) {
      third1[i].style.color = "rgb(255,255,255)";
    }
    for (let i = 0; i < third2.length; i++) {
      third2[i].style.color = "rgb(45, 45, 45)";
    }
    for (let i = 0; i < third3.length; i++) {
      third3[i].style.color = "rgb(224, 224, 228)";
    }
    // BORDER COLOR
    for (let i = 0; i < bdthird0.length; i++) {
      bdthird0[i].style.borderColor = "rgb(0, 0, 0)";
    }
    for (let i = 0; i < bdthird1.length; i++) {
      bdthird1[i].style.borderColor = "rgb(255,255,255)";
    }
    for (let i = 0; i < bdthird2.length; i++) {
      bdthird2[i].style.borderColor = "rgb(45, 45, 45)";
    }
    for (let i = 0; i < bdthird3.length; i++) {
      bdthird3[i].style.borderColor = "rgb(224, 224, 228)";
    }
  }
});
