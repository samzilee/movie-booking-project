// navigation for the side bar starts now!!
const containAll = document.getElementById("all");
const movies = document.getElementById("movies");
const users = document.getElementById("users");
const orders = document.getElementById("orders");

const active = window
  .getComputedStyle(document.body)
  .getPropertyValue("--movie");
const grey = window.getComputedStyle(document.body).getPropertyValue("--other");

//main adminPage
movies.style.backgroundColor = active;
movies.addEventListener("click", () => moviesPage());
const mainPage = document.getElementById("mainPage");
const iconColorChange = document.getElementById("icon-color-change");

document.addEventListener("DOMContentLoaded", () => moviesPage());
function moviesPage() {
  iconColorChange.style.backgroundColor = "#17c769";
  movies.style.backgroundColor = active;
  users.style.backgroundColor = "";
  orders.style.backgroundColor = "";
  mainPage.innerHTML = `<nav class="createBtn">
          <input id="Add_new_movie" type="button" value="+ Create new" />
        </nav>
        <div class="addMovie">
          <div>
            <div class="head">
              <p class="first">#</p>
              <p>Cover</p>
              <p>Title</p>
              <p>Status</p>
              <p>Action</p>
            </div>
            <div id="movieAddedList"></div>
          </div>
        </div>`;

  const movieAddedList = document.getElementById("movieAddedList");
  const Add_new_movie = document.getElementById("Add_new_movie");
  const addMovieMenu = document.getElementById("addMovie");
  const cancel = document.getElementById("cancel");
  const menuImg = document.getElementById("img");
  const imgUpload = document.getElementById("imgUpload");
  const submitImg = document.getElementById("submitImg");
  const saveMovie = document.getElementById("saveMovie");

  Add_new_movie.addEventListener("click", addMenu);
  cancel.addEventListener("click", cancelPage);

  addMovieMenu.style.display = "none";

  function cancelPage() {
    addMovieMenu.style.display = "none";
    containAll.style.opacity = "1";
    containAll.style.pointerEvents = "";
  }

  function addMenu(event) {
    addMovieMenu.style.display =
      addMovieMenu.style.display === "block" ? "none" : "block";
    addMovieMenu.style.display === "block"
      ? ((containAll.style.opacity = "0.5"),
        (containAll.style.pointerEvents = "none"))
      : ((containAll.style.opacity = "1"),
        (containAll.style.pointerEvents = ""));
    event.stopPropagation();
  }

  document.addEventListener("click", () => {
    if (addMovieMenu.style.display === "block") {
      addMovieMenu.style.display = "none";
      containAll.style.opacity = "1";
      containAll.style.pointerEvents = "";
    }
  });

  addMovieMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  let takeImg = "";

  let movieAdded = JSON.parse(localStorage.getItem("AdminMovieAdded")) || [];

  submitImg.addEventListener("change", (event) => {
    const file = event.target.files[0];
    imgUpload.addEventListener("click", () => {
      const fileRead = new FileReader();
      fileRead.onload = function (e) {
        menuImg.innerHTML = `<img id="imgg" src="${e.target.result}" alt="movie_img" />`;
        takeImg = e.target.result;
      };
      fileRead.readAsDataURL(file);
    });
  });

  saveMovie.addEventListener("click", () => {
    const movieTitle = document.getElementById("movieTitle").value;
    const movieDescription = document.getElementById("movieDescription").value;
    const hour = document.getElementById("hour").value;
    const min = document.getElementById("min").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const type = document.getElementById("type").value;
    const location = document.getElementById("location").value;
    if (
      movieTitle !== "" &&
      movieDescription !== "" &&
      hour !== "" &&
      month !== "" &&
      day !== "" &&
      time !== ""
    ) {
      let movieDuration = `${hour}h ${min}m`;
      movieAdded.push({
        image: takeImg,
        name: movieTitle,
        month: month,
        day: day,
        time: time,
        where: location,
        duration: movieDuration,
        type: type,
        description: movieDescription,
      });
      localStorage.setItem("AdminMovieAdded", JSON.stringify(movieAdded));
      window.location.reload();
    } else {
      alert("Fill the Form");
      return;
    }
  });

  movieList();
  function movieList() {
    movieAddedList.innerHTML = "";
    if (movieAdded.length === 0) {
      movieAddedList.innerHTML = "<marquee>NOTHING TO SEE HERE</marquee>";
    }
    movieAdded.map((value, index) => {
      movieAddedList.insertAdjacentHTML(
        "beforeend",
        `
       <div class="body">
              <div class="section">
                <div class="A">${index + 1}</div>
                <div class="A">
                  <code class="img">
                    <img src="${value.image}" />
                  </code>
                </div>
                <div class="A">${value.name}</div>
                <div class="A">Pending</div>

                <div class="Action">
                  <div>
                   <button id="${index}">
                      <img src="../icons/icons8-eye-24.png" alt="eye_icon" />
                    </button>
                    <button id="${value.name}">
                      <img
                        src="../icons/icons8-trash-50.png"
                        alt="trash_icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div class="movieInfoBack" id="movieInfo${value.name}">
                <div class="left-section">
                  <img src="${value.image}" alt="movie_img" />
                </div>
                <div class="middle-section">
                  <p class="title">Title: <span>${value.name}</span></p>
                  <p class="description">
                    Description:
                    <span
                      >${value.description}</span
                    >
                  </p>
                </div>
                <ul class="right-section">
                  <li>Time: <span>${value.time}</span></li>
                  <li>Month: <span>${value.month}</span></li>
                  <li>Day: <span>${value.day}</span></li>
                  <li>Duration: <span>${value.duration}</span></li>
                  <li>Type: <span>${value.type}</span></li>
                  <li>Where: <span>${value.where}</span></li>
                  <p class="hideInfo" id="hideInfo${value.name}">X</p>
                </ul>
              </div>
            </div>`
      );

      const ShowBtn = document.getElementById(`${index}`);
      const movieInfo = document.getElementById(`movieInfo${value.name}`);
      const hideInfo = document.getElementById(`hideInfo${value.name}`);
      ShowBtn.addEventListener("click", () => {
        movieInfo.style.opacity = "1";
        movieInfo.style.pointerEvents = "all";

        hideInfo.addEventListener("click", () => {
          movieInfo.style.opacity = 0;
          movieInfo.style.pointerEvents = "none";
        });
      });

      const singleMovie = document.getElementById(`${value.name}`);
      singleMovie.addEventListener("click", () => {
        movieAdded = movieAdded.filter(
          (e) => e.name !== singleMovie.getAttribute("id")
        );
        localStorage.setItem("AdminMovieAdded", JSON.stringify(movieAdded));
        location.reload();
      });
    });
  }
}

//user page_code
users.addEventListener("click", () => usersPage());
const username = localStorage.getItem("userName");
const userEmail = localStorage.getItem("email");

let pass = localStorage.getItem("pass");
let statuss = "";
if (localStorage.getItem("pass")) {
  statuss = "Online";
} else {
  statuss = "Offline";
}
function usersPage() {
  iconColorChange.style.backgroundColor = "grey";
  users.style.backgroundColor = grey;
  movies.style.backgroundColor = "";
  orders.style.backgroundColor = "";
  if (username === null) {
    mainPage.innerHTML = "<marquee>NOTHING TO SEE HERE</marquee>";
    return;
  }
  mainPage.innerHTML = `<div class="allBox" id="allBox0">
          <div class="box1">1</div>
          <div class="box2">
            <p>${username}</p>
          </div>
          <div class="box3">
            <p>${userEmail}</p>
          </div>
          <div class="box3">
            <p>${statuss}</p>
          </div>
        </div>`;
}

//Order page_code
orders.addEventListener("click", () => orderPage());
const tickets = [];
tickets.push(...JSON.parse(localStorage.getItem("tickets")));

function orderPage() {
  iconColorChange.style.backgroundColor = "grey";
  mainPage.innerHTML = "";
  if (tickets.length === 0 || username === null) {
    mainPage.innerHTML = "<marquee>NOTHING TO SEE HERE</marquee>";
    orders.style.backgroundColor = grey;
    movies.style.backgroundColor = "";
    users.style.backgroundColor = "";
  } else {
    tickets.map((ticket, index) => {
      mainPage.insertAdjacentHTML(
        "beforeend",
        `<div class="allBox" id="allBox${index}">
          <div class="box1">${index + 1}</div>
          <div class="box2">
            <p>${username}</p>
          </div>
          <div class="box3">
            <p>${ticket.title}</p>
          </div>
          <div class="box3">
            <p>${ticket.seats}, ${ticket.time}</p>
          </div>
        </div>`
      );
    });
    orders.style.backgroundColor = grey;
    movies.style.backgroundColor = "";
    users.style.backgroundColor = "";
  }
}
