const citySearch = document.getElementById("city-search");
const searchButton = document.getElementById("search-button");

async function getData(city) {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=68c1ed9eb4f2cd7999faef05b5d5b90f`)
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }

        const data = await response.json();
        console.log(data)
        if (city) {

        }
        showWeatherToday(data);
        showSunData(data);
        showBackgroundImage(data);


        const secondResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=68c1ed9eb4f2cd7999faef05b5d5b90f`)
        const forecast = await secondResponse.json();
        showForecast(forecast);
    }

    catch (error) {
        console.log(error)
    }
}

window.addEventListener("DOMContentLoaded", async (getLocation) => {
    try {
        const response = await fetch("http://ip-api.com/json/")
        if (!response.ok) {
            throw new Error("Could not get location")
        }

        const locationData = await response.json();
        const location = locationData.city;
        getData(location)
        console.log(location)
    }

    catch (error) {
        console.log(error)
    }

})



function cityInput() {
    const cityInput = citySearch.value.toLowerCase().trim();

    if (cityInput) {
        getData(cityInput);
    }

}


function showWeatherToday(data) {
    const degreeTodaySpan = document.getElementById("degree");
    const iconTodaySpan = document.getElementById("descrip-icon");
    const weatherDescripTodaySpan = document.getElementById("weather-descrip-today");
    const feelTempTodaySpan = document.getElementById("feel-temp");

    const degreeToday = Math.round(data.main.temp);
    const iconToday = data.weather[0].icon;
    const weatherDescripToday = data.weather[0].main
    const feelTempToday = Math.round(data.main.feels_like);

    degreeTodaySpan.innerText = degreeToday;
    iconTodaySpan.src = `http://openweathermap.org/img/w/${iconToday}.png`;
    weatherDescripTodaySpan.innerText = weatherDescripToday;
    feelTempTodaySpan.innerText = feelTempToday;



    const cityNameSpan = document.getElementById("city-name");
    const cityName = data.name;
    cityNameSpan.innerText = cityName;

    const weatherDescripSpan = document.getElementById("weather-descrip");
    const weatherDescrip = data.weather[0].main;
    if (weatherDescrip === "Clear") {
        weatherDescripSpan.innerText = " sunny ";
    }

    else if (weatherDescrip === "Clouds") {
        weatherDescripSpan.innerText = " cloudy ";
    }

    else if (weatherDescrip === "Rain") {
        weatherDescripSpan.innerText = " rainy "
    }

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

function showSunData(data) {
    const sunriseEl = document.getElementById("sunrise");
    const sunriseTimestamp = data.sys.sunrise;
    const dateSunrise = new Date(sunriseTimestamp * 1000);
    const sunriseTime = dateSunrise.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });

    sunriseEl.innerText = sunriseTime;

    const sunsetEl = document.getElementById("sunset");
    const sunsetTimestamp = data.sys.sunset;
    const dateSunset = new Date(sunsetTimestamp * 1000);
    const sunsetTime = dateSunset.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });

    sunsetEl.innerText = sunsetTime;

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

function showBackgroundImage(data) {
    const weatherStatus = data.weather[0].main;
    console.log(weatherStatus)

    if (weatherStatus === "Clear") {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.60)), url('assets/sunny.jpg')";
    }

    else if (weatherStatus === "Clouds") {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.60)), url('assets/cloudy.jpg')";
    }

    else if (weatherStatus === "Rain") {
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.60)), url('assets/rainy.jpg')";
    }
}

