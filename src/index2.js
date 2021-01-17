let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

// write your code here

let city = prompt("Enter a City");
city = city.trim();
let tempCity = city.toLowerCase();
//console.log(tempCity);
//console.log(city);
//console.log(weather[city].temp);
//console.log(weather[city].humidity);
//let tempPlaceholder = weather["city"].temp;
//let humidityPlaceholder = weather["city"].humidity;
//console.log(tempCity == "paris"||tempCity == "tokyo"||tempCity == "lisbon"||tempCity == "san francisco"||tempCity == "moscow");
//console.log(weather[tempCity]);
if(weather[tempCity] !== undefined){
  let tempCelsius = Math.round(weather[tempCity].temp);
  let tempFahrenheit = (tempCelsius * 9/5) + 32;
  let humidity = weather[tempCity].humidity;
  alert(`It is currently ${tempCelsius}°C/${tempFahrenheit}°F in ${city} with a humidity of ${humidity}%.`);
} else {
  alert(`Sorry, we don't know the current weather for ${city}. Please check out https://www.google.com/search?q=weather+${tempCity}`);
};
