const apiKey = '628739d530440dde8d79844c20c8133d';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeatherData(city);
  }
});

async function getWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === 200) {
      cityName.textContent = data.name;
      temperature.textContent = `${data.main.temp}°C`;
      weatherDescription.textContent = data.weather[0].description;
    } else {
      alert('City not found. Please try another city.');
    }
  } catch (error) {
    console.error(error);
  }
}



