let submit_button = document.getElementById("submit-btn");
submit_button.addEventListener("click", function () {
  let username = document.getElementById("name").value;
  let password = document.getElementById("pass").value;
  let query = `?username=${username}&password=${password}`;
  fetch(`http://localhost:31415/login${query}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.message == "Login Success") {
        localStorage.setItem("keyLogin", "Success");
        localStorage.setItem("userName", response.username)
      } else if (response.message == "Login Fail") {
        console.log("haha");
        alert("Login Fail");
      } else if (response.message == "You should not leave blank !") {
        alert("You should not leave blank !");
      }
    });
});
let key = localStorage.getItem("keyLogin");
console.log(key == null);