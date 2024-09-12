const seatsBtn = [];
seatsBtn.push(...document.querySelectorAll(".seat"));
const disabled = getComputedStyle(document.body).getPropertyValue("--disabled");
const clickStlye = getComputedStyle(document.body).getPropertyValue("--hover");
const middleSection = document.getElementById("middle-section");
const reset = document.getElementById("reset");
const leftSection = document.getElementById("right-section");
const notification = document.getElementById("notification");
const backBtn = document.getElementById("backBtn");
const proceedPayment = document.getElementById("proceedPayment");

let clickedSeat = [];
let seat = [];
let totalPrice = 0;

proceedPayment.style.backgroundColor = disabled;
proceedPayment.style.pointerEvents = "none";

seatsBtn.forEach((btn) => {
  const seatClicked = () => {
    proceedPayment.style.backgroundColor = clickStlye;
    proceedPayment.style.pointerEvents = "All";

    if (seat.length === 1) {
      notification.innerText = "Sorry! ONE Ticket Per Purchase";
      notification.style.top = "0";
      setTimeout(() => {
        notification.style.top = "-10%";
      }, 5000);
      return;
    }

    clickedSeat = [];
    clickedSeat.push(btn.value);
    seat.push(...clickedSeat.filter((seat) => seat === btn.value));
    btn.style.backgroundColor = clickStlye;
    btn.style.color = "white";
    console.log(seat);

    totalPrice = totalPrice + 1000;

    clickedSeat.map((seat) => {
      middleSection.insertAdjacentHTML("beforeend", `<p>${seat},</p>`);
    });
    leftSection.innerHTML = `<p>${totalPrice} Naira</p>`;
  };

  btn.addEventListener("click", seatClicked, { once: true });

  const resetSeats = () => {
    seat = [];
    totalPrice = 0;
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    middleSection.innerHTML = "";
    leftSection.innerHTML = "";
    proceedPayment.style.backgroundColor = disabled;
    proceedPayment.style.pointerEvents = "none";
    location.reload(true);
    return;
  };
  reset.addEventListener("click", resetSeats);
});

const backHome = () => {
  window.location.href = "../index.html";
};

const proceedToPayment = () => {
  localStorage.setItem("seats", JSON.stringify(seat));
  localStorage.setItem("seatss", seat);
  localStorage.setItem("totalPrice", totalPrice);
  window.location.href = "../booking-detail-page/details.html";
};

backBtn.addEventListener("click", backHome);
proceedPayment.addEventListener("click", proceedToPayment);
