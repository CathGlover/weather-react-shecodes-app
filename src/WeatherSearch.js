import React, { useState } from "react";
import axios from "axios";

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
      temperature: response.data.daily[0].temperature.day,
      wind: response.data.daily[0].wind.speed,
      humidity: response.data.daily[0].temperature.humidity,
      description: response.data.daily[0].condition.description,
      icon: response.data.daily[0].condition.icon_url,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={changeCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>Description: {weather.description}</li>
          <li>
            <img src={weather.icon} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
