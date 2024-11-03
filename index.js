const apiKey = 'be9c4b48bbf254c6118a7b260ef733c9'; // Replace with your OpenWeatherMap API key

document.getElementById('get-weather').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    ;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-result').innerText = error.message;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherInfo = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Condition: ${weather[0].description}</p>
    `;
    document.getElementById('weather-result').innerHTML = weatherInfo;
}
