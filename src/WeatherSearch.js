import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import WeatherInfo from "./WeatherInfo";
export default function WeatherSearch() {
  let [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [allData, setAllData] = useState({});
  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}
        &key=edf069311acf2bebo10f4bbbc53249t3&units=metric`;
    axios.get(url, { signal: AbortSignal.timeout(1000) }).then(displayWeather);
  }

  function displayWeather(response) {
    setAllData(response);
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
        <WeatherInfo data={weather} allData={allData} />
      </div>
    );
  } else {
    const url = `https://api.shecodes.io/weather/v1/forecast?query=London
        &key=edf069311acf2bebo10f4bbbc53249t3&units=metric`;
    axios.get(url).then(displayWeather);
    return <div className="container">{form}</div>;
  }
}
