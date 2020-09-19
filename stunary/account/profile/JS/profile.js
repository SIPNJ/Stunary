let avatar = document.getElementById("avatar");
let birthday = document.getElementById("birthday");
let gender = document.getElementById("gender");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
fetch(`/profileGetting?username=${localStorage.getItem("keyLogin")}`)
  .then((data) => data.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (localStorage.getItem("keyLogin") == data[i].username) {
        birthday.innerHTML = `${data[i].month} ${data[i].year}`;
        gender.innerHTML = `${data[i].gender}`;
        email.innerHTML = `${data[i].email}`;
        phone.innerHTML = `${data[i].phone}`;
      }
    }
  });
function openFile(event) {
  let reader = new FileReader();
  reader.onload = function () {
    avatar.src = reader.result;
    console.log(reader.result);
    avatar.style.objectFit = "cover";
  };
  reader.readAsDataURL(event.target.files[0]);
}
