const checkIcon = document.getElementById("checkIcon");
const viewTicket = document.getElementById("viewTicket");
const backHome = document.getElementById("backHome");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    checkIcon.style.width = "100px";
    checkIcon.style.transform = "rotateY(360deg)";
  }, 100);
});

viewTicket.addEventListener("click", () => {
  window.location.href = "../Ticket-detail-page/ticket-d.html";
});
backHome.addEventListener("click", () => {
  window.location.href = "../index.html";
});

const show = JSON.parse(localStorage.getItem("show"))[0].name;
const date = localStorage.getItem("date");
const seats = JSON.parse(localStorage.getItem("seats")).length;
const seatss = localStorage.getItem("seatss");
const time = localStorage.getItem("time");
const price = localStorage.getItem("totalPrice");

const paidTicket = {
  date: localStorage.getItem("date"),
  title: JSON.parse(localStorage.getItem("show"))[0].name,
  tickets: JSON.parse(localStorage.getItem("seats")).length,
  seats: localStorage.getItem("seatss"),
  time: localStorage.getItem("time"),
  location: localStorage.getItem("location"),
};

localStorage.setItem("paidTicket", JSON.stringify(paidTicket));

// {
//   date: "Mon, 23 Oct 2024",
//   title: "SPIDERMAN NO WAY HOME",
//   tickets: "3",
//   seats: "C8,C9, C10",
//   time: "14:50",
// },
