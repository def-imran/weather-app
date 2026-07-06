const cityInput = document.getElementById("city-search");
const searchButton = document.getElementById("search-button");

async function getData() {

    const city = cityInput.value.toLowerCase();
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=68c1ed9eb4f2cd7999faef05b5d5b90f`)
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }

        const data = await response.json();
        console.log(data)

        const secondResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=68c1ed9eb4f2cd7999faef05b5d5b90f`)
        const forecast = await secondResponse.json();
        showForecast(forecast)
    }

    catch (error) {
        console.log(error)
    }
}

function showForecast(forecast) {
    const forecastDisplay = document.getElementById("forecast-container");
    const forecastTime = forecast.list.filter(item => item.dt_txt.includes("15:00:00"));
    console.log(forecastTime)
    forecastTime.map(item => {
        const day = new Date(item.dt_txt).toLocaleDateString("nl-NL", { weekday: "short" })
        console.log(day)

        forecastDisplay.innerHTML += `
            <ul class="forecast-list">
                 <li>
                    <span class="label">${day}</span>
                    <span class="icon"></span>
                    <span class="value">${forecast.temp}</span>
                </li>
            </ul>
    `
    })



}

