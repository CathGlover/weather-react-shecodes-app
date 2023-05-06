import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(event) {
  function createDate() {
    let date = new Date(event.forecast.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      {createDate()}
      <div>
        <WeatherIcon code={event.forecast.condition.icon} size={48} />
      </div>
      <span className="forecastTemperature">
        <span className="forecastTemperatureMax">
          {Math.round(event.forecast.temperature.maximum)}°
        </span>
        <span className="forecastTemperatureMin">
          {Math.round(event.forecast.temperature.minimum)}°
        </span>
      </span>
    </div>
  );
}
