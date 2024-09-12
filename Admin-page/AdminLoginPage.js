const Admin_Email = "aleeh@gmail.com";
const Admin_Password = "1234";

document.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;
  if (inputEmail === Admin_Email && inputPassword === Admin_Password) {
    window.location.href = "./Admin-working-space/main.html";
  } else {
    alert("Incorrect Admin Info");
  }
});
