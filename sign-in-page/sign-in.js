const pass1 = document.getElementById("pass1");
const userName = document.getElementById("user Name");
const pass2 = document.getElementById("pass2");
const formNotification = document.getElementById("form-notification");
const createBtn = document.getElementById("create");

const home = () => {
  if (userName.value === "" || emailInput.value === "") {
    formNotification.innerText = "Check Your Email / Input your User Name";
  } else if (
    pass1.value !== pass2.value ||
    (pass1.value === "" && pass2.value === "")
  ) {
    formNotification.innerText = "Password Doesn't Match / Input Password";
    formNotification.style.color = "red";
  } else if (
    emailInput.value !== "" &&
    pass1.value !== "" &&
    pass2 !== "" &&
    userName.value !== ""
  ) {
    const pass = "Approved";
    localStorage.setItem("pass", pass);
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("password", pass2.value);
    localStorage.setItem("email", emailInput.value);

    const container = document.getElementById("container");
    container.innerHTML = `<div id="spinnerHolder">
        <div class="spinner"></div>
      </div>`;

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 5000);
  }
};

createBtn.addEventListener("click", home);

const log = document.getElementById("log");

const signKey = (event) => {
  if (event.key === "Enter") {
    home();
  }
};
document.addEventListener("keydown", signKey);

const loginPage = () => {
  window.location.href = "../login-page/login.html";
};
log.addEventListener("click", loginPage);
