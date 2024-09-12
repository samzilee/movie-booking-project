const notification = document.getElementById("form-notification");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");
const register = document.getElementById("reg");

const UserEmail = localStorage.getItem("email");
const userPassword = localStorage.getItem("password");

const login = () => {
  if (email.value !== "" && password.value !== "") {
    if (UserEmail === email.value && userPassword === password.value) {
      const container = document.getElementById("container");
      container.innerHTML = ` <div id="spinnerHolder">
        <div class="spinner"></div>
      </div>`;
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 5000);
      const pass = "Approved";
      localStorage.setItem("pass", pass);
    } else {
      notification.innerHTML =
        "Account Not Registered, Click the green text below to register.";
    }
  } else {
    if (email.value === "" && password.value === "") {
      notification.innerText = "Email And Password is Empty.";
    } else if (email.value === "") {
      notification.innerText = "Email is Empty.";
    } else if (password.value === "") {
      notification.innerText = "Password is Empty.";
    }
  }
};

loginBtn.addEventListener("click", login);

const loginKey = (event) => {
  if (event.key === "Enter") {
    login();
  }
};
document.addEventListener("keydown", loginKey);

const registerPage = () => {
  window.location.href = "../sign-in-page/sign-in.html";
};

register.addEventListener("click", registerPage);

const AdminPageDirection = document.getElementById("AdminPageDirection");

AdminPageDirection.addEventListener("click", () => {
  window.location.href = "../Admin-page/AdminLoginPage.html";
});
