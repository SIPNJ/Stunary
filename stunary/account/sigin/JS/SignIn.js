let button = document.getElementById("btn");
button.addEventListener("click", function () {
  let username = document.getElementById("name").value;
  let password = document.getElementById("pass").value;
  let query = `?username=${username}&password=${password}`;
  fetch(`http://localhost:31415/login${query}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.message == "Login Success") {
        alert("Login Successful !");
      } else if (response.message == "Login Fail") {
        console.log("haha");
        alert("Login Fail");
      } else if (response.message == "You should not leave blank !") {
        alert("You should not leave blank !");
      }
    });
});

// function onRequest(request, response){
// }
// let server = http.createServer(onRequest);
// server.listen(8080, "127.0.0.1", ()=>{
//     console.log(`Server is running at http://127.0.0.1:8080/SignIn/SignIn.html`);
// })
