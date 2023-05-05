import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import WeatherInfo from "./WeatherInfo";
import ReactAnimatedWeather from "react-animated-weather";

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
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.daily[0].temperature.day),
      wind: Math.round(response.data.daily[0].wind.speed),
      humidity: response.data.daily[0].temperature.humidity,
      description: response.data.daily[0].condition.description,
      icon: response.data.daily[0].condition.icon,
      country: response.data.country,
      cities: response.data.city,
      date: new Date(response.data.daily[0].time * 1000),
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
      <div className="container">
        {form}
        <WeatherInfo data={weather} />
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
    const url = `https://api.shecodes.io/weather/v1/forecast?query=Londons
        &key=edf069311acf2bebo10f4bbbc53249t3&units=metric`;
    axios.get(url).then(displayWeather);
    return (
      <div className="container">
        {form}
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
  }
}
