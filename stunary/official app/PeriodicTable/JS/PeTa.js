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
// Group Title
let group_number = document.getElementsByClassName("group-number");
let period_number = document.getElementsByClassName("period-number");
// Title Group A
let groupIA = document.getElementById("IA");
let groupIIA = document.getElementById("IIA");
let groupIIIA = document.getElementById("IIIA");
let groupIVA = document.getElementById("IVA");
let groupVA = document.getElementById("VA");
let groupVIA = document.getElementById("VIA");
let groupVIIA = document.getElementById("VIIA");
let groupVIIIA = document.getElementById("VIIIA");
// Title Group B
let groupIB = document.getElementById("IB");
let groupIIB = document.getElementById("IIB");
let groupIIIB = document.getElementById("IIIB");
let groupIVB = document.getElementById("IVB");
let groupVB = document.getElementById("VB");
let groupVIB = document.getElementById("VIB");
let groupVIIB = document.getElementById("VIIB");
let groupVIIIBa = document.getElementById("VIIIBa");
let groupVIIIB = document.getElementById("VIIIB");
let groupVIIIBc = document.getElementById("VIIIBc");
// Title f-block
let groupLanthanoid = document.getElementById("Lanthanoid");
let groupActinoid = document.getElementById("Actinoid");
// Group Elements
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
//  Hover

// SMALL SIZE

// MEDIUM SIZE

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
// Group 8, 9, 10 is in change IUPAC function
// HOVER Group 8, 9, 10
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
let memory_of_mass = [];
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
// CHANGE TO IUPAC LABEL
let change_IUPAC = document.getElementById("change-IUPAC");
change_IUPAC.addEventListener("click", function () {
  change_IUPAC.classList.toggle("active-button-for-code");
  if (change_IUPAC.classList.contains("active-button-for-code") == true) {
    for (let i = 0; i < 18; i++) {
      group_number[i].innerHTML = i + 1;
    }
    // HOVER Group 8
    groupVIIIBa.addEventListener("mouseover", function () {
      for (let i = 0; i < element.length; i++) {
        element[i].style.opacity = "0.25";
      }
      for (let i = 0; i < group8.length; i++) {
        group8[i].style.opacity = "1";
      }
      groupVIIIBa.style.opacity = "1";
    });
    groupVIIIBa.addEventListener("mouseout", function () {
      for (let i = 0; i < element.length; i++) {
        element[i].style.opacity = "1";
      }
    });
    // HOVER Group 9
    groupVIIIB.addEventListener("mouseover", function () {
      for (let i = 0; i < element.length; i++) {
        element[i].style.opacity = "0.25";
      }
      for (let i = 0; i < group9.length; i++) {
        group9[i].style.opacity = "1";
      }
      groupVIIIB.style.opacity = "1";
    });
    groupVIIIB.addEventListener("mouseout", function () {
      for (let i = 0; i < element.length; i++) {
        element[i].style.opacity = "1";
      }
    });
    // HOVER Group 10
    groupVIIIBc.addEventListener("mouseover", function () {
      for (let i = 0; i < element.length; i++) {
        element[i].style.opacity = "0.25";
      }
      for (let i = 0; i < group10.length; i++) {
        group10[i].style.opacity = "1";
      }
      groupVIIIBc.style.opacity = "1";
    });
    groupVIIIBc.addEventListener("mouseout", function () {
      for (let i = 0; i < element.length; i++) {
        element[i].style.opacity = "1";
      }
    });
  } else {
    group_number[0].innerHTML = "IA";
    group_number[1].innerHTML = "IIA";
    group_number[2].innerHTML = "IIIB";
    group_number[3].innerHTML = "IVB";
    group_number[4].innerHTML = "VB";
    group_number[5].innerHTML = "VIB";
    group_number[6].innerHTML = "VIIB";
    group_number[7].innerHTML = "";
    group_number[8].innerHTML = "VIIIB";
    group_number[9].innerHTML = "";
    group_number[10].innerHTML = "IB";
    group_number[11].innerHTML = "IIB";
    group_number[12].innerHTML = "IIIA";
    group_number[13].innerHTML = "IVA";
    group_number[14].innerHTML = "VA";
    group_number[15].innerHTML = "VIA";
    group_number[16].innerHTML = "VIIA";
    group_number[17].innerHTML = "VIIIA";
    // HOVER Group 8, 9, 10
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
    groupVIIIBa.addEventListener("mouseover", function () {});
    groupVIIIBc.addEventListener("mouseover", function () {});
  }
});

// Info Panel
let overlay0 = document.getElementsByClassName("overlay")[0];
let overlay1 = document.getElementsByClassName("overlay")[1];
let infoPanelforElement = document.getElementsByClassName("infoPanel")[0];
let infoPanelforGroup = document.getElementsByClassName("infoPanel")[1];
function elementInfo(thing) {
  overlay0.classList.toggle("darken-background");
  infoPanelforElement.classList.toggle("openPanel");
  let elementName = document.getElementById(thing.id).getElementsByClassName("element-name")[0].innerHTML;
  fetch(
    `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${elementName}`
  )
  .then((response) => response.json())
  .then((data) => {
    // Get InfoBox
    let html_code = data["parse"]["text"]["*"];
    let parser = new DOMParser();
    let html = parser.parseFromString(html_code, "text/html");
    let table = html.querySelectorAll(".infobox")[0];
    console.log(table);
  });
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

// const key = "yGg3vfUNjYISO6uyxB3ofg2pE7xXsvkA";

// REQUIRED FILE SUPPORT
let d_block_for_small = document.getElementsByClassName("d-block-for-small");
if (screen.width < 568) {
  for (let i = 0; i < d_block_for_small; i++) {
    d_block_for_small[i].classList.toggle("d-none");
  }
} else {
  for (let i = 0; i < d_block_for_small; i++) {
    d_block_for_small[i].classList.toggle("d-block");
  }
  document.getElementsByClassName("rotate-error")[0].style.opacity = "0";
}
document.getElementById("toggle-light").addEventListener("click", function () {
  if (
    document.getElementById("toggle-light").classList.contains("toggle-dark") ==
    true
  ) {
    // s-block Elements
    for (let i = 0; i < s_element.length; i++) {
      s_element[i].addEventListener("mouseover", function () {
        s_element[i].style.borderColor = "rgb(255, 255, 255)";
        s_element[i].style.borderStyle = "solid";
        s_element[i].style.borderWidth = "1px";
      });
    }
    for (let i = 0; i < s_element.length; i++) {
      s_element[i].addEventListener("mouseout", function () {
        s_element[i].style.borderColor = "rgb(0, 0, 0)";
        s_element[i].style.borderStyle = "solid";
        s_element[i].style.borderWidth = "1px";
      });
    }
    // p-block Elements
    for (let i = 0; i < p_element.length; i++) {
      p_element[i].addEventListener("mouseover", function () {
        p_element[i].style.borderColor = "rgb(255, 255, 255)";
        p_element[i].style.borderStyle = "solid";
        p_element[i].style.borderWidth = "1px";
      });
    }
    for (let i = 0; i < p_element.length; i++) {
      p_element[i].addEventListener("mouseout", function () {
        p_element[i].style.borderColor = "rgb(0, 0, 0)";
        p_element[i].style.borderStyle = "solid";
        p_element[i].style.borderWidth = "1px";
      });
    }
    // d-block Elements
    for (let i = 0; i < d_element.length; i++) {
      d_element[i].addEventListener("mouseover", function () {
        d_element[i].style.borderColor = "rgb(255, 255, 255)";
        d_element[i].style.borderStyle = "solid";
        d_element[i].style.borderWidth = "1px";
      });
    }
    for (let i = 0; i < d_element.length; i++) {
      d_element[i].addEventListener("mouseout", function () {
        d_element[i].style.borderColor = "rgb(0, 0, 0)";
        d_element[i].style.borderStyle = "solid";
        d_element[i].style.borderWidth = "1px";
      });
    }
    // f-block Elements
    for (let i = 0; i < f_element.length; i++) {
      f_element[i].addEventListener("mouseover", function () {
        f_element[i].style.borderColor = "rgb(255, 255, 255)";
        f_element[i].style.borderStyle = "solid";
        f_element[i].style.borderWidth = "1px";
      });
    }
    for (let i = 0; i < f_element.length; i++) {
      f_element[i].addEventListener("mouseout", function () {
        f_element[i].style.borderColor = "rgb(0, 0, 0)";
        f_element[i].style.borderStyle = "solid";
        f_element[i].style.borderWidth = "1px";
      });
    }
  } else if (
    document.getElementById("toggle-light").classList.contains("toggle-dark") ==
    false
  ) {
    // s-block Elements
    for (let i = 0; i < s_element.length; i++) {
      s_element[i].addEventListener("mouseover", function () {
        s_element[i].style.borderColor = "rgb(0, 0, 0)";
        s_element[i].style.borderStyle = "solid";
        s_element[i].style.borderWidth = "1px";
      });
    }
    for (let i = 0; i < s_element.length; i++) {
      s_element[i].addEventListener("mouseout", function () {
        s_element[i].style.borderColor = "rgb(255, 255, 255)";
        s_element[i].style.borderStyle = "solid";
        s_element[i].style.borderWidth = "1px";
      });
    }
    // p-block Elements
    for (let i = 0; i < p_element.length; i++) {
      p_element[i].addEventListener("mouseover", function () {
        p_element[i].style.borderColor = "rgb(0, 0, 0)";
        p_element[i].style.borderStyle = "solid";
        p_element[i].style.borderWidth = "1px";
      });
    }
    for (let i = 0; i < p_element.length; i++) {
      p_element[i].addEventListener("mouseout", function () {
        p_element[i].style.borderColor = "rgb(255, 255, 255)";
        p_element[i].style.borderStyle = "solid";
        p_element[i].style.borderWidth = "1px";
      });
    }
    // d-block Elements
    for (let i = 0; i < d_element.length; i++) {
      d_element[i].addEventListener("mouseover", function () {
        d_element[i].style.borderColor = "rgb(0, 0, 0)";
        d_element[i].style.borderStyle = "solid";
        d_element[i].style.borderWidth = "1px";
      });
    }
    for (let i = 0; i < d_element.length; i++) {
      d_element[i].addEventListener("mouseout", function () {
        d_element[i].style.borderColor = "rgb(255, 255, 255)";
        d_element[i].style.borderStyle = "solid";
        d_element[i].style.borderWidth = "1px";
      });
    }
    // f-block Elements
    for (let i = 0; i < f_element.length; i++) {
      f_element[i].addEventListener("mouseover", function () {
        f_element[i].style.borderColor = "rgb(0, 0, 0)";
        f_element[i].style.borderStyle = "solid";
        f_element[i].style.borderWidth = "1px";
      });
    }
    for (let i = 0; i < f_element.length; i++) {
      f_element[i].addEventListener("mouseout", function () {
        f_element[i].style.borderColor = "rgb(255, 255, 255)";
        f_element[i].style.borderStyle = "solid";
        f_element[i].style.borderWidth = "1px";
      });
    }
  }
});
// s-block Elements
for (let i = 0; i < s_element.length; i++) {
  s_element[i].addEventListener("mouseover", function () {
    s_element[i].style.borderColor = "rgb(0, 0, 0)";
    s_element[i].style.borderStyle = "solid";
    s_element[i].style.borderWidth = "1px";
  });
}
for (let i = 0; i < s_element.length; i++) {
  s_element[i].addEventListener("mouseout", function () {
    s_element[i].style.borderColor = "rgb(255, 255, 255)";
    s_element[i].style.borderStyle = "solid";
    s_element[i].style.borderWidth = "1px";
  });
}
// p-block Elements
for (let i = 0; i < p_element.length; i++) {
  p_element[i].addEventListener("mouseover", function () {
    p_element[i].style.borderColor = "rgb(0, 0, 0)";
    p_element[i].style.borderStyle = "solid";
    p_element[i].style.borderWidth = "1px";
  });
}
for (let i = 0; i < p_element.length; i++) {
  p_element[i].addEventListener("mouseout", function () {
    p_element[i].style.borderColor = "rgb(255, 255, 255)";
    p_element[i].style.borderStyle = "solid";
    p_element[i].style.borderWidth = "1px";
  });
}
// d-block Elements
for (let i = 0; i < d_element.length; i++) {
  d_element[i].addEventListener("mouseover", function () {
    d_element[i].style.borderColor = "rgb(0, 0, 0)";
    d_element[i].style.borderStyle = "solid";
    d_element[i].style.borderWidth = "1px";
  });
}
for (let i = 0; i < d_element.length; i++) {
  d_element[i].addEventListener("mouseout", function () {
    d_element[i].style.borderColor = "rgb(255, 255, 255)";
    d_element[i].style.borderStyle = "solid";
    d_element[i].style.borderWidth = "1px";
  });
}
// f-block Elements
for (let i = 0; i < f_element.length; i++) {
  f_element[i].addEventListener("mouseover", function () {
    f_element[i].style.borderColor = "rgb(0, 0, 0)";
    f_element[i].style.borderStyle = "solid";
    f_element[i].style.borderWidth = "1px";
  });
}
for (let i = 0; i < f_element.length; i++) {
  f_element[i].addEventListener("mouseout", function () {
    f_element[i].style.borderColor = "rgb(255, 255, 255)";
    f_element[i].style.borderStyle = "solid";
    f_element[i].style.borderWidth = "1px";
  });
}
