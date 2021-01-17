//challange 1
let dateToday = document.querySelector("h5");
let now = new Date();
//console.log(now);
let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes.length < 2) {
    minutes = "0" + minutes;
}
let time = now.get
dateToday.innerHTML= `${day} ${hours}:${minutes}`;

//Functions

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  //console.log(temperature);
  let city = response.data.name;
  let displayCity = document.querySelector("#city-display");
  displayCity.innerHTML = city;
  let temperatureToday = document.querySelector("#temperature-today");
  temperatureToday.innerHTML = temperature;
}

function changeCity(event){
  event.preventDefault();
  let cityInput = document.querySelector("#city-input")
  let units = "metric";
  let apiKey = "403288a4156f5e35173114567c079af6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function changeCityByLocation(response) {
  let lat = response.coords.latitude;
  let lon = response.coords.longitude;
  console.log(lat);
  console.log(lon);
  let units = "metric";
  let apiKey = "403288a4156f5e35173114567c079af6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function getGeolocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(changeCityByLocation);
}

// Events
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", getGeolocation);


//challange 3
// function changeToFahrenheit(){
//   let temperature = document.querySelector("#temperature-today");
//   temperature.innerHTML = '66';
// }
// function changeToCelsius(){
//   let temperature = document.querySelector("#temperature-today");
//   temperature.innerHTML = '19';
// }

// let fahrenheitSign = document.querySelector("#fahrenheit");
// fahrenheitSign.addEventListener("click", changeToFahrenheit);

// let celsiusSign = document.querySelector("#celsius");
// celsiusSign.addEventListener("click", changeToCelsius);
