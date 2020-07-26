let name = document.getElementById("name");
let pass = document.getElementById("pass");
let button = document.getElementById("btn");

fetch("ispass.json")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
  });
// button.addEventListener("click", function(){
//     name.value
// })

// function onRequest(request, response){

// }
// let server = http.createServer(onRequest);
// server.listen(8080, "127.0.0.1", ()=>{
//     console.log(`Server is running at http://127.0.0.1:8080/SignIn/SignIn.html`);
// })
