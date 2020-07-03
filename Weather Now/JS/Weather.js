let ErRor = document.getElementById("Err");
let submit = document.getElementById("submit");
let cityname = document.getElementById("cityname");
let eachTag = document.getElementById("eachTag");
let Tag = document.getElementById("Tag");
function SubMit(){
    let input = document.getElementById("input").value;
    weather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=ffb53bbdace7d0b05094aef809bd2445`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // define all components of tag
        let tag = document.createElement("div");
        let firstRow = document.createElement("div");
        let secRow = document.createElement("div");
        let nameCity = document.createElement("div");
        let nameCountry = document.createElement("div");
        let temperature = document.createElement("div");
        let cloud = document.createElement("div");
        let humid = document.createElement("div");
        let pressure = document.createElement("div");
        // add data into component
        nameCity.innerHTML = data.name;
        nameCountry.innerHTML = data.sys.country;
        temperature.innerHTML = `${(data.main.temp - 273).toFixed(2)}°C`;
        cloud.innerHTML = data.weather[0].description;
        humid.innerHTML = `${data.main.humidity}%`
        pressure.innerHTML = `${data.main.pressure}hPa`
        // decorate component
            // tag
            tag.style.backgroundColor = "rgb(216,191,216)";
            tag.style.margin = "3vw";
            tag.style.border = "0.15vw dashed black";
            tag.style.borderRadius = "2vw";
            // row
            firstRow.style.display = "flex";
            firstRow.style.flexFlow = "row";
            secRow.style.display = "flex";
            secRow.style.flexFlow = "row";
            // city name
            nameCity.style.margin = "2vw";
            nameCity.style.fontSize = "3vw";
            nameCity.style.fontWeight = "700";
            nameCity.style.fontFamily = "monospace";
            // country name
            nameCountry.style.margin = "2vw";
            nameCountry.style.marginTop = "auto";
            nameCountry.style.marginBottom = "auto";
            nameCountry.style.padding = "1vw";
            nameCountry.style.backgroundColor = "chocolate";
            nameCountry.style.color = "aliceblue";
            // temperature
            temperature.style.margin = "2vw";
            temperature.style.fontSize = "7vw";
            // cloud
            cloud.style.margin = "2vw";
            cloud.style.fontSize = "2vw"
            // humid
            humid.style.margin = "2vw";
            humid.style.fontSize = "2vw";
            // pressure
            pressure.style.margin = "2vw";
            pressure.style.fontSize = "2vw";
        // append the position
        eachTag.appendChild(tag);
        tag.appendChild(firstRow);
        firstRow.appendChild(nameCity);
        firstRow.appendChild(nameCountry);
        tag.appendChild(temperature);
        tag.appendChild(secRow);
        secRow.appendChild(cloud);
        secRow.appendChild(humid);
        secRow.appendChild(pressure);
    })
//     if (input == ""){
//         let err = document.createElement("div");
//         ErRor.appendChild("err");
//         err.innerHTML = "";
//     } else {
        
    // }
}