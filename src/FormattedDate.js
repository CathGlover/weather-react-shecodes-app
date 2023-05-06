import React from "react";
import moment from "moment";
import "moment-timezone";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let date = moment().format("MMMM Do YYYY, h:mm a");
  return (
    <div>
      {day} {date}
    </div>
  );
}
