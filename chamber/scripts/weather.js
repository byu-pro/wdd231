document.addEventListener("DOMContentLoaded", function () {
    const weatherContainer = document.getElementById("weather");
    const forecastContainer = document.getElementById("forecast");

    // API URL for Nairobi (includes 3-day forecast)
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=-1.286389&longitude=36.817223&current_weather=true&daily=temperature_2m_max&timezone=Africa/Nairobi";

    // Fetch weather data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Debugging: Check API response

            // Extract current weather
            const weather = data.current_weather;
            const temperature = Math.round(weather.temperature); // Round to zero decimal points
            const windSpeed = weather.windspeed;
            const weatherCode = weather.weathercode;
            const weatherCondition = getWeatherCondition(weatherCode);

            // Update current weather HTML
            weatherContainer.innerHTML = `
                <h3>Current Weather in Nairobi</h3>
                <p>🌡️ Temperature: ${temperature}°C</p>
                <p>💨 Wind Speed: ${windSpeed} km/h</p>
                <p>🌤️ Condition: ${weatherCondition}</p>
            `;

            // Extract 3-day forecast
            const forecastDays = data.daily.temperature_2m_max;
            const dates = data.daily.time;

            forecastContainer.innerHTML = "<h3>3-Day Forecast</h3>";

            for (let i = 1; i <= 3; i++) {
                const forecastTemp = Math.round(forecastDays[i]); // Format temperature
                const forecastDate = new Date(dates[i]).toLocaleDateString("en-US", { weekday: "long" });

                forecastContainer.innerHTML += `<p><strong>${forecastDate}:</strong> ${forecastTemp}°C</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherContainer.innerHTML = "<p>⚠️ Unable to fetch weather data.</p>";
        });

    // Function to interpret weather code
    function getWeatherCondition(code) {
        const weatherConditions = {
            0: "Clear Sky",
            1: "Mainly Clear",
            2: "Partly Cloudy",
            3: "Overcast",
            45: "Fog",
            48: "Rime Fog",
            51: "Light Drizzle",
            53: "Moderate Drizzle",
            55: "Heavy Drizzle",
            61: "Light Rain",
            63: "Moderate Rain",
            65: "Heavy Rain",
            71: "Light Snow",
            73: "Moderate Snow",
            75: "Heavy Snow",
            80: "Light Showers",
            81: "Moderate Showers",
            82: "Heavy Showers",
            95: "Thunderstorm",
            96: "Thunderstorm with Hail",
            99: "Severe Thunderstorm with Hail"
        };

        return weatherConditions[code] || "Unknown Weather";
    }
});
