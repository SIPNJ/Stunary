let submit = document.getElementById("submit");
let eachTag = document.getElementById("eachTag");
let inputForm = document.getElementById("input");
inputForm.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    SubMit();
  }
});

function SubMit() {
  let input = document.getElementById("input").value;
  console.log(input);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=ffb53bbdace7d0b05094aef809bd2445`
  )
    .then((response) => response.json())
    .then((data) => {
      createTag(data);
    });
}
function createTag(data) {
  // define all components of tag
  let col = document.createElement("div");
  let tag = document.createElement("div");
  let header = document.createElement("div");
  let headerRow = document.createElement("div");
  let bodier = document.createElement("div");
  let nameCity = document.createElement("div");
  let nameCountry = document.createElement("div");
  let temperature = document.createElement("h5");
  let cloud = document.createElement("div");
  let humid = document.createElement("div");
  let pressure = document.createElement("div");
  // add data into component
  nameCity.innerHTML = data.name;
  nameCountry.innerHTML = data.sys.country;
  temperature.innerHTML = `${(data.main.temp - 273).toFixed(2)}°C`;
  cloud.innerHTML = data.weather[0].description;
  humid.innerHTML = `${data.main.humidity}%`;
  pressure.innerHTML = `${data.main.pressure} hPa`;
  // decorate component
    //col
    col.classList.add("col-12");
    col.classList.add("col-md-6");
    col.classList.add("col-xl-3");
    // tag
    tag.classList.add("card");
    // row
    header.classList.add("card-header");
    bodier.classList.add("card-body");
    headerRow.classList.add("row");
    // city name
    nameCity.classList.add("card-title");
    nameCity.classList.add("col-7");
    nameCity.classList.add("font2");
    // country name
    nameCountry.classList.add("card-text");
    nameCountry.classList.add("col-5");
    nameCountry.classList.add("font2");
    // temperature
    temperature.classList.add("card-title");
    humid.classList.add("card-text");
    cloud.classList.add("card-text");
    pressure.classList.add("card-text");
  // append the position
  eachTag.appendChild(col);
  col.appendChild(tag);
  tag.appendChild(header);
  header.appendChild(headerRow);
  headerRow.appendChild(nameCity);
  headerRow.appendChild(nameCountry);
  tag.appendChild(bodier);
  bodier.appendChild(temperature);
  bodier.appendChild(humid);
  bodier.appendChild(cloud);
  bodier.appendChild(pressure);
}
