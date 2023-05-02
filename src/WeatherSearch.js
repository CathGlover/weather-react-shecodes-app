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
      cities: response.data.city,
      date: "Wednesday 17:00",
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-bar"
        placeholder="Enter a city"
        autoFocus="on"
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
          {weather.cities}, {weather.country}
        </h1>
        <div class="row">
          <div class="col">
            <img src={weather.icon} height="200" alt="weather icon" />
          </div>
          <div class="col">
            <br />
            <br />
            <p>{weather.date}</p>
            <p>
              <span className="text-capitalize description">
                {weather.description}
              </span>{" "}
              | <span className="temperature">{weather.temperature}</span>
              <span className="unit">°C</span>
            </p>
            <p>
              Humidity: {weather.humidity}% | Wind: {weather.wind}km/h
            </p>
          </div>
        </div>
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
