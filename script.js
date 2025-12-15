const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const windElement = document.querySelector(".wind");
const humidityElement = document.querySelector(".humidity"); // Missing in HTML, but good to have logic ready or ignore
const weatherIcon = document.querySelector(".weather-icon"); // Need to add this to HTML

// API Endpoints
const GEO_API = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

async function checkWeather(city) {
    try {
        // 1. Get Coordinates first (Geocoding)
        const geoUrl = `${GEO_API}?name=${city}&count=1&language=en&format=json`;
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();

        if (!geoData.results) {
            alert("City not found!");
            return;
        }

        const { latitude, longitude, name } = geoData.results[0];

        // 2. Get Weather Data using Coordinates
        const weatherUrl = `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        const { temperature, windspeed, weathercode } = weatherData.current_weather;

        // 3. Update UI
        cityElement.innerText = name;
        tempElement.innerText = Math.round(temperature) + "°C";
        windElement.innerText = windspeed + " km/h";

        // Optional: Update Icon based on WMO code (weathercode)
        // 0 = Clear, 1-3 = Cloudy, 61+ = Rain, etc.
        console.log("Weather Code:", weathercode);

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Something went wrong. Please try again.");
    }
}

// Event Listeners
searchBtn.addEventListener("click", () => {
    checkWeather(searchBar.value);
});

searchBar.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBar.value);
    }
});
