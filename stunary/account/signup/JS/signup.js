let submit_button = document.getElementById("submit-btn");
submit_button.addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let username = document.getElementById("name").value;
  let password = document.getElementById("pass").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let query = `?email=${email}&username=${username}&password=${password}&month=${month}&year=${year}`;
  fetch(`http://localhost:31415/logup${query}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.message == "Login Success") {

      } else if (response.message == "Login Fail") {
        console.log("haha");
        alert("Login Fail");
      } else if (response.message == "You should not leave blank !") {
        alert("You should not leave blank !");
      }
    });
});

let year = document.getElementById("year");
let timeNow = new Date();
console.log(timeNow);
year.value = timeNow.getFullYear();
