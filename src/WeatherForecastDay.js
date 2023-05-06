import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(event) {
  console.log(event.forecast);
  return (
    <div className="WeatherForecastDay">
      <div>
        <WeatherIcon code={event.forecast.condition.icon} size={52} />
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
