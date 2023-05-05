import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(event) {
  return (<div className = "WeatherForecastDay">
  <FormattedDate date={event.date} />
    <span>
      <WeatherIcon icon={event.icon} size={52} />
    </span>
    <span className="forecastTemperature">
      <span className="forecastTemperatureMax">
        {event.temperature.maximum}
      </span>
      <span className="forecastTemperatureMin">
        {event.temperature.minimimum}
      </span>
    </span>
  </div>);
}
