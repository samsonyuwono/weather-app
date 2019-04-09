import React, { Component } from "react";

const Column = ({ column }) => (
  <div className="column">
    <p>{column.day}</p>
    <img src={column.image} alt="Sun" />
    <div className="temperature">
      <p>{column.high}°</p>
      <p>{column.low}°</p>
    </div>
  </div>
);

export default Column;
