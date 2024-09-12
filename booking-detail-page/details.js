// console.log(localStorage.getItem("seats"));
// console.log(JSON.parse(localStorage.getItem("show")));
// console.log(localStorage.getItem("date"));
// console.log(localStorage.getItem("time"));
// console.log(localStorage.getItem("location"));
// console.log(localStorage.getItem("totalPrice"));

const Show = JSON.parse(localStorage.getItem("show"));
const date = localStorage.getItem("date");
const seats = JSON.parse(localStorage.getItem("seats"));
const seatss = localStorage.getItem("seatss");
const time = localStorage.getItem("time");
const price = localStorage.getItem("totalPrice");

const ticketDetails = document.getElementById("ticket_js");

const tax = 60 * seats.length;
const totalPrice = JSON.parse(price) + tax;

ticketDetails.innerHTML = `<header>
    <h2>Booking Detail</h2>
    <p>Schedule</p>
  </header>
  <main>
    <div class="title">
      <span>Movie Title</span>
      <p>${Show[0].name}</p>
    </div>
    <div class="date">
      <span>Date</span>
      <p>${date}</p>
    </div>
    <div class="ticket">
      <div>
        <span> Ticket (${seats.length}) </span>
        <span> Hours </span>
      </div>
      <div>
        <p>${seatss}</p>
        <p>${time}</p>
      </div>
    </div>
  </main>
  <footer>
    <div class="header">Transaction Detail</div>
    <div class="main">
      <div>
        <p>REGULAR SEAT</p>
        <p>1000 naira <span>x${seats.length}</span></p>
      </div>
      <div>
        <p>Service Charge (6%)</p>
        <p>60 naira <span>x${seats.length}</span></p>
      </div>
    </div>
    <div class="footer">
      <p>Total payment</p>
      <p>${totalPrice} naira</p>
    </div>
  </footer>`;

const checkOut = document.getElementById("checkOut");
const payMent = () => {
  window.location.href = "../Otp-Page/otp.html";
};
checkOut.addEventListener("click", payMent);
