const BASE_URL = 'https://api.open-meteo.com/v1/forecast?'
const COORDS = 'latitude=36.0726&longitude=-79.792'

const weatherDescriptions = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast skies',
  45: 'Foggy',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  80: 'Rain showers',
  95: 'Thunderstorm',
};

async function getCurrentWeather() {
    document.getElementById('temperature').innerText = '';
    document.getElementById('weather-condition').innerText = '';
    document.getElementById('error-message').innerText = '';
    try {
        const url = `${BASE_URL}${COORDS}&current=temperature_2m,weathercode&temperature_unit=fahrenheit`;
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if(!response.ok) {
            throw new Error("Request failed with status: " + response.status);
        }

        const temp = data.current.temperature_2m;
        const code = data.current.weathercode;
        const condition = weatherDescriptions[code];
        
        document.getElementById('temperature').innerText = "Temperature: " + temp + "°F";
        document.getElementById('weather-condition').innerText = 'Condition: ' + condition;
    } 
    
    catch (error) {
        document.getElementById('error-message').innerText = error.message;
    }
}

async function getForecast() {
    document.getElementById('forecast-list').innerHTML = '';
    document.getElementById('error-message').innerText = ''; 
    try {
        const url = `${BASE_URL}${COORDS}&daily=temperature_2m_max,weathercode&temperature_unit=fahrenheit&timezone=auto`;

        const response = await fetch(url);

        const data = await response.json();

        const dates = data.daily.time;
        const temps = data.daily.temperature_2m_max;
        const codes = data.daily.weathercode;

        const forecastList = document.getElementById('forecast-list');


    dates.forEach(function(date, index) {
      const condition = weatherDescriptions[codes[index]] || 'Unknown Conditions';
      const li = document.createElement('li');
      li.textContent = 'For ' + date + ', the high temperature will reach ' + temps[index] + '°F' + ' with ' + condition + '.';
      forecastList.appendChild(li);
    });

  } catch (error) {
      document.getElementById('error-message').innerText = error.message
    }

}

const currentWeatherButton = document.querySelector('#CurrentWeatherBtn');

currentWeatherButton.addEventListener("click", function(event) {
    getCurrentWeather();
})

const sevenDayForecastButton = document.querySelector('#ForecastBtn');

sevenDayForecastButton.addEventListener("click", function(event) {
    getForecast();
})