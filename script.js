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
        showWeatherToday(data);

        const secondResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=68c1ed9eb4f2cd7999faef05b5d5b90f`)
        const forecast = await secondResponse.json();
        showForecast(forecast)
    }

    catch (error) {
        console.log(error)
    }
}

function showWeatherToday(data){
    const humidityEl = document.getElementById("humidity");
    const humidityData = data.main.humidity
    humidityEl.innerText = humidityData;

    const seaLevelEl = document.getElementById("sea-level");
    const seaLevelData = data.main.sea_level
    seaLevelEl.innerText = seaLevelData;

    const windEl = document.getElementById("wind");
    const windData = data.wind.speed.toFixed(1)
    windEl.innerText = windData;


}


function showForecast(forecast) {
    const forecastDisplay = document.getElementById("forecast-container");
    const forecastDataFiltert = forecast.list.filter(item => item.dt_txt.includes("15:00:00"));
    console.log(forecastDataFiltert);
    forecastDisplay.innerHTML = ``;
    
    forecastDataFiltert.map(item => {
        const day = new Date(item.dt_txt).toLocaleDateString("en-EN", { weekday: "short" })
        console.log(day)

        const forecastTemps = Math.round(item.main.temp);
        console.log(forecastTemps)

        const forecastIcon = item.weather[0].icon
        const iconurl = `http://openweathermap.org/img/w/${forecastIcon}.png`;
        console.log(forecastIcon)

        forecastDisplay.innerHTML += `
          <div class="day-card">
                <span class="label">${day}</span>
                <img class="icon" src="${iconurl}"></img>
                <span class="value">${forecastTemps}℃</span>
           </div>
    `
    })



}

