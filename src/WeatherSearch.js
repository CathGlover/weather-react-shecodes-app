import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  let [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=edf069311acf2bebo10f4bbbc53249t3&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function displayWeather(response) {
    console.log(response);
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.daily[0].temperature.day),
      wind: Math.round(response.data.daily[0].wind.speed),
      humidity: response.data.daily[0].temperature.humidity,
      description: response.data.daily[0].condition.description,
      icon: response.data.daily[0].condition.icon_url,
      country: response.data.country,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-bar"
        placeholder="Enter a city"
        onChange={changeCity}
      />
      <input type="submit" value="Search" className="search-button" />
    </form>
  );

  if (loaded) {
    return (
      <div class="container">
        {form}
        <h1>
          {city}, {weather.country}
        </h1>
        <img src={weather.icon} height="200" alt="weather icon" />
        <p>
          {weather.description} | {weather.temperature}°C
        </p>
        <p>
          Humidity: {weather.humidity}% | Wind: {weather.wind}km/h
        </p>
        <p>
          Open source code by Catherine Glover, available on{" "}
          <a href="https://github.com/CathGlover/weather-react-shecodes-app">
            Github
          </a>{" "}
          hosted on{" "}
          <a href="https://main--clever-paletas-3c5a88.netlify.app/">Netlify</a>
        </p>
      </div>
    );
  } else {
    return (
      <div class="container">
        {form}
        <p>
          Opensource code by Catherine Glover, available on{" "}
          <a href="https://github.com/CathGlover/weather-react-shecodes-app">
            Github
          </a>{" "}
          hosted on{" "}
          <a href="https://main--clever-paletas-3c5a88.netlify.app/">Netlify</a>
        </p>
      </div>
    );
  }
}
