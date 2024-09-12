const list = document.getElementById("list");
const mainpage = document.getElementById("mainpage");
const bookingPage = document.getElementById("bookingPage");
bookingPage.style.display = "none";

let movieList = JSON.parse(localStorage.getItem("AdminMovieAdded")) || [
  {
    image: "image/Movie.png",
    name: "FURIOSA",
    month: "22 Feb",
    day: "Fri",
    time: "8:20 AM",
    where: "Available now in Sokoto cinema",
    duration: "1h 40m",
    type: "Action",
    description:
      "Set 15 to 20 years before the events of Fury Road, the film follows the title character's life for over a decade, from her kidnapping by the forces of warlord Dementus (Chris Hemsworth) to her ascension to the rank of Imperator. Tom Burke also stars as Praetorian Jack, a military commander who befriends Furiosa.",
  },
  {
    image: "image/Movie-1.png",
    name: "IF",
    month: "29 Aug",
    day: "Sat",
    time: "5:00 AM",
    where: "Available now in Sokoto cinema",
    duration: "1h 40m",
    type: "Fantasy",
    description:
      "A young girl who goes through a difficult experience begins to see everyone's imaginary friends who have been left behind as their real-life friends have grown up. A story you have to believe to see.",
  },
  {
    image: "image/Movie-2.png",
    name: "CIVIL WAR",
    month: "10 June",
    day: "Sun",
    time: "1:20 PM",
    where: "Available now in Sokoto cinema",
    duration: "2h 40m",
    type: "Action",
    description:
      "The plot follows a team of war journalists traveling from New York City to Washington, D.C. during a civil war fought across the United States between a despotic federal government and secessionist movements, to interview the President before rebels take the capital city.",
  },
  {
    image: "image/Movie-3.png",
    name: "PLANET OF THE APES",
    month: "17 July",
    day: "Mon",
    time: "2:10 PM",
    where: "Available now in Sokoto cinema",
    duration: "3h 40m",
    type: "Fantasy",
    description:
      "Caesar (Andy Serkis) and his apes are forced into a deadly conflict with an army of humans led by a ruthless colonel (Woody Harrelson). After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.",
  },
  {
    image: "image/Movie-4.png",
    name: "JUNE",
    month: "6 April",
    day: "Thu",
    time: "1:05 PM",
    where: "Available now in Sokoto cinema",
    duration: "1h 5m",
    type: "Action",
    description:
      "The life story of a girl named June from 16 years of her age until she turned 26, thereby giving an insight into those ten years of her life.",
  },
  {
    image: "image/Movie-5.png",
    name: "SHERIFF",
    month: "12 May",
    day: "Fri",
    time: "10:10 AM",
    where: "Available now in Sokoto cinema",
    duration: "2h 10m",
    type: "Action",
    description:
      "Plot. Internal police investigator Sheriff Hussein and his team are assigned to find the Meth Killer, a vigilante serial killer who has been murdering associates of drug kingpin Tony Ifrit and whose latest victim was the corrupt head of the Narcotics Department.",
  },
];
const ids = [];
const moviesBtn = [];
if (movieList.length === 0) {
  list.innerHTML = `<marquee id="texts"><p>NO MOVIE AVAILABLE RIGHT NOW :)</p></marquee>`;
  list.style.maxWidth = "90%";
  list.style.width = "100%";
}
movieList.map((movie) => {
  list.insertAdjacentHTML(
    "beforeend",
    ` <div class="movie" id="${movie.name}">
            <img src="${movie.image}" alt="${movie.name} image"/>
            <p class="name">${movie.name}</p>
            <div class="more-info">
              <p class="date">${movie.day} <span>${movie.month}</span></p>
              <p class="where">${movie.where}</p>
            </div>
          </div>`
  );
  moviesBtn.push(document.getElementById(`${movie.name}`));
  ids.push(movie.name);
});

const middleSection = document.getElementById("middleSection");
const rightSection = document.querySelector(".right-section");
if (localStorage.getItem("pass") === "Approved") {
  middleSection.innerHTML = `
    <p>Welcome to Sokoto Cinema ${localStorage.getItem("userName")}!</p>
  `;

  middleSection.style.top = "0";

  setTimeout(() => {
    middleSection.style.top = "-150%";
  }, 5000);

  rightSection.innerHTML = ` <input id="myTicket" class="myTicket" type="button" value="My Ticket" /> 
    <input id="logout" class="logout" type="button" value="Logout" />`;

  const myticket = document.getElementById("myTicket");
  const logout = document.getElementById("logout");

  const logoutTakeToLoginPage = () => {
    localStorage.removeItem("pass");
    window.location.href = "./login-page/login.html";
  };

  const myTickets = () => {
    window.location.href = "./My-ticket-page/my-ticket.html";
  };

  myticket.addEventListener("click", myTickets);
  logout.addEventListener("click", logoutTakeToLoginPage);
}

let clickedShow = [];
const clicked = (btn) => {
  if (localStorage.getItem("pass")) {
    const btnId = btn.getAttribute("id");
    clickedShow.push(...movieList.filter((movie) => movie.name === btnId));
    mainpage.style.display = "none";
    bookingPage.style.display = "flex";
    ticketP();
  } else {
    middleSection.innerHTML = `
    <p>Login to your Account or Register.</p>
  `;
    middleSection.style.top = "0";
    setTimeout(() => {
      middleSection.style.top = "-150%";
    }, 5000);

    return;
  }
};

moviesBtn.forEach((btn) => {
  btn.addEventListener("click", () => clicked(btn));
});

function ticketP() {
  rightSection.innerHTML = `
  <input id="logout" class="logout" type="button" value="Logout" />`;

  const movieDescription = document.getElementById("movie-description");
  bookingPage.style.display = "flex";
  const locations = [
    "Sokoto Cinema Theater1",
    "Sokoto Cinema Theater2",
    "Sokoto Cinema Theater3",
  ];

  const theater = document.getElementById("theater");
  const dates = document.getElementById("date");
  const time = document.getElementById("time");

  locations.forEach((location) => {
    theater.insertAdjacentHTML(
      "beforeend",
      `<button  id="${location}">
                <img src="icons/icons8-location-50.png" alt="location icon" />
                <p>${location}</p>
              </button>`
    );
  });

  const btn1 = document.getElementById("Sokoto Cinema Theater1");
  const btn2 = document.getElementById("Sokoto Cinema Theater2");
  const btn3 = document.getElementById("Sokoto Cinema Theater3");

  let pickedPlace = "Sokoto Cinema Block2";
  const bgColor1 = () => {
    btn1.setAttribute("class", "btnClick");
    btn2.removeAttribute("class");
    btn3.removeAttribute("class");
    pickedPlace = btn1.getAttribute("id");
    movieDescription.innerHTML = "";
    movieInfo();
  };

  btn2.setAttribute("class", "btnClick");
  const bgColor2 = () => {
    btn2.setAttribute("class", "btnClick");
    btn1.removeAttribute("class");
    btn3.removeAttribute("class");
    pickedPlace = btn2.getAttribute("id");
    movieDescription.innerHTML = "";
    movieInfo();
  };

  const bgColor3 = () => {
    btn3.setAttribute("class", "btnClick");
    btn2.removeAttribute("class");
    btn1.removeAttribute("class");
    pickedPlace = btn3.getAttribute("id");
    movieDescription.innerHTML = "";
    movieInfo();
  };

  btn1.addEventListener("click", bgColor1);
  btn2.addEventListener("click", bgColor2);
  btn3.addEventListener("click", bgColor3);

  let dateBtn = "";

  clickedShow.forEach((show) => {
    dates.innerHTML = `<div id="dateBtn">
         <span>${show.month}</span>
          <p>${show.day}</p>
       </div>`;
    console.log(show.month);
    dateBtn = document.getElementById("dateBtn");
    dateBtn.setAttribute("class", "btnClick");
    movieDescription.innerHTML = "";
  });

  let pickedDate = dateBtn.innerText;

  // const times = ["15:40", "12:10", "7:20", "10:10"];
  let timeBtn = "";
  clickedShow.forEach((show) => {
    time.insertAdjacentHTML(
      "beforeend",
      `<div id="timeBtn"><p>${show.time}</p></div>`
    );

    timeBtn = document.getElementById("timeBtn");
    timeBtn.setAttribute("class", "btnClick");
    movieDescription.innerHTML = "";
  });

  let pickedTime = timeBtn.innerText;

  function movieInfo() {
    clickedShow.map((movie) => {
      movieDescription.insertAdjacentHTML(
        "beforeend",
        `<div class="movie-info">
              <img src="${movie.image}" alt="movie image" />
              <div class="movie-detail">
                <p>${movie.name}</p>
                <div class="more-details">
                  <p>
                  Movie description here...
                  </p>
                  <div class="description">
                    ${movie.description}
                  </div>
                  <p><span>Duration</span><span>${movie.duration}</span></p>
                  <p><span>Type</span><span>${movie.type}</span></p>
                </div>
              </div>
            </div>
            <nav>
              <h2>${pickedPlace}</h2>
              <div>
                <p>${pickedDate}</p>
                <p>${pickedTime}</p>
              </div>
              <span>Seat selection can be done after this</span>
              <button id="proceed">Proceed</button>
            </nav>`
      );
    });
    const proceed = document.getElementById("proceed");
    const active = getComputedStyle(document.body).getPropertyValue("--hover");

    if (pickedDate !== "" && pickedTime !== "") {
      proceed.style.backgroundColor = `${active}`;
      proceed.style.pointerEvents = "all";
      const saveTicketInfo = () => {
        localStorage.setItem("location", pickedPlace);
        localStorage.setItem("date", pickedDate);
        localStorage.setItem("time", pickedTime);
        localStorage.setItem("show", JSON.stringify(clickedShow));
        window.location.href = "./seat-page/seat.html";
      };
      proceed.addEventListener("click", saveTicketInfo);
    }
  }
  movieInfo();

  const home = document.getElementById("home");

  const backHome = () => {
    window.location.reload(true);
  };
  home.addEventListener("click", backHome);
}
