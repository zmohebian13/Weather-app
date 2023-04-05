let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hour = now.getHours();
let minute = now.getMinutes();

console.log(day);
console.log(hour);

let currentDayTime = document.querySelector(".current-day-time");
currentDayTime.innerHTML = `${day} ${hour}:${minute}`;

function submitForm(event) {
  event.preventDefault();
  let searchedCity = document.querySelector(".search-section");
  let currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = searchedCity.value;
}

let form = document.querySelector("form");
form.addEventListener("submit", submitForm);

function toFarenhite(event) {
  event.preventDefault();
  let currenTtempreture = document.querySelector(".current-tempreture");
  currenTtempreture.innerHTML = 66;
}

let farenhiteLink = document.querySelector(".farenhite-link");
farenhiteLink.addEventListener("click", toFarenhite);

function tocelcius(event) {
  event.preventDefault();
  let currenTtempreture = document.querySelector(".current-tempreture");
  currenTtempreture.innerHTML = 19;
}

let celciusLink = document.querySelector(".celcius-link");
celciusLink.addEventListener("click", tocelcius);

let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
)
  .then((response) => response.json())
  .then((data) => console.log(data));
