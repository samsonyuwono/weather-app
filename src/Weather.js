import React, { Component } from "react";

const Weather = ({ weather, date }) => (
  <div className="column">
    <div>{date.format("dddd")}</div>
    <div>{date.format("MMM Do")}</div>
    <p>{weather.day}</p>
    <img src={weather.image} alt="Sun" />
    <div className="temperature">
      <p>{weather.high}°</p>
      <p>{weather.low}°</p>
    </div>
  </div>
);

export default Weather;
