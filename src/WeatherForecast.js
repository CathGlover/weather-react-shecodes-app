import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(event) {
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${event.data.data.cities}&key=edf069311acf2bebo10f4bbbc53249t3&units=metric`;
  axios.get(url).then(handleResponse);

  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5 || index > 0) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
          ;
        </div>
      </div>
    );
  }
}
