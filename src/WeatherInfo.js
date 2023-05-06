import React from "react";
import "./WeatherSearch.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherSearch.css";
import WeatherTemperature from "./WeatherTemperature";
import Moment from "react-moment";
import "moment-timezone";
import WeatherForecast from "./WeatherForecast";

export default function weatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.cities}, {props.data.country}
      </h1>
      <div className="row">
        <div className="col">
          <br />
          <WeatherIcon code={props.data.icon} size={200} />
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
      <WeatherForecast data={props} allData ={props.allData} />
    </div>
  );
}
