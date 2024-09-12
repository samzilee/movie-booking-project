const rightSection = document.querySelector(".right-section");

rightSection.innerHTML = ` <input id="myTicket" class="myTicket" type="button" value="My Ticket" />
<input id="logout" class="logout" type="button" value="Logout" />`;
const myticket = document.getElementById("myTicket");
const logout = document.getElementById("logout");

const logoutTakeToLoginPage = () => {
  localStorage.removeItem("pass");
  window.location.href = "../login-page/login.html";
};

logout.addEventListener("click", logoutTakeToLoginPage);
const myTicketList = document.getElementById("myTicketList");
let tickets =
  JSON.parse(localStorage.getItem("tickets")) ||
  [
    // {
    //   date: "Mon, 23 Oct 2024",
    //   title: "SPIDERMAN NO WAY HOME",
    //   tickets: "3",
    //   seats: "C8,C9, C10",
    //   time: "14:50",
    // },
    // {
    //   date: "Tue, 23 Dec 2024",
    //   title: "POLIS EVO 3",
    //   tickets: "3",
    //   seats: "C8,C9, C10",
    //   time: "14:50",
    // },
    // {
    //   date: "Mon, 23 Oct 2024",
    //   title: "SPIDERMAN NO WAY HOME",
    //   tickets: "3",
    //   seats: "C8,C9, C10",
    //   time: "14:50",
    // },
  ];

if (JSON.parse(localStorage.getItem("paidTicket")) !== null) {
  tickets.push(JSON.parse(localStorage.getItem("paidTicket")));
}

localStorage.removeItem("paidTicket");

localStorage.setItem("tickets", JSON.stringify(tickets));
tickets.lenght;

tickets = tickets.filter((ticket) => ticket);
function upcomingTickets() {
  if (tickets.length === 0) {
    myTicketList.innerHTML = "<marquee>NOTHING TO SEE HERE</marquee>";
    myTicketList.style.maxWidth = "100%";
    myTicketList.style.color = "white";
    myTicketList.style.fontSize = "40px";
    myTicketList.style.textWrap = "nowrap";
    myTicketList.style.width = "100%";
  }
  tickets.forEach((ticket, index) => {
    myTicketList.insertAdjacentHTML(
      "afterbegin",
      `<div class="ticket">
        <div id="invoice${index}">
            <header>
              <span>Date</span>
              <p>${ticket.date}</p>
            </header>
            <main>
              <span>Movie Title</span>
              <p>${ticket.title}</p>
            </main>
            <footer>
              <aside>
                <span>tiket(${ticket.tickets})</span>
                <p>${ticket.seats}</p>
              </aside>
              <aside>
                <span>Hours</span>
                <p>${ticket.time}</p>
              </aside>
            </footer>
        </div>
              <input id="${ticket.seats}" type="button" value="Download Ticket" />
          </div>`
    );
    console.log(ticket);

    const btn = document.getElementById(`${ticket.seats}`);
    btn.addEventListener("click", () => {
      const Ticket = `<html lang="en" id="Ticket">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Ticket</title>
    </head>
    <style>
        * {
      margin: 0;
      padding: 0;
      font-family: arial;
    }
    main {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      .container {
        border-radius: 10px;
        width: 500px;
        max-height: 200px;
        background-image: url(../image/rise_of_the_ronin_2024_video_game-wallpaper-1920x1080.jpg);
        background-size: cover;
        color: white;
        padding: 20px;
        header {
          padding-bottom: 10px;
          border-bottom: solid white;
          display: flex;
          flex-direction: column;
          text-align: center;
          /* h1 {
            color: rgb(119, 187, 255);
          } */
          h2 {
            color: rgb(205, 222, 255);
          }
        }
        footer {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          .left-section {
            flex: 2;
            border-right: solid white;
            font-size: 1.1rem;
          }
          .middle-section {
            flex: 1;
            padding: 5px;
            border-right: solid white;
            font-size: 1.5rem;
            font-weight: bold;
            .location {
              font-size: 0.6rem;
              color: grey;
            }
          }
          .right-section {
            flex: 2;
            font-size: 1.1rem;
          }
          .left-section,
          .right-section,
          .middle-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-weight: bold;
          }
        }
      }
    }
      </style>
      <body>
        <main>
          <div class="container">
            <header>
              <h2>Sokoto Cinema</h2>
              <h1>MOVIE TICKET</h1>
            </header>
            <footer>
              <div class="left-section">
                <p>${ticket.date}</p>
              </div>
              <div class="middle-section">
              <p>Seat</P>
              <p>${ticket.seats}</p>
              <p class="location">${ticket.location}</p>
              </div>
              <div class="right-section">
                <p>2024</p>
                <p>${ticket.time}</p>
              </div>
            </footer>
          </div>
        </main>
      </body>
    </html>
    `;

      const opt = {
        margin: 0,

        filename: `BookMo Ticket ${ticket.title}.pdf`,

        image: {
          type: "jpeg",
          quality: 0.98,
        },

        enableLinks: false,

        html2canvas: {
          scale: 2,
          useCORS: true,
        },

        jsPDF: {
          unit: "in",
          format: "a5",
          orientation: "portrait",
        },
      };
      html2pdf().from(Ticket).set(opt).save();
    });
  });
}

upcomingTickets();

let historyTicket = [
  {
    date: "Mon, 23 Oct 2024",
    title: "SPIDERMAN NO WAY HOME",
    tickets: "3",
    seats: "C8,C9, C10",
    time: "14:50",
  },
  {
    date: "Tue, 23 Dec 2024",
    title: "POLIS EVO 3",
    tickets: "3",
    seats: "C8,C9, C10",
    time: "14:50",
  },
];
const clickBg = getComputedStyle(document.body).getPropertyValue("--hover");
const disabled = getComputedStyle(document.body).getPropertyValue("--disabled");
function historyTicketMapping() {
  historyTicket.forEach((ticket) => {
    myTicketList.insertAdjacentHTML(
      "beforeend",
      `<div class="ticket" style="opacity: 0.5; pointer-events: none;">
        <div>
            <header>
              <span>Date</span>
              <p>${ticket.date}</p>
            </header>
            <main>
              <span>Movie Title</span>
              <p>${ticket.title}</p>
            </main>
            <footer>
              <aside>
                <span>tiket(${ticket.tickets})</span>
                <p>${ticket.seats}</p>
              </aside>
              <aside>
                <span>Hours</span>
                <p>${ticket.time}</p>
              </aside>
            </footer>
        </div>
              <input id="${ticket.seats}" style="${disabled}" type="button" value="Download Ticket" />
          </div>`
    );
  });
}

const upcoming = document.getElementById("upcoming");
const historyy = document.getElementById("history");

upcoming.style.backgroundColor = clickBg;
upcoming.style.border = "none";

const ticketHistory = () => {
  upcoming.style.backgroundColor = "transparent";
  upcoming.style.border = "solid";
  historyy.style.backgroundColor = clickBg;
  historyy.style.border = "none";
  myTicketList.innerHTML = "";
  historyTicketMapping();
};

const ticketUpcoming = () => {
  historyy.style.backgroundColor = "transparent";
  historyy.style.border = "solid";
  upcoming.style.backgroundColor = clickBg;
  upcoming.style.border = "none";
  myTicketList.innerHTML = "";
  upcomingTickets();
};

upcoming.addEventListener("click", ticketUpcoming);
historyy.addEventListener("click", ticketHistory);

const home = document.getElementById("home");
const homePage = () => {
  window.location.href = "../index.html";
};
home.addEventListener("click", homePage);
