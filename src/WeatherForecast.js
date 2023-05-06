import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(event) {
  let forecast = event.data.allData.data.daily;
  return (
    <div className="WeatherForecast">
      <div className="row">
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
}
