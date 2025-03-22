const apiKey = import.meta.env.VITE_API_KEY;

async function getWeather(city) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
    const data = await response.json();
    return data;

}

export { getWeather };

//this code serves as the functionality of the Weather App based off of the city

//Explanation: &unitsimperial is important because it will convert it to the units that are used in America. This is relevant to our users. 