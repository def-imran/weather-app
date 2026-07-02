const cityInput = document.getElementById("city-search");
const searchButton = document.getElementById("search-button");

async function getData() {

    const city = cityInput.value.toLowerCase();
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68c1ed9eb4f2cd7999faef05b5d5b90f`)
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }

        const data = await response.json();
        console.log(data)
    }

    catch(error) {
        console.log(error)
    }
}