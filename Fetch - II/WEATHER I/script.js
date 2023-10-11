
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", () => {
        const cityInput = document.getElementById("cityInput").value;
        if (cityInput) {
            fetchWeatherData(cityInput);
            displayMap(cityInput);
        }
    });
});

function fetchWeatherData(city) {
    
    const apiKey = '0e9a9504e0366bcf6aa8bca4b7dbd599';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Min Temperature: ${data.main.temp_min}°C</p>
                <p>Max Temperature: ${data.main.temp_max}°C</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Clouds: ${data.clouds.all}%</p>
                <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

function displayMap(city) {
    const mapContainer = document.getElementById("mapContainer");
    mapContainer.innerHTML = `<iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://maps.google.com/maps?q=${city}&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen></iframe>`;
}
