let key = localStorage.getItem("keyLogin");

let submit_button = document.getElementById("submit-btn");
submit_button.addEventListener("click", function () {
  let username = document.getElementById("name").value;
  let password = document.getElementById("pass").value;
  let query = `?username=${username}&password=${password}`;
  console.log(username);
  console.log(password);
  fetch(`http://localhost:31415/login${query}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.message == "Login Success") {
        alert("success");
        localStorage.setItem("keyLogin", response.username);
        key = localStorage.getItem("keyLogin");
        // window.open("https://sipnj.github.io/Stunary/index.html", "_self");
        window.open("http://localhost:31415/stunary/account/signin/signin.html", "_self");
      } else if (response.message == "Login Fail") {
        console.log("haha");
        alert("Login Fail");
        key = null;
      } else if (response.message == "You should not leave blank !") {
        alert("You should not leave blank !");
      }
    });
});
console.log(key == null);