let button = document.getElementById("btn");
let situ = document.getElementById("situation");
button.addEventListener("click", function () {
  let username = document.getElementById("name").value;
  let password = document.getElementById("pass").value;
  let query = `?username=${username}&password=${password}`;
  fetch(`http://localhost:31415/login${query}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      button.addEventListener("click", function () {
        if (response.message == "Login Success") {
          alert("Login Successfull !");
        } else {
          alert("Login Fail");
        }
      });
    });
});

// function onRequest(request, response){
// }
// let server = http.createServer(onRequest);
// server.listen(8080, "127.0.0.1", ()=>{
//     console.log(`Server is running at http://127.0.0.1:8080/SignIn/SignIn.html`);
// })
