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
city = city.toLowerCase();
//console.log(city);
//console.log(weather[city].temp);
//console.log(weather[city].humidity);
//let tempPlaceholder = weather["city"].temp;
//let humidityPlaceholder = weather["city"].humidity;
if(city === "paris"|"tokyo"|"lisbon"|"san francisco"|"moscow"){
alert(`It is currently ${weather[city].temp}°C in ${city} with a humidity of ${weather[city].humidity}%.`);
} else {
  alert(`Sorry, we don't know the current weather in ${city}.`);
};
