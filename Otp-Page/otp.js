const notification = document.getElementById("Notification");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const input3 = document.getElementById("input-3");
const input4 = document.getElementById("input-4");
const submit = document.getElementById("submit");

document.addEventListener("keyup", OtpKey);
let otpInput = "";
let otp = crypto.randomUUID();
otp = otp.slice(0, 4);

notification.innerHTML = `<p>Your code has been sent to your Email</p>`;

function OtpKey(e) {
  if (e.key === "Enter") {
    submitOtp();
  }
  if (otpInput.length === 4) {
    return;
  }
  otpInput = otpInput + e.key;
  if (input1.innerText === "") {
    input1.innerText = "*";
  } else if (input2.innerText === "") {
    input2.innerText = "*";
  } else if (input3.innerText === "") {
    input3.innerText = "*";
  } else if (input4.innerText === "") {
    input4.innerText = "*";
  }
}

submit.addEventListener("click", submitOtp);

function submitOtp() {
  if (otpInput == otp) {
    const body = document.getElementById("body");
    body.innerHTML = `<div class="progress"></div>`;
    setTimeout(() => {
      window.location.href = "../Payment-Success-page/success.html";
    }, 5000);
  } else {
    alert("OTP IS INCORRECT");
    location.reload();
  }
}

document.addEventListener(
  "DOMContentLoaded",
  () =>
    setTimeout(() => {
      notification.style.top = "0";
    }, 1000),

  setInterval(() => {
    notification.style.top = "-10%";
  }, 5000)
);
const Email = localStorage.getItem("email");

console.log(otp);
