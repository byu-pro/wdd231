document.addEventListener("DOMContentLoaded", function () {
    const weatherContainer = document.getElementById("weather");

    // API URL for Nairobi
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=-1.286389&longitude=36.817223&current_weather=true";

    // Fetch weather data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Debugging: Check API response

            const weather = data.current_weather;
            const temperature = weather.temperature;
            const windSpeed = weather.windspeed;
            const weatherCode = weather.weathercode;

            // Convert weather code to condition
            const weatherCondition = getWeatherCondition(weatherCode);

            // Update the HTML
            weatherContainer.innerHTML = `
                <p><strong>Current Weather in Nairobi:</strong></p>
                <p>🌡️ Temperature: ${temperature}°C</p>
                <p>💨 Wind Speed: ${windSpeed} km/h</p>
                <p>🌤️ Condition: ${weatherCondition}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherContainer.innerHTML = "<p>⚠️ Unable to fetch weather data.</p>";
        });

    // Function to interpret weather code
    function getWeatherCondition(code) {
        const weatherConditions = {
            0: "Clear Sky ☀️",
            1: "Mainly Clear 🌤️",
            2: "Partly Cloudy ⛅",
            3: "Overcast ☁️",
            45: "Fog 🌫️",
            48: "Rime Fog ❄️🌫️",
            51: "Light Drizzle 🌦️",
            53: "Moderate Drizzle 🌧️",
            55: "Heavy Drizzle 🌧️",
            61: "Light Rain 🌧️",
            63: "Moderate Rain 🌧️",
            65: "Heavy Rain 🌧️🌧️",
            71: "Light Snow ❄️",
            73: "Moderate Snow ❄️❄️",
            75: "Heavy Snow ❄️❄️❄️",
            80: "Light Showers 🌦️",
            81: "Moderate Showers 🌧️",
            82: "Heavy Showers 🌧️🌧️",
            95: "Thunderstorm ⛈️",
            96: "Thunderstorm with Hail ⛈️❄️",
            99: "Severe Thunderstorm with Hail ⛈️❄️❄️"
        };

        return weatherConditions[code] || "Unknown Weather 🌍";
    }
});
