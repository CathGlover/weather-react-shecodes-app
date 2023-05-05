import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  let day = days[props.date.getDay()];

  return <div>{day}</div>;
}
