import React, { useState } from "react";
import axios from "axios";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  let day = days[props.date.getDay()];

  return <div>{day}</div>;
}
