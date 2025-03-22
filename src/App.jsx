

/* This is the Import Holding Zone! place imports here! */ 
import { useState, useEffect } from 'react';
import './App.css';
import { getWeather } from './services/WeatherService';
import { getDateFromHours } from './utils';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

function App() {


  //this is immportant to create a loading message 
  const [loading, setLoading] = useState(false);
  //set an error 
  const [error, setError] = useState(null);
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    setLoading(true); 

    getWeather(city)
    .then((data) => {
      setWeather(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, [city]);

  console.log(weather);

  // console.log(weather); we don't need to console log the weather anymore. but this is useful for when you are 

  return (
//main is used for symantics 
    <main>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Weather loading...</p>
      ) : (
        <section>
          <form>
            <label htmlFor= "search-city">
              <input type="text" name="search-city" id="search-city" placeholder='Search for Weather' />
              <button type="submit">Search</button>
            </label>
          </form>
          <h1>Weather Details for {city}</h1>
          <p>{weather?.main.temp} | {weather?.weather[0].description}</p>
          <p>{getDateFromHours(weather?.sys.sunset)}</p>
          <p>{weather?.main.humidity}</p>
          <p>{weather?.main.sea_level}</p>
          <p>{weather?.wind.speed}</p>
        </section>
      )}
      </main>
   
  );

}

export default App; 

/* NOTE: Removed Icon files and styling due to them not loading */

