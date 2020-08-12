// Info Panel
let overlay0 = document.getElementsByClassName("overlay")[0];
let overlay1 = document.getElementsByClassName("overlay")[1];
let infoPanelforElement = document.getElementsByClassName("infoPanel")[0];
let infoPanelforGroup = document.getElementsByClassName("infoPanel")[1];
function elementInfo(thing) {
  console.log(thing);
  // let element = document.getElementById(thing.id);
  overlay0.classList.toggle("darken-background");
  infoPanelforElement.classList.toggle("openPanel");
}
function groupInfo(thing) {
  overlay0.classList.toggle("darken-background");
  infoPanelforGroup.classList.toggle("openPanel");
}
overlay0.addEventListener("click", function () {
  overlay0.classList.toggle("darken-background");
  if (infoPanelforElement.classList.contains("openPanel")) {
    infoPanelforElement.classList.toggle("openPanel");
  } else if (infoPanelforGroup.classList.contains("openPanel")) {
    infoPanelforGroup.classList.toggle("openPanel");
  }
});

// Get all elements
let element = document.getElementsByClassName("element");
let s_element = document.getElementsByClassName("s-element");
let p_element = document.getElementsByClassName("p-element");
let d_element = document.getElementsByClassName("d-element");
let f_element = document.getElementsByClassName("f-element");
let alkali_metal = document.getElementsByClassName("alkali");
let alkaline_earth_metal = document.getElementsByClassName("alkaline-earth");
let transition_metal = document.getElementsByClassName("transition");
let post_transition_metal = document.getElementsByClassName("post-transition");
let metalloid = document.getElementsByClassName("metalloid");
let non_metal = document.getElementsByClassName("non-metal");
let noble_gas = document.getElementsByClassName("noble-gas");
let lanthanoid = document.getElementsByClassName("lanthanoid");
let actinoid = document.getElementsByClassName("actinoid");
// Title group A
let groupIA = document.getElementById("IA");
let groupIIA = document.getElementById("IIA");
let groupIIIA = document.getElementById("IIIA");
let groupIVA = document.getElementById("IVA");
let groupVA = document.getElementById("VA");
let groupVIA = document.getElementById("VIA");
let groupVIIA = document.getElementById("VIIA");
let groupVIIIA = document.getElementById("VIIIA");
// Title group B
let groupIB = document.getElementById("IB");
let groupIIB = document.getElementById("IIB");
let groupIIIB = document.getElementById("IIIB");
let groupIVB = document.getElementById("IVB");
let groupVB = document.getElementById("VB");
let groupVIB = document.getElementById("VIB");
let groupVIIB = document.getElementById("VIIB");
let groupVIIIB = document.getElementById("VIIIB");
// Title f-block
let groupLanthanoid = document.getElementById("Lanthanoid");
let groupActinoid = document.getElementById("Actinoid");
// Group Number
let group1 = document.getElementsByClassName("alkali");
let group2 = document.getElementsByClassName("alkaline-earth");
let group3 = document.getElementsByClassName("Scandium-group");
let group4 = document.getElementsByClassName("Titanium-group");
let group5 = document.getElementsByClassName("Vanadium-group");
let group6 = document.getElementsByClassName("Chromium-group");
let group7 = document.getElementsByClassName("Manganese-group");
let group8 = document.getElementsByClassName("Iron-group");
let group9 = document.getElementsByClassName("Cobalt-group");
let group10 = document.getElementsByClassName("Nikel-group");
let group11 = document.getElementsByClassName("Copper-group");
let group12 = document.getElementsByClassName("Zinc-group");
let group13 = document.getElementsByClassName("Boron-group");
let group14 = document.getElementsByClassName("Carbon-group");
let group15 = document.getElementsByClassName("Nitrogen-group");
let group16 = document.getElementsByClassName("Oxygen-group");
let group17 = document.getElementsByClassName("Halogen");
let group18 = document.getElementsByClassName("noble-gas");
// Group Hover

// Group 1
groupIA.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group1.length; i++) {
    group1[i].style.opacity = "1";
  }
  groupIA.style.opacity = "1";
});
groupIA.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 2
groupIIA.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group2.length; i++) {
    group2[i].style.opacity = "1";
  }
  groupIIA.style.opacity = "1";
});
groupIIA.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 3
groupIIIB.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group3.length; i++) {
    group3[i].style.opacity = "1";
  }
  groupIIIB.style.opacity = "1";
});
groupIIIB.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 4
groupIVB.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group4.length; i++) {
    group4[i].style.opacity = "1";
  }
  groupIVB.style.opacity = "1";
});
groupIVB.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 5
groupVB.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group5.length; i++) {
    group5[i].style.opacity = "1";
  }
  groupVB.style.opacity = "1";
});
groupVB.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 6
groupVIB.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group6.length; i++) {
    group6[i].style.opacity = "1";
  }
  groupVIB.style.opacity = "1";
});
groupVIB.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 7
groupVIIB.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group7.length; i++) {
    group7[i].style.opacity = "1";
  }
  groupVIIB.style.opacity = "1";
});
groupVIIB.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 8, 9, 10
groupVIIIB.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group8.length; i++) {
    group8[i].style.opacity = "1";
  }
  for (let i = 0; i < group9.length; i++) {
    group9[i].style.opacity = "1";
  }
  for (let i = 0; i < group10.length; i++) {
    group10[i].style.opacity = "1";
  }
  groupVIIIB.style.opacity = "1";
});
groupVIIIB.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 11
groupIB.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group11.length; i++) {
    group11[i].style.opacity = "1";
  }
  groupIB.style.opacity = "1";
});
groupIB.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 12
groupIIB.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group12.length; i++) {
    group12[i].style.opacity = "1";
  }
  groupIIB.style.opacity = "1";
});
groupIIB.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 13
groupIIIA.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group13.length; i++) {
    group13[i].style.opacity = "1";
  }
  groupIIIA.style.opacity = "1";
});
groupIIIA.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 14
groupIVA.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group14.length; i++) {
    group14[i].style.opacity = "1";
  }
  groupIVA.style.opacity = "1";
});
groupIVA.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 15
groupVA.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group15.length; i++) {
    group15[i].style.opacity = "1";
  }
  groupVA.style.opacity = "1";
});
groupVA.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 16
groupVIA.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group16.length; i++) {
    group16[i].style.opacity = "1";
  }
  groupVIA.style.opacity = "1";
});
groupVIA.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 17
groupVIIA.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group17.length; i++) {
    group17[i].style.opacity = "1";
  }
  groupVIIA.style.opacity = "1";
});
groupVIIA.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Group 18
groupVIIIA.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < group18.length; i++) {
    group18[i].style.opacity = "1";
  }
  groupVIIIA.style.opacity = "1";
});
groupVIIIA.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Lanthanoid
groupLanthanoid.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < lanthanoid.length; i++) {
    lanthanoid[i].style.opacity = "1";
  }
  groupLanthanoid.style.opacity = "1";
});
groupLanthanoid.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});
// Actinoid
groupActinoid.addEventListener("mouseover", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "0.25";
  }
  for (let i = 0; i < actinoid.length; i++) {
    actinoid[i].style.opacity = "1";
  }
  groupActinoid.style.opacity = "1";
});
groupActinoid.addEventListener("mouseout", function () {
  for (let i = 0; i < element.length; i++) {
    element[i].style.opacity = "1";
  }
});

// Memory for all display data
let memory_of_name = [];
let memory_of_number = [];
let memory_of_mass = []
for (let i = 0; i < element.length; i++) {
  let element_name = element[i].querySelector(".element-name");
  memory_of_name.push(element_name);
  let element_number = element[i].querySelector(".element-number");
  memory_of_number.push(element_number);
  let element_mass = element[i].querySelector(".element-mass");
  memory_of_mass.push(element_mass);
}
// Editable Buttons
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
// HIDE NAME
let hide_name = document.getElementById("hide-name");
hide_name.addEventListener("click", function () {
  hide_name.classList.toggle("active-button-for-code");
  if (hide_name.classList.contains("active-button-for-code") == true) {
    for (let i = 0; i < element.length; i++) {
      let element_name = element[i].querySelector(".element-name");
      if (element_name !== null) {
        element_name.remove();
      }
    }
  } else {
    for (let i = 0; i < element.length; i++) {
      let element_symbol = element[i].querySelector(".element-symbol");
      if (memory_of_name[i] == null) {
        continue;
      } else {
        insertAfter(memory_of_name[i], element_symbol);
      }
    }
  }
});
// HIDE NUMBER
let hide_number = document.getElementById("hide-number");
hide_number.addEventListener("click", function () {
  hide_number.classList.toggle("active-button-for-code");
  if (hide_number.classList.contains("active-button-for-code") == true) {
    for (let i = 0; i < element.length; i++) {
      let element_number = element[i].querySelector(".element-number");
      if (element_number !== null) {
        element_number.remove();
      }
    }
  } else {
    for (let i = 0; i < element.length; i++) {
      let element_symbol = element[i].querySelector(".element-symbol");
      if (memory_of_number[i] == null) {
        continue;
      } else {
        insertAfter(memory_of_number[i], element_symbol);
      }
    }
  }
});
// HIDE MASS
let hide_mass = document.getElementById("hide-mass");
hide_mass.addEventListener("click", function () {
  hide_mass.classList.toggle("active-button-for-code");
  if (hide_mass.classList.contains("active-button-for-code") == true) {
    for (let i = 0; i < element.length; i++) {
      let element_mass = element[i].querySelector(".element-mass");
      if (element_mass !== null) {
        element_mass.remove();
      }
    }
  } else {
    for (let i = 0; i < element.length; i++) {
      let element_symbol = element[i].querySelector(".element-symbol");
      if (memory_of_mass[i] == null) {
        continue;
      } else {
        insertAfter(memory_of_mass[i], element_symbol);
      }
    }
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