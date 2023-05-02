import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherSearch.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": `CLEAR_DAY`,
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    snow_day: "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  return (
    <center>
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#ADD8E6"
        size={200}
        animate={true}
      />
    </center>
  );
}
