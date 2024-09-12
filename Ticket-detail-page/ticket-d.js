const ticketView = [];
ticketView.push(JSON.parse(localStorage.getItem("paidTicket")));

const myTicketList = document.getElementById("myTicketList");
const homeBtn = document.getElementById("homeBtn");

ticketView.map((singleTicket) => {
  myTicketList.insertAdjacentHTML(
    "beforeend",
    `<div class="ticket">
            <header>
              <span>Date</span>
              <p>${singleTicket.date}</p>
            </header>
            <main>
              <span>Movie Title</span>
              <p>${singleTicket.title}</p>
            </main>
            <footer>
              <div>
                <span>tiket(${singleTicket.tickets})</span>
                <span>Hours</span>
              </div>
              <div>
                <p>${singleTicket.seats}</p>
                <p class="location">${singleTicket.location}</p>
              </div>
              <input id="DownloadTicket" type="button" value="Download Ticket" />
            </footer>
          </div>`
  );
  const ticket = document.getElementById("DownloadTicket");
  ticket.addEventListener("click", () => {
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
              <p>${singleTicket.date}</p>
            </div>
            <div class="middle-section">
            <p>Seat</P>
            <p>${singleTicket.seats}</p>
            <p class="location">${singleTicket.location}</p>
            </div>
            <div class="right-section">
              <p>2024</p>
              <p>${singleTicket.time}</p>
            </div>
          </footer>
        </div>
      </main>
    </body>
  </html>
  `;

    const opt = {
      margin: 0,

      filename: `BookMo Ticket ${singleTicket.title}.pdf`,

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

homeBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});
