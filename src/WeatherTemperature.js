import React, { useState } from "react";
import "./WeatherSearch.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <p>
          <span className="text-capitalize description">
            {props.description}
          </span>{" "}
          | <span className="temperature">{props.celsius}</span>
          <span className="unit">
            <sup>
              {" "}
              °C |{" "}
              <a href="" onClick={convertToFahrenheit}>
                {" "}
                °F{" "}
              </a>
            </sup>
          </span>
        </p>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <p>
          <span className="text-capitalize description">
            {props.description}
          </span>{" "}
          | <span className="temperature">{Math.round(fahrenheit)}</span>
          <span className="unit">
            <sup>
              <a href="" onClick={convertToCelsius}>
                {" "}
                °C{" "}
              </a>
              | °F{" "}
            </sup>
          </span>
        </p>
      </div>
    );
  }
}
