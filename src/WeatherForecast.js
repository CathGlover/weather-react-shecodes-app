import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherSearch.css";
import axios from "axios";

export default function WeatherForecast(event) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayWeather(response) {
    setForecast(event.data.allData.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row WeatherForecast">
          <div className="col">
            <div></div>
            <WeatherForecastDay forecast={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[4]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    const url = `https://api.shecodes.io/weather/v1/forecast?query=London
        &key=edf069311acf2bebo10f4bbbc53249t3&units=metric`;
    axios.get(url).then(displayWeather);
    return null;
  }
}
