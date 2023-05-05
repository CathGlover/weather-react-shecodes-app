import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(event) {
  console.log(event);
  return (
    <div className="WeatherForecastDay">
      <FormattedDate date={event.data.time} />
      <span>
        <WeatherIcon icon={event.data.icon} size={52} />
      </span>
      <span className="forecastTemperature">
        <span className="forecastTemperatureMax">
          {event.data.temperature.maximum}
        </span>
        <span className="forecastTemperatureMin">
          {event.data.temperature.minimum}
        </span>
      </span>
    </div>
  );
}
