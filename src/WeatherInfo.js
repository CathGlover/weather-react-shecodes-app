import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import FormattedDate from "./FormattedDate";

export default function weatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.cities}, {props.data.country}
      </h1>
      <div className="row">
        <div className="col">
          <img src={props.data.icon} height="200" alt="weather icon" />
        </div>
        <div className="col">
          <br />
          <br />
          <p>
            <FormattedDate date={props.data.date} />
          </p>
          <p>
            <span className="text-capitalize description">
              {props.data.description}
            </span>{" "}
            | <span className="temperature">{props.data.temperature}</span>
            <span className="unit">°C</span>
          </p>
          <p>
            Humidity: {props.data.humidity}% | Wind: {props.data.wind}km/h
          </p>
        </div>
      </div>
    </div>
  );
}
