import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";
import "./WeatherSearch.css";
import WeatherTemperature from "./WeatherTemperature";

export default function weatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.cities}, {props.data.country}
      </h1>
      <div className="row">
        <div className="col">
          <br />
          <WeatherIcon code={props.data.icon} />
          <br />
        </div>
        <div className="col">
          <p>
            <br />
            <FormattedDate date={props.data.date} />
          </p>
          <WeatherTemperature
            description={props.data.description}
            celsius={props.data.temperature}
          />
          <p>
            Humidity: {props.data.humidity}% | Wind: {props.data.wind}km/h
          </p>
        </div>
      </div>
    </div>
  );
}
